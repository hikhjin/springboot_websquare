package com.example.websquareproject.file.service;

import com.example.websquareproject.file.dto.FileDto;
import lombok.extern.slf4j.Slf4j;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.net.URLDecoder;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.UUID;

@Slf4j
@Service
public class FileService {

    private static final Logger logger = LoggerFactory.getLogger(FileService.class);
    private final S3Uploader s3Uploader;

    public FileService(S3Uploader s3Uploader) {
        this.s3Uploader = s3Uploader;
    }

//    @Transactional
//    public void deleteFile(String fileUrl) {
//        if (fileUrl == null || fileUrl.isEmpty()) {
//            return;
//        }
//
//        try {
//            // URL 인코딩 제거
//            String decodedUrl = URLDecoder.decode(fileUrl, StandardCharsets.UTF_8);
//            String BASE_PATH = "src/main/resources/static";
//            String fullPath = BASE_PATH + decodedUrl;
//
//            File file = new File(fullPath);
//            if (file.exists()) {
//                boolean deleted = file.delete();
//                if (!deleted) {
//                    System.err.println("파일 삭제 실패: " + fullPath);
//                } else {
//                    System.out.println("파일 삭제 성공: " + fullPath);
//                }
//            } else {
//                System.out.println("삭제 대상 파일이 존재하지 않음: " + fullPath);
//            }
//
//        } catch (Exception e) {
//            System.err.println("파일 삭제 중 예외 발생: " + e.getMessage());
//        }
//    }

    @Transactional
    public void deleteFile(String fileUrl) {
        System.out.println("Deleting file: " + fileUrl);
        if (fileUrl == null || fileUrl.isEmpty()) return;

        try {

            s3Uploader.deleteFile(fileUrl);
        } catch (Exception e) {
            log.error("S3 파일 삭제 실패", e);
        }
    }


//    @Transactional
//    public ResponseEntity<FileDto> uploadFile(MultipartFile file, String type) {
//        try {
//            String uploadDir;
//            // 저장 디렉토리 설정
//            if (type.equals("attachment")) {
//                uploadDir = "src/main/resources/static/common/attachment";
//            } else {
//                uploadDir = "src/main/resources/static/common/images/" + type;
//            }
//            Path uploadPath = Paths.get(uploadDir);
//
//            // 디렉토리 없으면 생성
//            if (!Files.exists(uploadPath)) {
//                Files.createDirectories(uploadPath);
//            }
//
//            // 파일 저장 경로 설정 (UUID 활용)
//            String fileName = UUID.randomUUID().toString() + "_" + file.getOriginalFilename();
//            Path fileFullPath = uploadPath.resolve(fileName);
//            Files.copy(file.getInputStream(), fileFullPath, StandardCopyOption.REPLACE_EXISTING);
//
//            // fileDto 객체 생성
//            FileDto uploadedFile = new FileDto(
//                    file.getOriginalFilename(),
//                    fileName,
//                    "",
//                    file.getSize()
//            );
//
//            if (type.equals("attachment")) {
//                uploadedFile.setFilePath("/common/attachment/" + fileName);
//            } else {
//                uploadedFile.setFilePath("/common/images/" + type + "/" + fileName);
//            }
//            System.out.println(uploadedFile.toString());
//
//            // 성공 메시지 반환
//            return ResponseEntity.ok(uploadedFile);
//        } catch (Exception e) {
//            System.out.println(e.getMessage());
//            return ResponseEntity.status(500).body(null);
//        }
//    }

    @Transactional
    public ResponseEntity<FileDto> uploadFile(MultipartFile file, String type) {
        try {
            String originalFileName = file.getOriginalFilename();
            String uuid = UUID.randomUUID().toString();
            String fileUploadName = uuid + "_" + originalFileName;

            String s3Url = s3Uploader.upload(file, type, fileUploadName);

            FileDto uploadedFile = new FileDto(
                    originalFileName,
                    fileUploadName,
                    s3Url, // 파일 경로는 s3 URL로 대체
                    file.getSize()
            );
            System.out.println(uploadedFile);

            return ResponseEntity.ok(uploadedFile);
        } catch (IOException e) {
            log.error("파일 업로드 실패", e);
            return ResponseEntity.status(500).body(null);
        }
    }

}
