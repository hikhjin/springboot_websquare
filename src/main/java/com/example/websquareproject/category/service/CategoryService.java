package com.example.websquareproject.category.service;

import com.example.websquareproject.category.dto.CategoryDto;
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

    public ResponseEntity<Map<String, List<CategoryDto>>> getCategories1d() {
        List<CategoryDto> categories = categoryMapper.getCategories1d();

        Map<String, List<CategoryDto>> response = new HashMap<>();
        response.put("categoryList1d", categories);

        return ResponseEntity.ok(response);
    }

    public ResponseEntity<Map<String, List<CategoryDto>>> getCategories2d(int parentId) {
        List<CategoryDto> categories = categoryMapper.getCategories2d(parentId);

        Map<String, List<CategoryDto>> response = new HashMap<>();
        response.put("categoryList2d", categories);

        return ResponseEntity.ok(response);
    }

    public ResponseEntity<List<CategoryDto>> getCategoryWithDepth() {
        List<CategoryDto> categories = categoryMapper.getCategories();
        return ResponseEntity.ok(categories);
    }

    public void deleteCategory(int categoryId) {
        categoryMapper.deleteCategory(categoryId);
    }
}
