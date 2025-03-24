package com.example.websquareproject.category.controller;

import com.example.websquareproject.category.dto.CategoryTreeDto;
import com.example.websquareproject.category.dto.CategoryFormDto;
import com.example.websquareproject.category.dto.CategoryDto;
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
    public ResponseEntity<Map<String, List<CategoryTreeDto>>> getCategories() {
        return categoryService.getCategories1d();
    }

    @PostMapping("/child")
    public ResponseEntity<Map<String, List<CategoryTreeDto>>> getCategories(@RequestBody ParentCategoryListDto parentCategoryDto) {
        int parentId = parentCategoryDto.getParentCategory().getParentId();
        return categoryService.getCategories2d(parentId);
    }

    // 카테고리 관리 - 트리 조회
    @GetMapping("/list")
    public ResponseEntity<List<CategoryTreeDto>> getCategoryWithDepth() {
        return categoryService.getCategoryWithDepth();
    }

    // 카테고리 관리 - 카테고리 상세 조회
    @PostMapping("/info")
    public ResponseEntity<CategoryFormDto> getCategoryInfo(@RequestBody CategoryDto categoryDto) {
        int categoryId = categoryDto.getCategoryId();
        return categoryService.getCategoryInfo(categoryId);
    }

    // 카테고리 추가/수정
    @PutMapping("/info")
    public ResponseEntity<String> createOrUpdateCategoryInfo(@RequestBody CategoryFormDto categoryFormDto) {
        System.out.println(categoryFormDto.getCategoryFormId());
        categoryService.createOrUpdateCategory(categoryFormDto);
        return ResponseEntity.ok("Success");
    }

    // 카테고리 삭제
    @DeleteMapping("")
    public ResponseEntity<String> deleteCategory(@RequestBody CategoryDto parentCategoryDto) {
        categoryService.deleteCategory(parentCategoryDto.getCategoryId());
        return ResponseEntity.ok("Success");
    }
}
