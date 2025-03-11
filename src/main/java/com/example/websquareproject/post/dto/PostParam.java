package com.example.websquareproject.post.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class PostParam {
    private String category1;
    private String category2;
    private String periodType;
    private String startDate;
    private String endDate;
    private String isDisplayed;
    private String searchType;
    private String keyword;
    private Integer size;
    private Integer page;
}
