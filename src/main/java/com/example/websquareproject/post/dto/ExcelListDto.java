package com.example.websquareproject.post.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class ExcelListDto {
    //private int postId;
    private int displayOrder;
    private String type; // 구분(일반/공지)
    private String category1;
    private String category2; // category 2d
    private String title;
    private int views;
    private String isDisplayed; // 전시 여부 Y/N
    private String displayStart;
    private String displayEnd;
    private String content;
    private String pcImageUrl;
    private String pcImageAltText;
    private String mobileImageUrl;
    private String mobileImageAltText;
    private String sourceMediaList;
    private String travelPlaceList;
    private String attachmentUrl;
    private String updatedAt;
    private String updatedBy;
    private String createdAt;
    private String createdBy;
}
