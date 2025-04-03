package com.example.websquareproject.travelPlace.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class AddressInfo {
    private PageInfo pageInfo;
    private List<AddressDto> addresses;
}

