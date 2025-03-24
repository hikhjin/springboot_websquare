package com.example.websquareproject.category.dto;

import lombok.*;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Setter
@ToString
public class CategoryCreateDto {
   private CategoryDto category;
   private CategoryFormDto categoryForm;
}
