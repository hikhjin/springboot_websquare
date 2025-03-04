package com.example.websquareproject.post.service;

import com.example.websquareproject.post.dto.PostDto;
import com.example.websquareproject.post.mapper.PostMapper;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PostService {

    private final PostMapper postMapper;

    public PostService(PostMapper postMapper) {
        this.postMapper = postMapper;
    }

    public ResponseEntity<List<PostDto>> getPosts(String category1, String category2, String periodType, String startDate,
                                                  String endDate, String isDisplayed, String searchType, String keyword,
                                                  int size, int page) {
        int offset = (page - 1) * size;
        List<PostDto> posts = postMapper.getPosts(category1, category2, periodType, startDate, endDate, isDisplayed, searchType, keyword, size, offset);
        return ResponseEntity.ok(posts);
    }
}
