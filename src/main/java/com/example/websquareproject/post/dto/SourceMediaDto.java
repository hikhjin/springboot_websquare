package com.example.websquareproject.post.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class SourceMediaDto {
    private int postId;
    private String sourceMediaContent;
    private String createdBy;
    private String updatedBy;
}
