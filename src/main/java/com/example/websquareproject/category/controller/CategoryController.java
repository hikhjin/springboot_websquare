package com.example.websquareproject.category.controller;

import com.example.websquareproject.category.dto.CategoryDto;
import com.example.websquareproject.category.dto.DeleteCategoryDto;
import com.example.websquareproject.category.dto.ParentCategoryListDto;
import com.example.websquareproject.category.service.CategoryService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/category")
public class CategoryController {

    private final CategoryService categoryService;

    public CategoryController(CategoryService categoryService) {
        this.categoryService = categoryService;
    }

    //카테고리 1depth 조회
    @GetMapping("")
    public ResponseEntity<Map<String, List<CategoryDto>>> getCategories() {
        return categoryService.getCategories1d();
    }

    @PostMapping("/child")
    public ResponseEntity<Map<String, List<CategoryDto>>> getCategories(@RequestBody ParentCategoryListDto parentCategoryDto) {
        int parentId = parentCategoryDto.getParentCategory().getParentId();
        return categoryService.getCategories2d(parentId);
    }

    // 카테고리 관리 - 조회
    @GetMapping("/list")
    public ResponseEntity<List<CategoryDto>> getCategoryWithDepth() {
        return categoryService.getCategoryWithDepth();
    }

    // 카테고리 추가

    // 카레고리 수정

    // 카테고리 삭제
    @DeleteMapping("")
    public ResponseEntity<String> deleteCategory(@RequestBody DeleteCategoryDto parentCategoryDto) {
        categoryService.deleteCategory(parentCategoryDto.getCategoryId());
        return ResponseEntity.ok("Success");
    }
}
