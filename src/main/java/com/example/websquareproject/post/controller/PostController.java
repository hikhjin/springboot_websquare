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
        postService.deletePosts(postDeleteDto);
        return ResponseEntity.ok("Success");
    }

    // 게시글 전시 순서 변경
    @PutMapping("/display-order")
    public ResponseEntity<String> updatePosts(@RequestBody PostOrderListDto postOrderListDto) {
        postService.updateDisplayOrder(postOrderListDto);
        return ResponseEntity.ok("Success");
    }

    private final ObjectMapper objectMapper = new ObjectMapper();


    // 게시글 조회
//    @GetMapping("")
//    public ResponseEntity<Map<String, List<PostListDto>>> getPosts(
//            @RequestParam(required = false) String category1,
//            @RequestParam(required = false) String category2,
//            @RequestParam(required = false) String periodType, // (전체, 전시시작일시, 전시종료일시, 수정일시, 등록일시)
//            @RequestParam(required = false) String startDate,
//            @RequestParam(required = false) String endDate,
//            @RequestParam(required = false) String isDisplayed, // (전체, Y, N)
//            @RequestParam(required = false) String searchType, // (전체, 등록자, 수정자, 내용, 제목)
//            @RequestParam(required = false) String keyword,
//            @RequestParam(defaultValue = "5") int size,
//            @RequestParam(defaultValue = "1") int page) {
//
//        try {
//            // ✅ 요청 파라미터를 Map으로 변환
//            Map<String, Object> requestParams = new HashMap<>();
//            requestParams.put("category1", category1);
//            requestParams.put("category2", category2);
//            requestParams.put("periodType", periodType);
//            requestParams.put("startDate", startDate);
//            requestParams.put("endDate", endDate);
//            requestParams.put("isDisplayed", isDisplayed);
//            requestParams.put("searchType", searchType);
//            requestParams.put("keyword", keyword);
//            requestParams.put("size", size);
//            requestParams.put("page", page);
//
//            // ✅ JSON 형식으로 변환하여 로그 출력
//            String jsonParams = objectMapper.writerWithDefaultPrettyPrinter().writeValueAsString(requestParams);
//            log.info("📌 [GET /posts] Request Params:\n{}", jsonParams);
//        } catch (Exception e) {
//            log.error("❌ 요청 파라미터 로깅 중 오류 발생", e);
//        }
//
//        return postService.getPosts(category1, category2, periodType, startDate, endDate, isDisplayed, searchType, keyword, size, page);
//    }

    @PostMapping("")
    public ResponseEntity<Map<String, List<PostListDto>>> getPosts(@RequestBody(required = false) PostParamDto postParamDto) {
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
