/*amd /page_component3.xml 23708 7d702f414717656ca47fceec5cd94955155fafb68377aebe6cf068b3d9f5e1dd */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'DEFAULT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'srchCondDivsCntn',name:'검색조건구분내용',dataType:'text'}},{T:1,N:'w2:key',A:{id:'srchCondCntn',name:'검색조건내용',dataType:'text'}},{T:1,N:'w2:key',A:{id:'scrnEposYn',name:'화면노출여부',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'dlt_cmmListInqDto',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'urcBnftNm',name:'유플러스대표채널혜택명',dataType:'number'}},{T:1,N:'w2:column',A:{id:'urcBnftMenuIdfyNm',name:'유플러스대표채널혜택메뉴식별명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'urcBnftId',name:'유플러스대표채널혜택ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'scrnEposYn',name:'화면노출여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'scrnSortOrd',name:'화면정렬순서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'updDttm',name:'수정일',dataType:'date'}},{T:1,N:'w2:column',A:{id:'updIntgUserId',name:'수정자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDttm',name:'등록일',dataType:'date'}},{T:1,N:'w2:column',A:{id:'regIntgUserId',name:'등록자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'chk',name:'선택유무',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_pageInfo'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'last',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'pageNo',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'totalPage',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'start',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'pageSize',name:'name5',dataType:'text'}},{T:1,N:'w2:key',A:{id:'totalCount',name:'name6',dataType:'text'}},{T:1,N:'w2:key',A:{id:'rowSize',name:'name7',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_delList'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'urcBnftIdList',name:'혜택번호리스트',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrievePntDcntList',ref:'data:json,[{"id":"dma_pageInfo","key":"pageInfo"},{"id":"dma_search","key":"queryString"}]',target:'data:json,dlt_cmmListInqDto',action:'/uhdc/bo/prdv/dcntbnft/v1/pnt-dcnt-list',method:'get',mediatype:'application/json',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrievePntDcntList_submitdone','ev:submiterror':'',abortTrigger:'',singleMode:'true'}},{T:1,N:'xf:submission',A:{id:'sbm_deletePntDcntList',ref:'data:json,dma_delList',target:'',action:'/uhdc/bo/prdv/dcntbnft/v1/pnt-dcnt-dl?urcBnftIdList={urcBnftIdList}',method:'put',mediatype:'application/json',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_deletePntDcntList_submitdone','ev:submiterror':'',abortTrigger:'',singleMode:'true'}},{T:1,N:'xf:submission',A:{id:'sbm_updatePntDcntList',ref:'data:json,{"id":"dlt_cmmListInqDto","key":"cmmBnftFormList"}',target:'',action:'/uhdc/bo/prdv/dcntbnft/v1/pnt-dcnt-list:complex',method:'put',mediatype:'application/json',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_updatePntDcntList_submitdone','ev:submiterror':'',abortTrigger:'',singleMode:'true'}}]},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
	/*
	 * 전역 변수 
	 */
	const RESPONSE_OK_CODE = "200"; // 요청 응답 코드
	scwin.currGridData = {};
	const DETL_UPD_SRC_PATH = "/web/uhdc/evet/bm/evetBmPntDcntDetl.xml";

	///////////////////////

	/*
	 * 이벤트 
	 */
	scwin.onpageload = function() {
		dma_pageInfo.set("pageNo", 1);
		dma_pageInfo.set("rowSize", 10);
		dma_pageInfo.set("pageSize", 10);
		com.win.setEnterKeyEvent(grp_srchBox, scwin.btn_search_onclick);
		scwin.fn_searEvetList(1);

	};

	scwin.onpageunload = function() {

	};

	/**
	 * @description : 추첨담당자 목록 조회
	 * @Author      : jk0649
	 */
	scwin.fn_searEvetList = function(pageNo) {
		dma_pageInfo.set("rowSize", Number(slb_pagePerCount.getValue()));
		dma_pageInfo.set("pageNo", pageNo);
		dma_search.set("srchCondDivsCntn", sbx_srchCondDivsCntn.getValue());
		dma_search.set("srchCondCntn", inp_srchCondCntn.getValue());
		dma_search.set("scrnEposYn", slb_scrnEposYn.getValue());

		com.sbm.execute(sbm_retrievePntDcntList, {}, gcm.SERVICE_LIST.PRDV);
	}

	/**
	 * @description : 페이지건수 onclick
	 * @Author      : jk0649
	 */
	scwin.slb_pagePerCount_onchange = function() {
		scwin.fn_searEvetList(1);
	};

	/**
	 * @description : 초기화 버튼 onclick
	 * @Author      : jk0649
	 */
	scwin.btn_init_onclick = function(e) {
		com.win.setInit(grp_srchBox);
	};

	scwin.btn_reg_onclick = function(e) {
		var paramData = {
			data : {
				label : "포인트 할인 등록"
			}
		};
		var option = {
			openAction : "select"
		};
		com.win.openMenu("300000889", paramData, option);
	};

	// 그리드 셀 클릭
	scwin.grd_main_oncellclick = function(row, col) {
		// 선택한 셀이 링크일 경우
		console.log(col);
		if (grd_main.getColumnType(col) == "link") {
			// 선택한 셀이 상품명일 경우
			if (grd_main.getColumnID(col) == "urcBnftNm") {
				// 상세 페이지 이동
				var urcBnftId = dlt_cmmListInqDto.getCellData(row,
						"urcBnftId");
				var urcBnftNm = dlt_cmmListInqDto.getCellData(row,
						"urcBnftNm");
				
				scwin.fn_dvicAddTab(urcBnftNm, urcBnftId, DETL_UPD_SRC_PATH,
						urcBnftId);
			}
		}
	};

	// 새로고침 onclick
	scwin.btn_grid_reload_onclick = function(e) {
		scwin.gridReload(e);
	};
	
	//////////////////////////////////////////////

	/*
	 * 정의 함수 
	 */

	// 목록 조회 서브미션
	scwin.sbm_retrievePntDcntList_submitdone = function(e) {
		if (e.responseStatusCode == RESPONSE_OK_CODE) {
			var pglFlag = true;
			if ("1" == dma_pageInfo.get("pageNo")) {
				pglFlag = false;
			}

			pgl_pageList.setCount(dma_pageInfo.get("totalPage"), pglFlag);
			pgl_pageList.setSelectedIndex(dma_pageInfo.get("pageNo"));

			tabControl.setSelectedTabIndex(0);
			scwin.currGridData = dlt_cmmListInqDto.getAllJSON();

		} else {
			dlt_cmmListInqDto.removeAll();
		}
	};

	// 검색 버튼
	scwin.btn_search_onclick = function(e) {
		scwin.fn_searEvetList(1);
	};

	/**
	 * @description : 삭제 버튼 onclick
	 * @Author      : jk0649
	 */
	scwin.btn_delete_onclick = function(e) {
		if (!scwin.isChangeCheckGrid([grd_main], "chk")) {
			com.win.alert("삭제할 행을 선택해 주세요.");
			return;
		}

		com.win.confirm(com.data.getMessage("com.cfm.0003"),
				scwin.confirmGrdDelCallback);
	};

	/*
	 * 체크된 grid 및 삭제 grid 변경 체크	 
	 * @param	<Object:Y> gridArr	: 그리드 객체의 1차원 배열
	 * @param	<String:Y> colId	: 해당 체크할 check or radio 객체 id
	 * @return 	<Boolean> true/false
	 * */
	scwin.isChangeCheckGrid = function(gridArr, colId) {
		if (!gridArr) {
			return false;
		}
		// 변경체크
		var tmpDltStr = "";
		var tmpDtlObj = null;
		for ( var i in gridArr) {
			if (typeof gridArr[i] === "string") {
				gridArr[i] = WebSquare.util.getComponentById(gridArr[i]);
			}
			tmpDltStr = gridArr[i].getDataList();
			tmpDtlObj = WebSquare.util.getComponentById(tmpDltStr);
			if (!tmpDtlObj) {
				return false;
			}
			if (tmpDtlObj.getDeletedData().length > 0
					|| gridArr[i].getCheckedIndex(colId).length > 0) { // 삭제
				return true;
			}
		}
		return false;
	};

	/**
	 * @description : 삭제 서브미션 callback
	 * @Author      : jk0649
	 */
	scwin.sbm_deletePntDcntList_submitdone = function(e) {
		if (e.responseStatusCode != "200" || e.responseJSON == "0") {
			com.win.alert(com.data.getMessage("error.systemError"));
			return;
		}

		com.win.alert(com.data.getMessage("com.inf.0009", "삭제"));
		scwin.fn_searEvetList(1);
	};

	// 삭제 서브미션 실행
	scwin.mainDelete = function() {
		var oList = dlt_cmmListInqDto.getMatchedJSON("chk", "1");

		var urcBnftIdList = [];
		for (var i = 0; i < oList.length; i++) {
			urcBnftIdList[i] = oList[i].urcBnftId;
		}

		dma_delList.set("urcBnftIdList", urcBnftIdList);
		com.sbm.execute(sbm_deletePntDcntList, {}, gcm.SERVICE_LIST.PRDV);
	};

	// 삭제 confirm callback
	scwin.confirmGrdDelCallback = function(result) {
		if (!result.clickValue)
			return;

		scwin.mainDelete();
	};

	// 저장버튼 클릭
	scwin.btn_save_onclick = function(e) {
		if (!com.data.checkModified(dlt_cmmListInqDto))
			return;

		var valInfo = [{
			id : "scrnEposYn",
			label : "화면노출여부",
			mandatory : true
		}, {
			id : "scrnEposYn",
			label : "화면노출여부",
			mandatory : true
		}];

		// 그리드 필수값 체크
		if (!com.data.validateGridView(grd_main, valInfo))
			return;

		com.win.confirm(com.data.getMessage("com.cfm.0012","변경사항"),
				scwin.confirmSaveCallback);
	};

	// 저장 confirm callback
	scwin.confirmSaveCallback = function(result) {
		if (!result.clickValue)
			return;

		scwin.save();
	};

	// 저장 서브미션 실행
	scwin.save = function() {
		com.sbm.execute(sbm_updatePntDcntList, {}, gcm.SERVICE_LIST.PRDV);
	};

	scwin.sbm_updatePntDcntList_submitdone = function(e) {
		if (e.responseStatusCode != "200" || e.responseJSON == "0") {
			com.win.alert(com.data.getMessage("error.systemError"));
			return;
		}

		com.win.alert(com.data.getMessage("com.inf.0006"));
		scwin.fn_searEvetList(1);
	};

	// 텝 추가
	scwin.fn_dvicAddTab = function(label, tabId, src, key) {
		var openAction = "new";
		var tabId = tabId;
		var tabInfoArr = tabControl.getTabInfo();
		// 이미 열린 탭인 경우, 해당 탭으로 이동
		for (var i = 0; i < tabInfoArr.length; i++) {
			if (tabInfoArr[i].label == label) {
				openAction = "exist";
				tabId = tabInfoArr[i].id;
			}
		}

		var tabOpt = {
			label : label,
			closable : true,
			openAction : openAction
		};

		var contOpt = {
			frameMode : "wframePreload",
			scope : true,
			src : src,
			alwaysDraw : false,
			"dataObject" : {
				"type" : "json",
				"name" : "param",
				"data" : {
					"tabId" : tabId,
					"src" : src,
					"urcBnftId" : key
				}
			}
		};

		tabControl.addTab(tabId, tabOpt, contOpt);

		var tabIdx = tabControl.getTabIndex(tabId);
		tabControl.setSelectedTabIndex(tabIdx);
	};

	// 텝 삭제
	scwin.removeSelectedTab = function(rtnValue) {
		tabControl.deleteTab(tabControl.selectedIndex);
		tabControl.setSelectedTabIndex(0);

		if (rtnValue == "저장") {
			com.win.alert(com.data.getMessage("com.inf.0006"));
			scwin.fn_searEvetList(1);
		}
	};

	scwin.pgl_pageList_onviewchange = function(info) {
		scwin.fn_searEvetList(info.newSelectedIndex);
	};

	/**
	 * @description : 페이지건수 onclick
	 * @Author      : jk0649
	 */
	scwin.slb_pagePerCount_onchange = function() {
		scwin.fn_searEvetList(1);
	};
	
	// 새로고침
	scwin.gridReload = function(e){
		dlt_cmmListInqDto.setJSON(scwin.currGridData);
	};
	
}}}]},{T:1,N:'w2:require',A:{src:'/common/udc/udc_shboxToggle.xml'}},{T:1,N:'w2:require',A:{src:'/common/udc/udc_shboxTableToggle.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload','ev:onpageunload':'scwin.onpageunload'},E:[{T:1,N:'xf:group',A:{class:'sub_wrapper',id:''},E:[{T:1,N:'w2:wframe',A:{class:'page_header',id:'',scope:'true',src:'../../../common/xml/wf_titleFav.xml',style:''}},{T:1,N:'xf:group',A:{id:'',class:'page_contents'},E:[{T:1,N:'xf:group',A:{class:'dfbox1',id:''},E:[{T:1,N:'w2:textbox',A:{id:'',label:'포인트 할인',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'page_contents_inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'search_box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'search_area',id:'grp_srchBox',style:''},E:[{T:1,N:'xf:group',A:{class:'search_tbl',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'caption'},E:[{T:3,text:'디테일&nbsp;테이블(2단)'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:100px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:100px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:100px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:100px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'검색조건',style:'',tagname:'label'}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',chooseOptionLabel:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'sbx_srchCondDivsCntn',ref:'data:dma_search.srchCondDivsCntn',style:'',submenuSize:'auto'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'혜택명'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'01'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'혜택코드'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'02'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{adjustMaxLength:'false',id:'inp_srchCondCntn',ref:'data:dma_search.srchCondCntn',style:'',maxlength:'50'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'전시여부',style:'',tagname:'label'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'true',appearance:'minimal',chooseOption:'',chooseOptionLabel:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'slb_scrnEposYn',ref:'data:dma_search.scrnEposYn',style:'',submenuSize:'auto'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Y'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'Y'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'N'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'N'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'}]}]}]}]},{T:1,N:'xf:group',A:{class:'search_btn_box',id:''},E:[{T:1,N:'xf:group',A:{class:'list-inline mt5',id:'',tagname:'ul'},E:[{T:1,N:'xf:group',A:{id:'',style:'',tagname:'li'},E:[{T:1,N:'xf:trigger',A:{class:'btn_df reset',id:'btn_init',style:'',type:'button','ev:onclick':'scwin.btn_init_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:' 초기화'}]}]}]},{T:1,N:'xf:group',A:{id:'',tagname:'li'},E:[{T:1,N:'xf:trigger',A:{class:'btn_cm',id:'btn_search',style:'',type:'button','ev:onclick':'scwin.btn_search_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'검색'}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'rta',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_cm',id:'btn_reg',style:'',type:'button','ev:onclick':'scwin.btn_reg_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'등록'}]}]}]}]},{T:1,N:'w2:tabControl',A:{alwaysDraw:'false',class:'wq_tbc',confirmFalseAction:'new',confirmTrueAction:'exist',id:'tabControl',style:'',useConfirmMessage:'false',useMoveNextTabFocus:'false',useTabKeyOnly:'true'},E:[{T:1,N:'w2:tabs',A:{disabled:'false',id:'tabs1',label:'목록',style:''}},{T:1,N:'w2:content',A:{alwaysDraw:'false',id:'content1',style:''},E:[{T:1,N:'xf:group',A:{class:'toggle-body',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'gvwbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'gvw_header',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'gvw_toolbar',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'gvw_info',id:'',tagname:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건수 &nbsp;:',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'ui_totalCount',label:'0',style:'',tagname:'em',ref:'data:dma_pageInfo.totalCount'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]},{T:1,N:'xf:group',A:{class:'gvw_length',id:'',style:'',tagname:''},E:[{T:1,N:'xf:group',A:{id:'',tagname:'label'},E:[{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled','ev:onviewchange':'scwin.slb_pagePerCount_onchange',id:'slb_pagePerCount',ref:'data:dma_pageInfo.rowSize',style:'',submenuSize:'auto'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'10'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'10'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'20'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'20'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'30'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'30'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'50'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'50'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'100'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'100'}]}]}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'/ page',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'gvw_btn',id:''}}]},{T:1,N:'xf:group',A:{class:'rta',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2trigger btn_df btn_md',id:'grp_group7',style:'',tagname:'button','ev:onclick':'scwin.btn_grid_reload_onclick'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:type',E:[{T:3,text:'button'}]}]},{T:1,N:'w2:textbox',A:{id:'',label:'새로고침',style:'',tagname:'span'}}]},{T:1,N:'xf:group',A:{class:'w2trigger btn_df btn_md',id:'group6',style:'',tagname:'button','ev:onclick':'scwin.btn_delete_onclick'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:type',E:[{T:3,text:'button'}]}]},{T:1,N:'w2:textbox',A:{class:'fa fa-minus',id:'',label:'',style:'',tagname:'i'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:aria-hidden',E:[{T:3,text:'true'}]}]}]},{T:1,N:'w2:textbox',A:{id:'',label:'삭제',style:'',tagname:'span'}}]}]}]},{T:1,N:'w2:gridView',A:{autoFit:'allColumn',class:'wq_gvw',dataList:'data:dlt_cmmListInqDto',defaultCellHeight:'32','ev:oncellclick':'scwin.grd_main_oncellclick',focusMode:'row',id:'grd_main',rowNumVisible:'true',rowNumHeaderValue:'번호',rowStatusVisible:'false',scrollByColumn:'false',scrollByColumnAdaptive:'false',sortable:'true',style:'height:98px;',visibleRowNum:'all'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column7',inputType:'checkbox',removeBorderStyle:'false',style:'height:32px;',value:'번호',width:'50'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column5',inputType:'text',removeBorderStyle:'false',style:'height:32px;',value:'혜택 명',width:'300'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'150',inputType:'text',style:'height:32px;',id:'column23',value:'혜택 코드',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column3',inputType:'text',removeBorderStyle:'false',style:'height:32px;',value:'전시여부',width:'90'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column1',inputType:'text',removeBorderStyle:'false',style:'height:32px;',value:'전시순서',width:'90',sortable:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column11',inputType:'text',removeBorderStyle:'false',style:'height:32px;',value:'수정일',width:'90',sortable:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column19',inputType:'text',removeBorderStyle:'false',style:'height:32px;',value:'수정자',width:'90'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column17',inputType:'text',removeBorderStyle:'false',style:'height:32px;',value:'등록일',width:'90',sortable:'true',sortLabel:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column21',inputType:'text',removeBorderStyle:'false',style:'height:32px;',value:'등록자',width:'110'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'chk',inputType:'checkbox',removeBorderStyle:'false',style:'',width:'50'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'urcBnftNm',inputType:'link',removeBorderStyle:'false',readOnly:'true',width:'300',class:'titleLink'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'150',inputType:'text',style:'height:32px',id:'urcBnftMenuIdfyNm',value:'',readOnly:'true',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{allOption:'',applyFormat:'',blockSelect:'',chooseOption:'',displayMode:'label',displayType:'',editModeEvent:'onclick',editType:'select',id:'scrnEposYn',inputType:'select',ref:'',removeBorderStyle:'false',style:'height:20px',useKeywordHighlight:'',value:'',viewType:'icon',width:'90'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Y'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'Y'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'N'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'N'}]}]}]}]},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'scrnSortOrd',inputType:'text',removeBorderStyle:'false',readOnly:'false',style:'height:32px',value:'',width:'90'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'updDttm',inputType:'text',removeBorderStyle:'false',readOnly:'true',style:'height:32px',value:'',width:'90'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'updIntgUserId',inputType:'text',removeBorderStyle:'false',readOnly:'true',style:'height:32px',value:'',width:'90'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'regDttm',inputType:'text',removeBorderStyle:'false',readOnly:'true',style:'height:32px',value:'',width:'90'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'regIntgUserId',inputType:'text',removeBorderStyle:'false',readOnly:'true',style:'height:32px',value:'',width:'110'}}]}]}]},{T:1,N:'w2:pageList',A:{displayButtonType:'display',displayFormat:'#','ev:onviewchange':'scwin.pgl_pageList_onviewchange',id:'pgl_pageList',pageSize:'10',renderType:'list',style:''}}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'rta',id:''},E:[{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'rta',id:''},E:[{T:1,N:'xf:group',A:{class:'w2trigger btn_cm','ev:onclick':'scwin.btn_save_onclick',id:'btn_saveConfirm',style:'',tagname:'button'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:type',E:[{T:3,text:'button'}]}]},{T:1,N:'w2:textbox',A:{class:'fa fa-check',id:'',label:'',style:'',tagname:'i'}},{T:1,N:'w2:textbox',A:{id:'',label:'저장',style:'',tagname:'span'}}]}]}]}]}]}]}]}]}]}]}]}]}]}]})