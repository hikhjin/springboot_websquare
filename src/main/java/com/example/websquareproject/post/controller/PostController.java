package com.example.websquareproject.post.controller;

import com.example.websquareproject.post.dto.PostListDto;
import com.example.websquareproject.post.dto.PostFormDto;
import com.example.websquareproject.post.dto.PostDeleteDto;
import com.example.websquareproject.post.dto.PostOrderListDto;
import com.example.websquareproject.post.service.PostService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Slf4j
@RestController
@RequestMapping("/post")
public class PostController {

    private final PostService postService;

    public PostController(PostService postService) {
        this.postService = postService;
    }

    // 게시글 등록
    @PostMapping("")
    public ResponseEntity<String> createPost(@RequestBody PostFormDto postFormDto) {
        return ResponseEntity.ok("Success");
    }

    // 게시글 수정

    // 게시글 삭제
    @DeleteMapping("")
    public ResponseEntity<String> deletePosts(@RequestBody PostDeleteDto postDeleteDto) {
        postService.deletePosts(postDeleteDto);
        return ResponseEntity.ok("Success");
    }

    // 게시글 전시 순서 변경
    @PutMapping("/display-order")
    public ResponseEntity<String> updatePosts(@RequestBody PostOrderListDto postOrderListDto) {
        postService.updateDisplayOrder(postOrderListDto);
        return ResponseEntity.ok("Success");
    }


    // 게시글 조회
    @GetMapping("")
    public ResponseEntity<List<PostListDto>> getPosts(
            @RequestParam(required = false) String category1,
            @RequestParam(required = false) String category2,
            @RequestParam(required = false) String periodType, // (전체, 전시시작일시, 전시종료일시, 수정일시, 등록일시)
            @RequestParam(required = false) String startDate,
            @RequestParam(required = false) String endDate,
            @RequestParam(required = false) String isDisplayed, // (전체, Y, N)
            @RequestParam(required = false) String searchType, // (전체, 등록자, 수정자, 내용, 제목)
            @RequestParam(required = false) String keyword,
            @RequestParam int size,
            @RequestParam int page) {

        return postService.getPosts(category1, category2, periodType, startDate, endDate, isDisplayed, searchType, keyword, size, page);
    }

    // 게시글 - 여행지 장소 등록

    // 게시글 - 여행지 장소 수정

    // 게시글 - 여행지 장소 삭제

}
