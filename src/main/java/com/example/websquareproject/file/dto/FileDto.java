package com.example.websquareproject.file.dto;

import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class FileDto {
    private String fileOriginalName;
    private String fileUploadName;
    private String filePath;
    private long fileSize;
}
