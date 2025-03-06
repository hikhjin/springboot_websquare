package com.example.websquareproject.category.service;

import com.example.websquareproject.category.dto.CategoryNameDto;
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

    public ResponseEntity<Map<String, List<CategoryNameDto>>> getCategories() {
//        List<CategoryNameDto> categories = categoryMapper.getCategories(depth);
//        return ResponseEntity.ok(categories);
        List<CategoryNameDto> categories = categoryMapper.getCategories();

        // JSON 형식을 맞추기 위해 "categoryList" 키를 가진 Map 생성
        Map<String, List<CategoryNameDto>> response = new HashMap<>();
        response.put("categoryList", categories);

        return ResponseEntity.ok(response);
    }
}
