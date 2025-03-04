package com.example.websquareproject.category.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class CategoryDto {
    private String categoryName;
    private int parentId;
    private String isHidden;
    private String description;
    private String help;
    private String createdBy;
    private String updatedBy;
}
