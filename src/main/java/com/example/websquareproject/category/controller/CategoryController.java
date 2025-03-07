package com.example.websquareproject.category.controller;

import com.example.websquareproject.category.dto.CategoryDto;
import com.example.websquareproject.category.dto.CategoryListDto;
import com.example.websquareproject.category.dto.ParentCategoryDto;
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
    public ResponseEntity<Map<String, List<CategoryListDto>>> getCategories() {
        return categoryService.getCategories1d();
    }

//    @GetMapping("/child")
//    public ResponseEntity<Map<String, List<CategoryListDto>>> getCategories(@RequestParam int parentId) {
//        return categoryService.getCategories2d(parentId);
//    }
    @PostMapping("/child")
    public ResponseEntity<Map<String, List<CategoryListDto>>> getCategories(@RequestBody ParentCategoryDto parentCategoryDto) {
        int parentId = parentCategoryDto.getParentCategory().getParentId();
        return categoryService.getCategories2d(parentId);
    }

    // 카테고리 추가

    // 카레고리 수정

    // 카테고리 삭제
}
