package com.example.websquareproject.travelPlace.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class TravelPlaceListDto {
    private String travelPlaceName;
    private String addr;
    private String detailAddr;
    private String createdAt;
    private String createdBy;
    private String updatedAt;
    private String updatedBy;
    private int travelPlaceId;
    private String rowStatus;
}
