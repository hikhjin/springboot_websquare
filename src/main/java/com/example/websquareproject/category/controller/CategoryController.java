package com.example.websquareproject.category.controller;

import com.example.websquareproject.category.dto.CategoryNameDto;
import com.example.websquareproject.category.service.CategoryService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/category")
public class CategoryController {

    private final CategoryService categoryService;

    public CategoryController(CategoryService categoryService) {
        this.categoryService = categoryService;
    }

    //카테고리 이름 조회
    @GetMapping("")
    public ResponseEntity<List<CategoryNameDto>> getCategories(@RequestParam int depth) {
        return categoryService.getCategories(depth);
    }

    // 카테고리 추가

    // 카레고리 수정

    // 카테고리 삭제
}
