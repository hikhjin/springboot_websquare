package com.example.websquareproject.post.mapper;

import com.example.websquareproject.post.dto.ExcelListDto;
import com.example.websquareproject.post.dto.PostFormDto;
import com.example.websquareproject.post.dto.PostListDto;
import com.example.websquareproject.travelPlace.dto.TravelPlaceListDto;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Options;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.SelectKey;

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

    int createPost(@Param("postFormDto") PostFormDto postFormDto, @Param("categoryId") int categoryId);

    void insertPostTravelPlace(@Param("postId") int postId, @Param("travelPlaceId") int travelPlaceId);

    void insertSourceMedia(@Param("postId") int postId, @Param("sourceMedia") String sourceMedia);

    Integer getParentCategoryId(@Param("categoryId") int categoryId);

}
