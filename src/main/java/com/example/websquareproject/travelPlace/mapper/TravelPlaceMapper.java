package com.example.websquareproject.travelPlace.mapper;

import com.example.websquareproject.post.dto.PostListDto;
import com.example.websquareproject.travelPlace.dto.TravelPlaceListDto;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface TravelPlaceMapper {
    List<TravelPlaceListDto> getTravelPlaces();
    void deletePlaces(List<TravelPlaceListDto> travelPlaceListDto);
    void updatePlaces(List<TravelPlaceListDto> travelPlaceListDto);
    void insertPlaces(List<TravelPlaceListDto> travelPlaceListDto);
}
