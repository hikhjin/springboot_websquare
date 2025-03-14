package com.example.websquareproject.post.dto;

import com.example.websquareproject.travelPlace.dto.TravelPlaceListDto;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class PostFormDto {
    private int categoryId;
    private int displayOrder;
    private int type; // 구분(일반/공지)
    private String isDisplayed; // 전시 여부 Y/N
    private String displayStart;
    private String displayEnd;
    private String title;
    private String content;
    private List<SourceMediaDto> SourceMedia; // 출처 매체
    private List<TravelPlaceListDto> TravelPlace; // 추천 여행지
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
