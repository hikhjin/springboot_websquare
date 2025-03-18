package com.example.websquareproject.travelPlace.service;


import com.example.websquareproject.post.dto.PostListDto;
import com.example.websquareproject.travelPlace.dto.TravelPlaceListDto;
import com.example.websquareproject.travelPlace.mapper.TravelPlaceMapper;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

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

    @Transactional
    public void updatePlaces(List<TravelPlaceListDto> travelPlaceListDto) {
        // 새로 추가할 데이터 (rowStatus == "C")
        List<TravelPlaceListDto> insertList = travelPlaceListDto.stream()
                .filter(place -> "C".equals(place.getRowStatus()))
                .collect(Collectors.toList());

        // 업데이트할 데이터 (rowStatus == "U")
        List<TravelPlaceListDto> updateList = travelPlaceListDto.stream()
                .filter(place -> "U".equals(place.getRowStatus()))
                .collect(Collectors.toList());

        if (!insertList.isEmpty()) {
            travelPlaceMapper.insertPlaces(insertList);
        }

        if (!updateList.isEmpty()) {
            travelPlaceMapper.updatePlaces(updateList);
        }
    }

    @Transactional
    public void deleteTravelPlaces(List<Integer> travelPlaceIdList) {
        travelPlaceMapper.deleteTravelPlaces(travelPlaceIdList);
    }
}
