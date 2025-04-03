package com.example.websquareproject.post.service;

import com.example.websquareproject.post.dto.ExcelListDto;
import com.example.websquareproject.post.dto.PostFormDto;
import com.example.websquareproject.post.dto.PostListDto;
import com.example.websquareproject.post.mapper.PostMapper;
import jakarta.servlet.http.HttpServletResponse;
import lombok.extern.slf4j.Slf4j;
import org.apache.poi.ss.usermodel.*;
import org.apache.poi.util.IOUtils;
import org.apache.poi.xssf.usermodel.XSSFClientAnchor;
import org.apache.poi.xssf.usermodel.XSSFDrawing;
import org.apache.poi.xssf.usermodel.XSSFPicture;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.io.*;
import java.net.URL;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Slf4j
@Service
public class PostService {

    private final PostMapper postMapper;
    private static final Logger logger = LoggerFactory.getLogger(PostService.class);

    public PostService(PostMapper postMapper) {
        this.postMapper = postMapper;
    }

    public ResponseEntity<Map<String, Object>> getPosts(String category1, String category2, String periodType, String startDate,
                                                                   String endDate, String isDisplayed, String searchType, String keyword,
                                                                   int size, int page) {
        int offset = (page - 1) * size;

        List<PostListDto> posts = postMapper.getPosts(safeParseInt(category1), safeParseInt(category2), periodType, startDate, endDate, isDisplayed, searchType, keyword, size, offset);
        int totalCount = postMapper.getPostsCount(safeParseInt(category1), safeParseInt(category2), periodType, startDate, endDate, isDisplayed, searchType, keyword, size, offset);

        Map<String, Object> response = new HashMap<>();

        Map<String, String> totalCountMap = new HashMap<>();
        totalCountMap.put("totalCount", String.valueOf(totalCount));

        response.put("postList", posts);
        response.put("totalCount", totalCountMap);

        return ResponseEntity.ok(response);
    }

    public void getExcelFile(String category1, String category2, String periodType,
                                                            String startDate, String endDate, String isDisplayed,
                                                            String searchType, String keyword, HttpServletResponse response) {
        logger.info("getExcelFile() called with params: category1={}, category2={}, periodType={}, startDate={}, endDate={}",
                category1, category2, periodType, startDate, endDate);

        List<ExcelListDto> posts = postMapper.getExcelList(
                safeParseInt(category1), safeParseInt(category2), periodType, startDate,
                endDate, isDisplayed, searchType, keyword);

        logger.info("Retrieved {} rows for Excel export", posts.size());

        try (Workbook workbook = new XSSFWorkbook();) {
            Sheet sheet = workbook.createSheet("Posts");
            createHeaderRow(sheet);

            int rowNum = 1;
            for (ExcelListDto post : posts) {
                Row row = sheet.createRow(rowNum++);
                row.createCell(0).setCellValue(post.getDisplayOrder());
                row.createCell(1).setCellValue(post.getType());
                row.createCell(2).setCellValue(post.getCategory1());
                row.createCell(3).setCellValue(post.getCategory2());
                row.createCell(4).setCellValue(post.getTitle());
                row.createCell(5).setCellValue(post.getViews());
                row.createCell(6).setCellValue(post.getIsDisplayed());
                row.createCell(7).setCellValue(post.getDisplayStart());
                row.createCell(8).setCellValue(post.getDisplayEnd());
                row.createCell(9).setCellValue(post.getContent());

                if (post.getPcImageUrl() != null && !post.getPcImageUrl().isEmpty()) {
                    insertImage(sheet, workbook, post.getPcImageUrl(), rowNum, 10);
                }
                row.createCell(11).setCellValue(post.getPcImageAltText());
                row.createCell(12).setCellValue(post.getMobileImageUrl());
                row.createCell(13).setCellValue(post.getMobileImageAltText());
                row.createCell(14).setCellValue(post.getSourceMediaList());
                row.createCell(15).setCellValue(post.getTravelPlaceList());
                row.createCell(16).setCellValue(post.getAttachmentUrl());
                row.createCell(17).setCellValue(post.getUpdatedAt());
                row.createCell(18).setCellValue(post.getUpdatedBy());
                row.createCell(19).setCellValue(post.getCreatedAt());
                row.createCell(20).setCellValue(post.getCreatedBy());
            }

            logger.info("Excel file created successfully");

            response.setContentType("application/vnd.ms-excel");
            response.setHeader("Content-Disposition", "attachment;filename=posts.xlsx");
            workbook.write(response.getOutputStream());
            workbook.close();
        } catch (IOException e) {
            logger.error("Error while creating Excel file", e);
        }
    }

    private void insertImage(Sheet sheet, Workbook workbook, String imageUrl, int rowIndex, int colIndex) {
        InputStream is = null;
        try {
            if (imageUrl.startsWith("http") || imageUrl.startsWith("https")) {
                is = new URL(imageUrl).openStream();
            } else {
                String basePath = "C:\\Users\\hikhj\\IdeaProjects\\websquareProject\\src\\main\\resources\\static";
                String absolutePath = basePath + imageUrl.replace("/", "\\");
                File file = new File(absolutePath);

                if (!file.exists()) {
                    System.err.println("File not found: " + absolutePath);
                    return;
                }

                is = new FileInputStream(file);
            }

            byte[] bytes = IOUtils.toByteArray(is);
            is.close();

            int pictureIdx = workbook.addPicture(bytes, Workbook.PICTURE_TYPE_JPEG);
            XSSFDrawing drawing = (XSSFDrawing) sheet.createDrawingPatriarch();
            XSSFClientAnchor anchor = new XSSFClientAnchor();

            anchor.setCol1(colIndex);
            anchor.setRow1(rowIndex);
            anchor.setCol2(colIndex + 1); // 고정된 너비
            anchor.setRow2(rowIndex + 1); // 고정된 높이
            anchor.setDx1(0);
            anchor.setDy1(0);
            anchor.setDx2(1023); // 최대 크기 지정
            anchor.setDy2(255); // 최대 크기 지정
            anchor.setAnchorType(ClientAnchor.AnchorType.MOVE_AND_RESIZE);

            XSSFPicture picture = drawing.createPicture(anchor, pictureIdx);
        } catch (Exception e) {
            System.err.println("이미지 삽입 실패: " + imageUrl);
        } finally {
            if (is != null) {
                try {
                    is.close();
                } catch (IOException ignored) {}
            }
        }
    }


    private void createHeaderRow(Sheet sheet) {
        Row headerRow = sheet.createRow(0);
        headerRow.createCell(0).setCellValue("전시순서");
        headerRow.createCell(1).setCellValue("구분");
        headerRow.createCell(2).setCellValue("카테고리1");
        headerRow.createCell(3).setCellValue("카테고리2");
        headerRow.createCell(4).setCellValue("제목");
        headerRow.createCell(5).setCellValue("조회수");
        headerRow.createCell(6).setCellValue("전시여부");
        headerRow.createCell(7).setCellValue("전시시작일시");
        headerRow.createCell(8).setCellValue("전시종료일시");
        headerRow.createCell(9).setCellValue("내용");
        headerRow.createCell(10).setCellValue("pc 이미지");
        headerRow.createCell(11).setCellValue("pc 이미지 대체 텍스트");
        headerRow.createCell(12).setCellValue("모바일 이미지");
        headerRow.createCell(13).setCellValue("모바일 이미지 대체 텍스트");
        headerRow.createCell(14).setCellValue("출처 매체 리스트");
        headerRow.createCell(15).setCellValue("추천 여행지 리스트");
        headerRow.createCell(16).setCellValue("첨부파일 경로");
        headerRow.createCell(17).setCellValue("수정일시");
        headerRow.createCell(18).setCellValue("수정자");
        headerRow.createCell(19).setCellValue("등록일시");
        headerRow.createCell(20).setCellValue("등록자");
    }

    @Transactional
    public void createPost(PostFormDto postFormDto) {
        postFormDto.setCreatedBy("hikhjin");
        postFormDto.setUpdatedBy("hikhjin");

        // category2가 존재하면 category2 사용, 없으면 category1 사용
        int categoryId = (postFormDto.getCategory2() != null) ? postFormDto.getCategory2() : postFormDto.getCategory1();

        postMapper.createPost(postFormDto, categoryId);

        int postId = postFormDto.getPostId();

        // 카테고리가 여행일 경우
        if (categoryId == 3) {
            saveTravelPlaces(postId, postFormDto);
        }

        // 지식 카테고리(category_id = 2이거나, category_id가 2의 자식)일 경우 sourceMedia 저장
        if (categoryId == 2 || isChildCategory(categoryId, 2)) {
            saveSourceMedia(postId, postFormDto);
        }
    }

    private void saveTravelPlaces(int postId, PostFormDto postFormDto) {
        List<Integer> travelPlaces = Arrays.asList(
                postFormDto.getTravelPlace1(), postFormDto.getTravelPlace2(),
                postFormDto.getTravelPlace3(), postFormDto.getTravelPlace4(),
                postFormDto.getTravelPlace5()
        );

//        for (Integer travelPlaceId : travelPlaces) {
//            if (travelPlaceId != 0) {
//                System.out.println("travelPlaceId: "+ travelPlaceId);
//                postMapper.insertPostTravelPlace(postId, travelPlaceId);
//            }
//        }
        travelPlaces.stream()
                .filter(id -> id != 0)
                .forEach(id -> postMapper.insertPostTravelPlace(postId, id));

    }

    private void saveSourceMedia(int postId, PostFormDto postFormDto) {
        List<String> sourceMedia = Arrays.asList(
                postFormDto.getSourceMedia1(), postFormDto.getSourceMedia2(), postFormDto.getSourceMedia3()
        );

//        for (String media : sourceMedia) {
//            if (media != null && !media.trim().isEmpty()) {
//                postMapper.insertSourceMedia(postId, media);
//            }
//        }

        sourceMedia.stream()
                .filter(media -> media != null && !media.trim().isEmpty())
                .forEach(media -> postMapper.insertSourceMedia(postId, media));

    }

    private boolean isChildCategory(int categoryId, int parentId) {
        Integer parentCategory = postMapper.getParentCategoryId(categoryId);
        return parentCategory != null && parentCategory == parentId;
    }

    @Transactional
    public void deletePosts(List<Integer> postIdList) {
        postMapper.deletePosts(postIdList);
    }

    @Transactional
    public void updatePosts(List<PostListDto> postListDto) {
        postMapper.updatePosts(postListDto);
    }

    private Integer safeParseInt(String value) {
        try {
            return (value != null && !value.trim().isEmpty()) ? Integer.parseInt(value) : null;
        } catch (NumberFormatException e) {
            return null; // 변환 실패 시 null 반환
        }
    }
}
