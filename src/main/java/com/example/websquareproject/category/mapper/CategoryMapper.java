package com.example.websquareproject.category.mapper;

import com.example.websquareproject.category.dto.CategoryListDto;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface CategoryMapper {
    List<CategoryListDto> getCategories1d();
    List<CategoryListDto> getCategories2d(int parentId);
}
