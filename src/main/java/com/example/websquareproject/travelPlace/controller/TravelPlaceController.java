package com.example.websquareproject.travelPlace.controller;

import com.example.websquareproject.travelPlace.service.TravelPlaceService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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

    // 여행지 장소 등록

    // 여행지 장소 수정

    // 여행지 장소 삭제

}
