package com.example.websquareproject.travelPlace.controller;

import com.example.websquareproject.travelPlace.dto.TravelPlaceDeleteDto;
import com.example.websquareproject.travelPlace.dto.TravelPlaceListDto;
import com.example.websquareproject.travelPlace.dto.TravelPlaceUpdateListDto;
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

    // 여행지 장소 수정, 삭제, 추가
    @PutMapping("")
    public ResponseEntity<String> updatePlaces(@RequestBody TravelPlaceUpdateListDto travelPlaceUpdateListDto) {
        travelPlaceService.updatePlaces(travelPlaceUpdateListDto.getTravelPlaceList());
        return ResponseEntity.ok("Success");
    }

}
