package com.example.websquareproject.post.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class PostFormDto {
    private int postId;
    private int type; // 구분(일반/공지)
    private int category1;
    private Integer category2;
    private String title;
    private String isDisplayed; // 전시 여부 Y/N
    private String displayStart;
    private String displayEnd;
    private String content;
    private int travelPlace1;
    private int travelPlace2;
    private int travelPlace3;
    private int travelPlace4;
    private int travelPlace5;
    private String sourceMedia1;
    private String sourceMedia2;
    private String sourceMedia3;
    private String pcImageUrl;
    private String pcImageOriginalName;
    private String pcImageUploadedName;
    private int pcImageSize;
    private String pcImageAltText;
    private String mobileImageUrl;
    private String mobileImageOriginalName;
    private String mobileImageUploadedName;
    private int mobileImageSize;
    private String mobileImageAltText;
    private String attachmentUrl;
    private String attachmentOriginalName;
    private String attachmentUploadedName;
    private int attachmentSize;
    private String createdBy;
    private String updatedBy;

}
