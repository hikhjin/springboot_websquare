package com.example.websquareproject.post.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class TravelPlaceDto {
    private String travelPlaceName;
    private String createdBy;
    private String updatedBy;
}
