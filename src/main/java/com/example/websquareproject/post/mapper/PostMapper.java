package com.example.websquareproject.post.mapper;

import com.example.websquareproject.post.dto.ExcelListDto;
import com.example.websquareproject.post.dto.PostListDto;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface PostMapper {
    List<PostListDto> getPosts(@Param("category1") Integer category1,
                               @Param("category2") Integer category2,
                               @Param("periodType") String periodType,
                               @Param("startDate") String startDate,
                               @Param("endDate") String endDate,
                               @Param("isDisplayed") String isDisplayed,
                               @Param("searchType") String searchType,
                               @Param("keyword") String keyword,
                               @Param("size") int size,
                               @Param("offset") int offset);

    List<ExcelListDto> getExcelList(@Param("category1") Integer category1,
                                    @Param("category2") Integer category2,
                                    @Param("periodType") String periodType,
                                    @Param("startDate") String startDate,
                                    @Param("endDate") String endDate,
                                    @Param("isDisplayed") String isDisplayed,
                                    @Param("searchType") String searchType,
                                    @Param("keyword") String keyword);

    int getPostsCount(@Param("category1") Integer category1,
                        @Param("category2") Integer category2,
                        @Param("periodType") String periodType,
                        @Param("startDate") String startDate,
                        @Param("endDate") String endDate,
                        @Param("isDisplayed") String isDisplayed,
                        @Param("searchType") String searchType,
                        @Param("keyword") String keyword,
                        @Param("size") int size,
                        @Param("offset") int offset);  // 전체 건수
    void deletePosts(List<Integer> postIds);

    void updatePosts(List<PostListDto> postListDto);

}
