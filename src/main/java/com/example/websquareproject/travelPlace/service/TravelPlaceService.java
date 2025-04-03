package com.example.websquareproject.travelPlace.service;


import com.example.websquareproject.post.dto.PostListDto;
import com.example.websquareproject.travelPlace.client.AddressSearchClient;
import com.example.websquareproject.travelPlace.dto.AddressDto;
import com.example.websquareproject.travelPlace.dto.AddressInfo;
import com.example.websquareproject.travelPlace.dto.PageInfo;
import com.example.websquareproject.travelPlace.dto.TravelPlaceListDto;
import com.example.websquareproject.travelPlace.mapper.TravelPlaceMapper;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Slf4j
@Service
public class TravelPlaceService {
    private final TravelPlaceMapper travelPlaceMapper;
    private final AddressSearchClient addressSearchClient;
    private final ObjectMapper objectMapper;

    public TravelPlaceService(TravelPlaceMapper travelPlaceMapper, AddressSearchClient addressSearchClient) {
        this.travelPlaceMapper = travelPlaceMapper;
        this.addressSearchClient = addressSearchClient;
        this.objectMapper = new ObjectMapper();
    }

    public AddressInfo searchAddress(int currentPage, String keyword, String hstryYn, String firstSort) {
        try {
            String rawJson = addressSearchClient.searchAddress(
                    "devU01TX0FVVEgyMDI1MDQwMjA5MTExMDExNTYwMTI=",
                    currentPage,
                    10,
                    keyword,
                    "json",
                    hstryYn,
                    firstSort
            );

            JsonNode root = objectMapper.readTree(rawJson);
            JsonNode results = root.path("results");
            JsonNode jusoArray = results.path("juso");

            List<AddressDto> addressList = new ArrayList<>();
            for (JsonNode juso : jusoArray) {
                addressList.add(new AddressDto(
                        juso.path("roadAddr").asText(),
                        juso.path("jibunAddr").asText(),
                        juso.path("zipNo").asText()
                ));
            }

            int totalCount = results.path("common").path("totalCount").asInt();
            int page = results.path("common").path("currentPage").asInt();

            return new AddressInfo(new PageInfo(totalCount, page), addressList);
        } catch (Exception e) {
            throw new RuntimeException("주소 검색 중 오류 발생", e);
        }
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
