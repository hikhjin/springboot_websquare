package com.example.websquareproject.category.mapper;

import com.example.websquareproject.category.dto.CategoryTreeDto;
import com.example.websquareproject.category.dto.CategoryFormDto;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface CategoryMapper {
    List<CategoryTreeDto> getCategories1d();
    List<CategoryTreeDto> getCategories2d(int parentId);
    List<CategoryTreeDto> getCategories();
    CategoryFormDto getCategoryInfo(int categoryId);
    void updateCategory(CategoryFormDto formDto);
    void createCategory(CategoryFormDto formDto);
    void deleteCategory(int categoryId);
}
