package com.example.websquareproject.category.mapper;

import com.example.websquareproject.category.dto.CategoryDto;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface CategoryMapper {
    List<CategoryDto> getCategories1d();
    List<CategoryDto> getCategories2d(int parentId);
    List<CategoryDto> getCategories();
    void deleteCategory(int categoryId);
}
