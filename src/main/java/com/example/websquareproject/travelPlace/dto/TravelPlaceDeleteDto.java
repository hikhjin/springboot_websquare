package com.example.websquareproject.travelPlace.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class TravelPlaceDeleteDto {
    private List<Integer> travelPlaceIdList;
}
