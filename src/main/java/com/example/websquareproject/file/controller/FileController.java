package com.example.websquareproject.file.controller;

import com.example.websquareproject.file.dto.FileDto;
import com.example.websquareproject.file.service.FileService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@Slf4j
@RestController
@RequestMapping("/file")
public class FileController {

    private final FileService fileService;

    public FileController(FileService fileService) {
        this.fileService = fileService;
    }

    @PostMapping("/pc")
    public ResponseEntity<FileDto> uploadFilePc (@RequestParam("upload") MultipartFile file) {
        return fileService.uploadFile(file, "pc");
    }

    @PostMapping("/mobile")
    public ResponseEntity<FileDto> uploadFileMo (@RequestParam("upload") MultipartFile file) {
        return fileService.uploadFile(file, "mobile");
    }

    @PostMapping("/attachment")
    public ResponseEntity<FileDto> uploadFileAt (@RequestParam("upload") MultipartFile file) {
        return fileService.uploadFile(file, "attachment");
    }
}
