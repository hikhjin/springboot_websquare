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
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.UUID;

@Slf4j
@Service
public class FileService {

    private static final Logger logger = LoggerFactory.getLogger(FileService.class);

    @Transactional
    public ResponseEntity<FileDto> uploadFile(MultipartFile file, String type) {
        try {
            String uploadDir;
            // 저장 디렉토리 설정
            if (type.equals("attachment")) {
                uploadDir = "src/main/resources/static/common/attachment";
            } else {
                uploadDir = "src/main/resources/static/common/images/" + type;
            }
            Path uploadPath = Paths.get(uploadDir);

            // 디렉토리 없으면 생성
            if (!Files.exists(uploadPath)) {
                Files.createDirectories(uploadPath);
            }

            // 파일 저장 경로 설정 (UUID 활용)
            String fileName = UUID.randomUUID().toString() + "_" + file.getOriginalFilename();
            Path fileFullPath = uploadPath.resolve(fileName);
            Files.copy(file.getInputStream(), fileFullPath, StandardCopyOption.REPLACE_EXISTING);

            System.out.println(fileName);
            // fileDto 객체 생성
            FileDto uploadedFile = new FileDto(
                    file.getOriginalFilename(),
                    fileName,
                    "",  // URL 형식으로 변환
                    file.getSize()
            );

            if (type.equals("attachment")) {
                uploadedFile.setFilePath("/common/attachment/" + fileName);
            } else {
                uploadedFile.setFilePath("/common/images/" + type + "/" + fileName);
            }
            System.out.println(uploadedFile.toString());

            // 성공 메시지 반환
            return ResponseEntity.ok(uploadedFile);
        } catch (Exception e) {
            System.out.println(e.getMessage());
            return ResponseEntity.status(500).body(null);
        }
    }

}
