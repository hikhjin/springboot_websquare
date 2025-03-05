package com.example.websquareproject.category.mapper;

import com.example.websquareproject.category.dto.CategoryNameDto;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface CategoryMapper {
    List<CategoryNameDto> getCategories(int depth);
}
