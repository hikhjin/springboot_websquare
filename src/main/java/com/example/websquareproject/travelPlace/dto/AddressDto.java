package com.example.websquareproject.travelPlace.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class AddressDto {
    private String roadAddr; // 주소
    private String jibunAddr; // 지번 주소
    private String zipNo; // 우편번호
}
