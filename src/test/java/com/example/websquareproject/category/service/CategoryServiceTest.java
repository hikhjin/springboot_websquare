package com.example.websquareproject.category.service;

import com.example.websquareproject.category.dto.CategoryCreateDto;
import com.example.websquareproject.category.dto.CategoryDto;
import com.example.websquareproject.category.dto.CategoryFormDto;
import com.example.websquareproject.category.mapper.CategoryMapper;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class CategoryServiceTest {
    @Mock
    private CategoryMapper categoryMapper;

    @InjectMocks
    private CategoryService categoryService;

    @DisplayName("카테고리 1d 생성 테스트")
    @Test
    void createOrUpdateCategory_1d_신규생성() {
        // given
        CategoryFormDto formDto = new CategoryFormDto();
        CategoryDto categoryDto = new CategoryDto(-1); // 신규 생성
        formDto.setParentId(null);
        formDto.setIsHidden(null);
        formDto.setCategoryName("테스트_카테고리");
        formDto.setCreatedBy("hikhjin");
        formDto.setUpdatedBy("hikhjin");

        CategoryCreateDto createDto = new CategoryCreateDto(categoryDto, formDto);

        when(categoryMapper.getMaxDisplayOrder1d()).thenReturn(3);

        // when
        categoryService.createOrUpdateCategory(createDto);

        // then
        assertEquals("N", formDto.getIsHidden());
        assertEquals(4, formDto.getDisplayOrder());
        verify(categoryMapper).getMaxDisplayOrder1d();
        verify(categoryMapper).createCategory(formDto);
    }

    @DisplayName("카테고리 2d 생성 테스트")
    @Test
    void createOrUpdateCategory_2d_신규생성() {
        // given
        CategoryFormDto formDto = new CategoryFormDto();
        CategoryDto categoryDto = new CategoryDto(-1); // 신규 생성
        formDto.setParentId(2);
        formDto.setIsHidden(null);
        formDto.setCategoryName("테스트_카테고리");
        formDto.setCreatedBy("hikhjin");
        formDto.setUpdatedBy("hikhjin");

        CategoryCreateDto createDto = new CategoryCreateDto(categoryDto, formDto);

        when(categoryMapper.getMaxDisplayOrder2d(2)).thenReturn(7);

        // when
        categoryService.createOrUpdateCategory(createDto);

        // then
        assertEquals("N", formDto.getIsHidden());
        assertEquals(8, formDto.getDisplayOrder());
        verify(categoryMapper).getMaxDisplayOrder2d(2);
        verify(categoryMapper).createCategory(formDto);
    }

    @DisplayName("카테고리 수정 테스트")
    @Test
    void createOrUpdateCategory_수정() {
        // given
        CategoryFormDto formDto = new CategoryFormDto();
        CategoryDto categoryDto = new CategoryDto(3);
        formDto.setCategoryName("수정 카테고리");
        formDto.setIsHidden("Y");
        formDto.setUpdatedBy("hikhjin");

        CategoryCreateDto createDto = new CategoryCreateDto(categoryDto, formDto);

        // when
        categoryService.createOrUpdateCategory(createDto);

        // then
        verify(categoryMapper, times(1)).updateCategory(formDto, 3);
    }

}