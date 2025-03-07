package com.example.websquareproject.category.service;

import com.example.websquareproject.category.dto.CategoryDto;
import com.example.websquareproject.category.dto.CategoryListDto;
import com.example.websquareproject.category.mapper.CategoryMapper;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class CategoryService {

    private final CategoryMapper categoryMapper;

    public CategoryService(CategoryMapper categoryMapper) {
        this.categoryMapper = categoryMapper;
    }

    public ResponseEntity<Map<String, List<CategoryListDto>>> getCategories1d() {
        List<CategoryListDto> categories = categoryMapper.getCategories1d();

        Map<String, List<CategoryListDto>> response = new HashMap<>();
        response.put("categoryList1d", categories);

        return ResponseEntity.ok(response);
    }

    public ResponseEntity<Map<String, List<CategoryListDto>>> getCategories2d(int parentId) {
        List<CategoryListDto> categories = categoryMapper.getCategories2d(parentId);

        Map<String, List<CategoryListDto>> response = new HashMap<>();
        response.put("categoryList2d", categories);

        return ResponseEntity.ok(response);
    }
}
