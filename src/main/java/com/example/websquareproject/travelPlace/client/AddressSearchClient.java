package com.example.websquareproject.travelPlace.client;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

@FeignClient(name = "addressSearchClient", url = "https://business.juso.go.kr")
public interface AddressSearchClient {

    @GetMapping("/addrlink/addrLinkApi.do")
    String searchAddress(
            @RequestParam("confmKey") String confmKey,
            @RequestParam("currentPage") int currentPage,
            @RequestParam("countPerPage") int countPerPage,
            @RequestParam("keyword") String keyword,
            @RequestParam("resultType") String resultType,
            @RequestParam(value = "hstryYn", required = false) String hstryYn,
            @RequestParam(value = "firstSort", required = false) String firstSort
    );
}
