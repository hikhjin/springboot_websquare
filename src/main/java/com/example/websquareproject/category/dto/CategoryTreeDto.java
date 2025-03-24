package com.example.websquareproject.category.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class CategoryTreeDto {
    private int categoryId;
    private String categoryName;
    private int depth;
}
