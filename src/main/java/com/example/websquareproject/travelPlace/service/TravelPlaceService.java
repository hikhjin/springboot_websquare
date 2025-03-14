package com.example.websquareproject.travelPlace.service;


import com.example.websquareproject.travelPlace.dto.TravelPlaceListDto;
import com.example.websquareproject.travelPlace.mapper.TravelPlaceMapper;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Slf4j
@Service
public class TravelPlaceService {
    private final TravelPlaceMapper travelPlaceMapper;


    public TravelPlaceService(TravelPlaceMapper travelPlaceMapper) {
        this.travelPlaceMapper = travelPlaceMapper;
    }

    public ResponseEntity<Map<String, Object>> getTravelPlaces() {
        List<TravelPlaceListDto> travelPlaceList = travelPlaceMapper.getTravelPlaces();

        Map<String, Object> response = new HashMap<>();
        response.put("travelPlaceList", travelPlaceList);

        return ResponseEntity.ok(response);
    }
}
