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

//    @PostMapping("/pc")
//    public ResponseEntity<FileDto> uploadFilePc (@RequestParam("upload") MultipartFile file) {
//        return fileService.uploadFile(file, "pc");
//    }

    @PostMapping("/pc")
    public String uploadFilePc (@RequestParam("upload") MultipartFile file) {
        FileDto fileDto = fileService.uploadFile(file, "pc").getBody();
        return generatePostMessageScript(fileDto);
    }

    @PostMapping("/mobile")
    public String uploadFileMo (@RequestParam("upload") MultipartFile file) {
        FileDto fileDto = fileService.uploadFile(file, "mobile").getBody();
        return generatePostMessageScript(fileDto);
    }

    @PostMapping("/attachment")
    public String uploadFileAt (@RequestParam("upload") MultipartFile file) {
        FileDto fileDto = fileService.uploadFile(file, "attachment").getBody();
        return generatePostMessageScript(fileDto);
    }

//    @PostMapping("/mobile")
//    public ResponseEntity<FileDto> uploadFileMo (@RequestParam("upload") MultipartFile file) {
//        return fileService.uploadFile(file, "mobile");
//    }

//    @PostMapping("/attachment")
//    public ResponseEntity<FileDto> uploadFileAt (@RequestParam("upload") MultipartFile file) {
//        return fileService.uploadFile(file, "attachment");
//    }

    private String generatePostMessageScript(FileDto fileDto) {
        if (fileDto == null) {
            return "<script>window.parent.postMessage({ type: 'tempCallback', data: 'error: file upload failed' }, '*');</script>";
        }

        return "<script>" +
                "window.parent.postMessage({" +
                "   type: 'tempCallback'," +
                "   data: '<ret>" +
                "<uploadPath>" + fileDto.getFilePath() + "</uploadPath>" +
                "<saveFileName>" + fileDto.getFileUploadName() + "</saveFileName>" +
                "<OriginalFileName>" + fileDto.getFileOriginalName() + "</OriginalFileName>" +
                "<uploadFileSize>" + fileDto.getFileSize() + "</uploadFileSize>" +
                "</ret>'" +
                "}, '*');" +
                "</script>";
    }
}
