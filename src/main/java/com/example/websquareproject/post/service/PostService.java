package com.example.websquareproject.post.service;

import com.example.websquareproject.category.dto.CategoryNameDto;
import com.example.websquareproject.post.dto.PostListDto;
import com.example.websquareproject.post.dto.PostDeleteDto;
import com.example.websquareproject.post.dto.PostOrderListDto;
import com.example.websquareproject.post.mapper.PostMapper;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class PostService {

    private final PostMapper postMapper;

    public PostService(PostMapper postMapper) {
        this.postMapper = postMapper;
    }

    public ResponseEntity<Map<String, List<PostListDto>>> getPosts(String category1, String category2, String periodType, String startDate,
                                                                   String endDate, String isDisplayed, String searchType, String keyword,
                                                                   int size, int page) {
        int offset = (page - 1) * size;
        List<PostListDto> posts = postMapper.getPosts(category1, category2, periodType, startDate, endDate, isDisplayed, searchType, keyword, size, offset);

        Map<String, List<PostListDto>> response = new HashMap<>();
        response.put("dlt_postList", posts);

        return ResponseEntity.ok(response);
//        return ResponseEntity.ok(posts);
    }

    @Transactional
    public void deletePosts(PostDeleteDto postDeleteDto) {
        List<Integer> postIds = postDeleteDto.getPostId();
        if (!postIds.isEmpty() || postIds != null) {
            postMapper.deletePosts(postIds);
        }
    }

    @Transactional
    public void updateDisplayOrder(PostOrderListDto postOrderListDto) {
        postMapper.updateDisplayOrder(postOrderListDto);
    }

}
