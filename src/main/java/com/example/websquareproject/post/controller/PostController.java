package com.example.websquareproject.post.controller;

import com.example.websquareproject.post.dto.PostFormDto;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@Slf4j
@RestController
@RequestMapping("/post")
public class PostController {

    // 게시글 등록
    @PostMapping("")
    public ResponseEntity<String> createPost(@RequestBody PostFormDto postFormDto) {
        return ResponseEntity.ok("Success");
    }

    // 게시글 수정

    // 게시글 삭제

    // 게시글 전시 순서 변경

    // 게시글 전체 조회
    @GetMapping("")
    public ResponseEntity<String> getPosts() {}

    // 게시글 - 여행지 장소 등록

    // 게시글 - 여행지 장소 수정

    // 게시글 - 여행지 장소 삭제

}
