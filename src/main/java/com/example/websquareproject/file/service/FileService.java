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
