package com.example.websquareproject.file.service;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.Optional;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.amazonaws.services.s3.AmazonS3Client;
import com.amazonaws.services.s3.model.CannedAccessControlList;
import com.amazonaws.services.s3.model.PutObjectRequest;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@RequiredArgsConstructor
@Component
@Service
public class S3Uploader {

    private final AmazonS3Client amazonS3Client;

    @Value("${cloud.aws.s3.bucketName}")
    private String bucket;

    // MultipartFile을 전달받아 File로 전환한 후 S3에 업로드
    public String upload(MultipartFile multipartFile, String type, String fileName) throws IOException {
        log.info("버킷 이름: {}", bucket);

        File uploadFile = null;

        try {
            uploadFile = convert(multipartFile)
                    .orElseThrow(() -> new IllegalArgumentException("MultipartFile -> File 전환 실패"));

            String folderPath = resolveFolderPath(type);
            log.info("폴더 경로(folderPath): {}", folderPath);

            return upload(uploadFile, folderPath, fileName);

        } catch (Exception e) {
            log.error("S3Uploader.upload 중 예외 발생: {}", e.getMessage(), e);
            throw e; // 예외를 다시 던져서 상위에서 처리 가능하게
        }
    }


    private String upload(File uploadFile, String folderPath, String fileName) {
        String fullPath = folderPath + "/" + fileName;
        String uploadImageUrl = putS3(uploadFile, fullPath);
        removeNewFile(uploadFile); // 로컬에 생성된 File 삭제 (MultipartFile -> File 전환 하며 로컬에 파일 생성됨)

        return uploadImageUrl; // 업로드된 파일의 S3 URL 주소 반환
    }

    private String resolveFolderPath(String type) {
        return switch (type.toLowerCase()) {
            case "attachment" -> "attachment";
            case "mobile" -> "images/mobile";
            case "pc" -> "images/pc";
            default -> "etc"; // 기본값 (예외처리 대용)
        };
    }

    // 실질적인 s3 업로드 부분
    private String putS3(File uploadFile, String fileName) {
        amazonS3Client.putObject(
                new PutObjectRequest(bucket, fileName, uploadFile)
                        .withCannedAcl(CannedAccessControlList.PublicRead) // PublicRead 권한으로 업로드
        );
        return amazonS3Client.getUrl(bucket, fileName).toString();
    }

    private void removeNewFile(File targetFile) {
        if (targetFile.delete()) {
            log.info("파일이 삭제되었습니다.");
        } else {
            log.info("파일이 삭제되지 못했습니다.");
        }
    }

    private Optional<File> convert(MultipartFile file) throws IOException {
        String originalFileName = file.getOriginalFilename();
        log.info("convert() 호출 - 원본 파일 이름: {}", file.getOriginalFilename());

        if (originalFileName == null || originalFileName.isBlank()) {
            log.error("MultipartFile의 originalFilename이 null 또는 비어있음");
            return Optional.empty();
        }
        File convertFile = new File(file.getOriginalFilename());
        log.info("변환 파일 경로: {}", convertFile.getAbsolutePath());

        try {
            boolean created = convertFile.createNewFile();
            if (!created) {
                log.warn("이미 같은 이름의 파일이 존재하거나 파일 생성 실패: {}", convertFile.getAbsolutePath());
            }

            try (FileOutputStream fos = new FileOutputStream(convertFile)) {
                fos.write(file.getBytes());
            }

            return Optional.of(convertFile);

        } catch (IOException e) {
            log.error("MultipartFile -> File 변환 중 IOException 발생", e);
            throw e;
        }
    }

    public void deleteFile(String fileUrl) {
        try {
            String fileKey = extractKeyFromUrl(fileUrl);
            amazonS3Client.deleteObject(bucket, fileKey);
            log.info("S3 파일 삭제 완료: {}", fileKey);
        } catch (Exception e) {
            log.error("S3 파일 삭제 중 오류 발생", e);
        }
    }

    // S3 URL에서 key 추출 (버킷명 이후 경로 추출)
    private String extractKeyFromUrl(String fileUrl) {
        String bucketUrl = amazonS3Client.getUrl(bucket, "").toString(); // ex: https://your-bucket.s3.amazonaws.com/
        return fileUrl.replace(bucketUrl, ""); // 파일 키만 남김
    }
}

