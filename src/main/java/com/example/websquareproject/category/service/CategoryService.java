package com.example.websquareproject.category.service;

import com.example.websquareproject.category.dto.CategoryCreateDto;
import com.example.websquareproject.category.dto.CategoryDto;
import com.example.websquareproject.category.dto.CategoryTreeDto;
import com.example.websquareproject.category.dto.CategoryFormDto;
import com.example.websquareproject.category.mapper.CategoryMapper;
import jdk.jfr.Category;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class CategoryService {

    private final CategoryMapper categoryMapper;

    public CategoryService(CategoryMapper categoryMapper) {
        this.categoryMapper = categoryMapper;
    }

    public ResponseEntity<Map<String, List<CategoryTreeDto>>> getCategories1d() {
        List<CategoryTreeDto> categories = categoryMapper.getCategories1d();

        Map<String, List<CategoryTreeDto>> response = new HashMap<>();
        response.put("categoryList1d", categories);

        return ResponseEntity.ok(response);
    }

    public ResponseEntity<Map<String, List<CategoryTreeDto>>> getCategories2d(int parentId) {
        List<CategoryTreeDto> categories = categoryMapper.getCategories2d(parentId);

        Map<String, List<CategoryTreeDto>> response = new HashMap<>();
        response.put("categoryList2d", categories);

        return ResponseEntity.ok(response);
    }

    public ResponseEntity<List<CategoryTreeDto>> getCategoryWithDepth() {
        List<CategoryTreeDto> categories = categoryMapper.getCategories();
        return ResponseEntity.ok(categories);
    }

    public ResponseEntity<CategoryFormDto> getCategoryInfo(int categoryId) {
        CategoryFormDto categoryInfo = categoryMapper.getCategoryInfo(categoryId);
        return ResponseEntity.ok(categoryInfo);
    }

    @Transactional
    public void createOrUpdateCategory(CategoryCreateDto categoryCreateDto) {
        int categoryId = categoryCreateDto.getCategory().getCategoryId();
        CategoryFormDto categoryFormDto = categoryCreateDto.getCategoryForm();

        if (categoryFormDto.getIsHidden() == null) {
            categoryFormDto.setIsHidden("N");
        }

        System.out.println(categoryId);
        System.out.println(categoryFormDto.toString());
        if (categoryId == -1) { // 새로 만들 경우
            if (categoryFormDto.getParentId() == null) { // 1 depth에 추가
                categoryFormDto.setParentId(null);
            }

            categoryMapper.createCategory(categoryFormDto);
        } else {
            categoryMapper.updateCategory(categoryFormDto, categoryId);
        }
    }

    public void deleteCategory(int categoryId) {
        categoryMapper.deleteCategory(categoryId);
    }
}
