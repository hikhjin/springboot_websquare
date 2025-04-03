package com.example.websquareproject.travelPlace.controller;

import com.example.websquareproject.post.dto.PostDeleteDto;
import com.example.websquareproject.travelPlace.dto.*;
import com.example.websquareproject.travelPlace.service.TravelPlaceService;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.BufferedReader;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLEncoder;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Slf4j
@RestController
@RequestMapping("/travelPlace")
public class TravelPlaceController {

    private final TravelPlaceService travelPlaceService;

    public TravelPlaceController(TravelPlaceService travelPlaceService) {
        this.travelPlaceService = travelPlaceService;
    }

    // 여행지 장소 조회
    @GetMapping("")
    public ResponseEntity<Map<String, Object>> getTravelPlaces() {

        return travelPlaceService.getTravelPlaces();
    }

    // 여행지 장소 수정, 추가
    @PutMapping("")
    public ResponseEntity<String> updatePlaces(@RequestBody TravelPlaceUpdateListDto travelPlaceUpdateListDto) {

        travelPlaceService.updatePlaces(travelPlaceUpdateListDto.getTravelPlaceList());
        return ResponseEntity.ok("Success");
    }

    // 여행지 장소 삭제
    @DeleteMapping("")
    public ResponseEntity<String> deleteTravelPlaces(@RequestBody TravelPlaceDeleteDto travelPlaceDeleteDto) {
        travelPlaceService.deleteTravelPlaces(travelPlaceDeleteDto.getTravelPlaceIdList());
        return ResponseEntity.ok("Success");
    }

    // 여행지 장소 검색 api
    @GetMapping("/search")
    public ResponseEntity<AddressInfo> searchAddress(@RequestParam int currentPage,
                                                     @RequestParam String keyword,
                                                     @RequestParam(required = false) String hstryYn,
                                                     @RequestParam(required = false) String firstSort) {
        try {
            AddressInfo addressInfo = travelPlaceService.searchAddress(currentPage, keyword, hstryYn, firstSort);
            return ResponseEntity.ok(addressInfo);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(500).build();
        }
    }



}
