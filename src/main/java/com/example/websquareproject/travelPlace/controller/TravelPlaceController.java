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
            StringBuilder apiUrl = new StringBuilder("https://business.juso.go.kr/addrlink/addrLinkApi.do?");
            apiUrl.append("confmKey=devU01TX0FVVEgyMDI1MDQwMjA5MTExMDExNTYwMTI=");
            apiUrl.append("&currentPage=").append(currentPage);
            apiUrl.append("&countPerPage=10");
            apiUrl.append("&keyword=").append(URLEncoder.encode(keyword, "UTF-8"));
            apiUrl.append("&resultType=json");
            if (hstryYn != null) apiUrl.append("&hstryYn=").append(hstryYn);
            if (firstSort != null) apiUrl.append("&firstSort=").append(firstSort);

            URL url = new URL(apiUrl.toString());
            System.out.println(url);
            HttpURLConnection connection = (HttpURLConnection) url.openConnection();
            connection.setRequestMethod("GET");

            BufferedReader in = new BufferedReader(new InputStreamReader(connection.getInputStream(), "UTF-8"));
            StringBuilder response = new StringBuilder();
            String line;
            while ((line = in.readLine()) != null) {
                response.append(line);
            }
            in.close();

            //System.out.println(response);

            // JSON 파싱
            ObjectMapper mapper = new ObjectMapper();
            JsonNode root = mapper.readTree(response.toString());
            JsonNode results = root.path("results");
            JsonNode jusoArray = results.path("juso");

            List<AddressDto> addressList = new ArrayList<>();
            for (JsonNode juso : jusoArray) {
                AddressDto dto = new AddressDto();
                dto.setRoadAddr(juso.path("roadAddr").asText());
                dto.setJibunAddr(juso.path("jibunAddr").asText());
                dto.setZipNo(juso.path("zipNo").asText());
                addressList.add(dto);
            }

            int totalCount = Integer.parseInt(results.path("common").path("totalCount").asText());
            int page = Integer.parseInt(results.path("common").path("currentPage").asText());

            PageInfo pageInfo = new PageInfo(totalCount, page);

            AddressInfo responseDto = new AddressInfo(pageInfo, addressList);
            return ResponseEntity.ok(responseDto);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(500).build();
        }
    }



}
