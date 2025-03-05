package com.example.websquareproject.category.service;

import com.example.websquareproject.category.dto.CategoryNameDto;
import com.example.websquareproject.category.mapper.CategoryMapper;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoryService {

    private final CategoryMapper categoryMapper;

    public CategoryService(CategoryMapper categoryMapper) {
        this.categoryMapper = categoryMapper;
    }

    public ResponseEntity<List<CategoryNameDto>> getCategories(int depth) {
        List<CategoryNameDto> categories = categoryMapper.getCategories(depth);
        return ResponseEntity.ok(categories);
    }
}
