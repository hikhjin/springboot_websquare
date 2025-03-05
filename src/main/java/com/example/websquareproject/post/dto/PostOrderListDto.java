package com.example.websquareproject.post.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class PostOrderListDto {
    private List<PostOrder> postOrderList;

    @Getter
    @NoArgsConstructor
    @AllArgsConstructor
    public static class PostOrder {
        private int postId;
        private int displayOrder;
    }
}
