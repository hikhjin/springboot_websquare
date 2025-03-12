package com.example.websquareproject.post.controller;

import com.example.websquareproject.post.dto.*;
import com.example.websquareproject.post.service.PostService;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@Slf4j
@RestController
@RequestMapping("/post")
public class PostController {

    private final PostService postService;
    private final ObjectMapper objectMapper = new ObjectMapper(); // JSON 변환을 위한 ObjectMapper

    public PostController(PostService postService) {
        this.postService = postService;
    }

    // 게시글 등록
//    @PostMapping("")
//    public ResponseEntity<String> createPost(@RequestBody PostFormDto postFormDto) {
//        return ResponseEntity.ok("Success");
//    }

    // 게시글 수정

    // 게시글 삭제
    @DeleteMapping("")
    public ResponseEntity<String> deletePosts(@RequestBody PostDeleteDto postDeleteDto) {
        System.out.println(postDeleteDto.toString());

        postService.deletePosts(postDeleteDto.getPostIdList());
        return ResponseEntity.ok("Success");
    }

    // 게시글 변경사항 저장(전시 순서)
    @PutMapping("")
    public ResponseEntity<String> updatePosts(@RequestBody PostUpdateListDto postUpdateListDto) {
        postService.updatePosts(postUpdateListDto.getPostList());
        return ResponseEntity.ok("Success");
    }

    // 게시글 조회
    @PostMapping("")
    public ResponseEntity<Map<String, Object>> getPosts(@RequestBody(required = false) PostParamDto postParamDto) {
        if (postParamDto == null || postParamDto.getPostParam() == null) {
            postParamDto = new PostParamDto(new PostParam());
        }

        PostParam postParam = postParamDto.getPostParam();

        return postService.getPosts(
                postParam.getCategory1(), postParam.getCategory2(), postParam.getPeriodType(),
                postParam.getStartDate(), postParam.getEndDate(), postParam.getIsDisplayed(),
                postParam.getSearchType(), postParam.getKeyword(),
                (postParam.getSize() != null) ? postParam.getSize() : 5,  // 기본 size=5
                (postParam.getPage() != null) ? postParam.getPage() : 1    // 기본 page=1
        );
    }



    // 게시글 - 여행지 장소 등록

    // 게시글 - 여행지 장소 수정

    // 게시글 - 여행지 장소 삭제

}
