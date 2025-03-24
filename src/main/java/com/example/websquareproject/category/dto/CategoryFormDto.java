package com.example.websquareproject.category.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.*;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Setter
@ToString
public class CategoryFormDto {
    private int categoryFormId;
    private String categoryName;
    private Integer parentId;
    private String isHidden;
    private String description;
    private String help;
    private String createdBy;
    private String createdAt;
    private String updatedBy;
    private String updatedAt;
}
