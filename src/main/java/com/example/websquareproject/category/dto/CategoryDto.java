package com.example.websquareproject.category.dto;

import com.fasterxml.jackson.annotation.JsonSetter;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class CategoryDto {
    private int categoryId;

    @JsonSetter("categoryId")
    public void setCategoryId(String categoryIdStr) {
        try {
            this.categoryId = Integer.parseInt(categoryIdStr);
        } catch (NumberFormatException e) {
            this.categoryId = -1; // 또는 에러 로깅
        }
    }
}
