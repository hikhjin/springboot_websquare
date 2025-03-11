package com.example.websquareproject.post.service;

import com.example.websquareproject.post.dto.PostListDto;
import com.example.websquareproject.post.dto.PostDeleteDto;
import com.example.websquareproject.post.dto.PostOrderListDto;
import com.example.websquareproject.post.dto.PostParam;
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

    public ResponseEntity<Map<String, Object>> getPosts(String category1, String category2, String periodType, String startDate,
                                                                   String endDate, String isDisplayed, String searchType, String keyword,
                                                                   int size, int page) {
        int offset = (page - 1) * size;

        List<PostListDto> posts = postMapper.getPosts(safeParseInt(category1), safeParseInt(category2), periodType, startDate, endDate, isDisplayed, searchType, keyword, size, offset);
        int totalCount = postMapper.getPostsCount(safeParseInt(category1), safeParseInt(category2), periodType, startDate, endDate, isDisplayed, searchType, keyword, size, offset);

        Map<String, Object> response = new HashMap<>();

        Map<String, String> totalCountMap = new HashMap<>();
        totalCountMap.put("totalCount", String.valueOf(totalCount));

        response.put("postList", posts);
        response.put("totalCount", totalCountMap);

        return ResponseEntity.ok(response);
    }
//
//    public Map<String, Object> getPostsCount(PostParam postParam) {
//        int totalCount = postMapper.getPostsCount(postParm);
//
//        Map<String, Object> response = new HashMap<>();
//        response.put("totalCount", totalCount);
//        return response;
//    }

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

    private Integer safeParseInt(String value) {
        try {
            return (value != null && !value.trim().isEmpty()) ? Integer.parseInt(value) : null;
        } catch (NumberFormatException e) {
            return null; // 변환 실패 시 null 반환
        }
    }
}
