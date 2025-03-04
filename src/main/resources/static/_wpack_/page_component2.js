/*amd /page_component2.xml 24903 c14e050ac103b5d4d91d930ed9cff4f4b1c53c8ec1ae919b19277a9cb5f77893 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'DEFAULT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_banner'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'urcChrgCalrBnnrNo',name:'배너ID',dataType:'number'}},{T:1,N:'w2:key',A:{id:'pcEposYn',name:'PC노출여부',dataType:'text'}},{T:1,N:'w2:key',A:{id:'pcBnnrImgeFileUrl',name:'PC배너파일전체경로',dataType:'text'}},{T:1,N:'w2:key',A:{id:'pcBnnrImgeFilePlcyCntn',name:'PC배너파일정책',dataType:'text'}},{T:1,N:'w2:key',A:{id:'pcBnnrImgeFilePathNm',name:'PC배너파일경로',dataType:'text'}},{T:1,N:'w2:key',A:{id:'pcBnnrImgeFileNm',name:'PC배너파일명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'pcBnnrImgeOcpyFileNm',name:'PC배너원본파일명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'pcBnnrAltrTxtCntn',name:'PC배너대체텍스트내용',dataType:'text'}},{T:1,N:'w2:key',A:{id:'pcBnnrLinkUrl',name:'PC배너URL',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mblEposYn',name:'MO노출여부',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mblBnnrImgeFileUrl',name:'MO배너파일전체경로',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mblBnnrImgeFilePlcyCntn',name:'MO배너파일정책',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mblBnnrImgeFilePathNm',name:'MO배너파일경로',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mblBnnrImgeFileNm',name:'MO배너파일명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mblBnnrImgeOcpyFileNm',name:'MO배너원본파일명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mblBnnrAltrTxtCntn',name:'MO배너대체텍스트',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mblBnnrLinkUrl',name:'MO배너URL',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dataInpsId',name:'name18',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dataInptDttm',name:'name19',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dataInptPgmId',name:'name20',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dataMfpnId',name:'name21',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dataUpdDttm',name:'name22',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dataUpdPgmId',name:'name23',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_srchBanner',ref:'',target:'data:json,dma_banner',action:'/uhdc/bo/entp/chcaban/banner/v1/banner-info',method:'get',mediatype:'application/json',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'조회중..',singleMode:'true','ev:submit':'','ev:submitdone':'scwin.sbm_srchBanner_submitdone','ev:submiterror':'',abortTrigger:'true'}},{T:1,N:'xf:submission',A:{id:'sbm_bannerUpd',ref:'data:json,dma_banner',target:'',action:'/uhdc/bo/entp/chcaban/banner/v1/banner-mod',method:'put',mediatype:'application/json',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'저장중','ev:submit':'','ev:submitdone':'scwin.sbm_banner_submitdone','ev:submiterror':'',abortTrigger:'',singleMode:'true'}},{T:1,N:'xf:submission',A:{id:'sbm_bannerReg',ref:'data:json,dma_banner',target:'',action:'/uhdc/bo/entp/chcaban/banner/v1/banner-reg',method:'post',mediatype:'application/json',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'저장중','ev:submit':'','ev:submitdone':'scwin.sbm_banner_submitdone','ev:submiterror':'',abortTrigger:'',singleMode:'true'}}]},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){

	const IMG_POLICY = "public-img";
    const IMG_SUBPATH = "uhdc/entp/ct/evet";

        
	scwin.onpageload = function() {
		
		grp_fileNmPc.visible(false);
		tbx_fileNmPc.setValue("");			

		grp_fileNmMo.visible(false);
		tbx_fileNmMo.setValue("");			
		
		grp_updInfo.hide();
		
		scwin.fn_srchBanner();
			
	};
	
	scwin.onpageunload = function() {
		
	};
	
	
	scwin.fn_srchBanner = function() {
	
		dma_banner.setArray( [] );
		com.sbm.execute(sbm_srchBanner, {}, gcm.SERVICE_LIST.ENTP);
		
	};
		

	scwin.sbm_srchBanner_submitdone = function(e) {
		
		//수정인 경우
		if (!com.util.isEmpty(dma_banner.get( "urcChrgCalrBnnrNo" ))) {
			
			grp_updInfo.show("");
			
			inp_ocpyFileNmPc.setValue( dma_banner.get("pcBnnrImgeOcpyFileNm") );
			inp_upldFileNmPc.setValue( dma_banner.get("pcBnnrImgeFileNm") );
			inp_fileUrlAddrPc.setValue( dma_banner.get("pcBnnrImgeFileUrl") );
			
			grp_fileNmPc.visible(true);
			tbx_fileNmPc.setValue(dma_banner.get("pcBnnrImgeOcpyFileNm"));
			
			inp_ocpyFileNmMo.setValue( dma_banner.get("mblBnnrImgeOcpyFileNm") );
			inp_upldFileNmMo.setValue( dma_banner.get("mblBnnrImgeFileNm") );
			inp_fileUrlAddrMo.setValue( dma_banner.get("mblBnnrImgeFileUrl") );

			grp_fileNmMo.visible(true);
			tbx_fileNmMo.setValue(dma_banner.get("mblBnnrImgeOcpyFileNm"));
		
		}
		
		dma_banner.initRowStatus();
		
	};
	
	//미리보기
	scwin.btn_preview_onclick = function(e){
		
		var url = "/web/uhdc/cmm/cmmPreImagePopup.xml";
		//var src = gcm.SERVICE_LIST.SYCM;
		//var src = gcm.CONTEXT_PATH;
			
		var btnIdxPc = this.getID().indexOf("btn_previewImgPc");
		var btnIdxMo = this.getID().indexOf("btn_previewImgMo");
		
		var path = "";
		if(btnIdxPc > -1)	path = dma_banner.get("pcBnnrImgeFileUrl");
		if(btnIdxMo > -1)	path = dma_banner.get("mblBnnrImgeFileUrl");
		
		
		var data = {
					//src : src+path
					src : path
					};
		var options = { id : "previewImg",
						popupName : "이미지 미리보기",
						modal : true,
						width : 802,
						height: 402,
						type : "wframePopup"
						};
						
		if (!com.util.isEmpty(path)) {
			com.win.openPopup(url, options, data);
		} else {
			com.win.alert("이미지를 등록해주세요.");
			return false;			
		}						
	
	}
	
	scwin.btn_fileUpload_onclick = function(e) {
			
		var url = "/web/uhdc/cmm/cmmFileSingleUploadPopup.xml";
		
		// KV관리
		var btnIdx1_0_0 = this.getID().indexOf("btn_fileUploadPc");
		var btnIdx1_0_1 = this.getID().indexOf("btn_fileUploadMo");
		
		var callbackFn = "";

		// KV 콜백
		if(btnIdx1_0_0 > -1) callbackFn = "scwin.popupCallBackPc";
		if(btnIdx1_0_1 > -1) callbackFn = "scwin.popupCallBackMo";

		var data = { "type" :"insert",
		             "policy" : IMG_POLICY,
		             "subPath" : IMG_SUBPATH,
		             "callbackFn" : callbackFn };

		var options = { id : "insertPopup",
						popupName : "파일등록",
						modal : true,
						width : 700,
						height: 250,
						type : "wframePopup"
						};

		 com.win.openPopup(url, options, data);			
		
	};
	
	
	// 이미지 업로드 버튼 callback
	scwin.popupCallBackPc = function(retObj) {
		
		if (retObj.status == "S") {
			
			//console.log("retObj>>>>>>>>>>>>>>>>>>>>>"+JSON.stringify(retObj));

			if(!scwin.fn_imgFileChk(retObj.fileName)) return;
			com.win.toast(com.data.getMessage("com.inf.0008"));
						
			dma_banner.set( "pcBnnrImgeFileUrl" , retObj.physFilePathAddr );	//PC배너파일전체경로
			dma_banner.set( "pcBnnrImgeFilePlcyCntn" , retObj.policy );	//PC배너파일정책
			dma_banner.set( "pcBnnrImgeFilePathNm" , retObj.uiUrl );	//PC배너파일경로
			dma_banner.set( "pcBnnrImgeFileNm" , retObj.fileName );	//PC배너파일명
			dma_banner.set( "pcBnnrImgeOcpyFileNm" , retObj.fileOrginName );	//PC배너원본파일명

			inp_ocpyFileNmPc.setValue( retObj.fileOrginName );
			inp_upldFileNmPc.setValue( retObj.fileName );
			inp_fileUrlAddrPc.setValue( retObj.uiUrl );

			grp_fileNmPc.visible(true);
			tbx_fileNmPc.setValue(retObj.fileOrginName);
			
		} else {
			com.win.alert(retObj.message);
		}
	}	
	
	

	// 이미지 업로드 버튼 callback
	scwin.popupCallBackMo = function(retObj) {
		
		if (retObj.status == "S") {
			
			if(!scwin.fn_imgFileChk(retObj.fileName)) return;
			com.win.toast(com.data.getMessage("com.inf.0008"));
						
			dma_banner.set( "mblBnnrImgeFileUrl" , retObj.physFilePathAddr );	//PC배너파일전체경로
			dma_banner.set( "mblBnnrImgeFilePlcyCntn" , retObj.policy );	//PC배너파일정책
			dma_banner.set( "mblBnnrImgeFilePathNm" , retObj.uiUrl );	//PC배너파일경로
			dma_banner.set( "mblBnnrImgeFileNm" , retObj.fileName );	//PC배너파일명
			dma_banner.set( "mblBnnrImgeOcpyFileNm" , retObj.fileOrginName );	//PC배너원본파일명
			
			inp_ocpyFileNmMo.setValue( retObj.fileOrginName );
			inp_upldFileNmMo.setValue( retObj.fileName );
			inp_fileUrlAddrMo.setValue( retObj.uiUrl );

			grp_fileNmMo.visible(true);
			tbx_fileNmMo.setValue(retObj.fileOrginName);

		} else {
			com.win.alert(retObj.message);
		}
	}		
	
	
	// 이미지 파일 체크
	scwin.fn_imgFileChk = function(sFileNm) {
		var fileNm = sFileNm;
		var fileExt = "";
		
		if(!com.util.isEmpty(fileNm)) fileExt = fileNm.toLowerCase().substring(fileNm.indexOf(".")+1);
		
		if(fileExt != "png" && fileExt != "bmp" && fileExt != "jpg" && fileExt != "jpeg" && fileExt != "gif"){
			com.win.alert(com.data.getMessage("com.inf.0013", "이미지 파일"));
			return false;
		}	
		
		return true;
	}	
	
		
	// 파일 삭제 클릭
	scwin.btn_fileNm_onclick = function(e) {
		
		var btnIdxPc = this.getID().indexOf("btn_fileNmPc");
		var btnIdxMo = this.getID().indexOf("btn_fileNmMo");
		var idx;
		
		if(btnIdxPc > -1)
		{
			grp_fileNmPc.visible(false);
			tbx_fileNmPc.setValue("");
			
			dma_banner.set( "pcBnnrImgeFileUrl" , "" );			//PC배너파일전체경로
			dma_banner.set( "pcBnnrImgeFilePlcyCntn" , "" );	//PC배너파일정책
			dma_banner.set( "pcBnnrImgeFilePathNm" , "" );		//PC배너파일경로
			dma_banner.set( "pcBnnrImgeFileNm" , "" );			//PC배너파일명
			dma_banner.set( "pcBnnrImgeOcpyFileNm" , "" );		//PC배너원본파일명			
			
		} else if(btnIdxMo > -1){
			
			grp_fileNmMo.visible(false);
			tbx_fileNmMo.setValue("");
			
			dma_banner.set( "mblBnnrImgeFileUrl" , "" );		//PC배너파일전체경로
			dma_banner.set( "mblBnnrImgeFilePlcyCntn" , "" );	//PC배너파일정책
			dma_banner.set( "mblBnnrImgeFilePathNm" , "" );		//PC배너파일경로
			dma_banner.set( "mblBnnrImgeFileNm" , "" );			//PC배너파일명
			dma_banner.set( "mblBnnrImgeOcpyFileNm" , "" );		//PC배너원본파일명
			
		}

	};	 
			
	
	
	
	scwin.btn_save_onclick = function(e) {
		
		var arrIdx = dma_banner.getModifiedIndex();
		//console.log("arrIdx>>>>>>>"+arrIdx);
		if(arrIdx == 0){
			//변경된 데이터가 없습니다
			com.win.alert("com.alt.0010");
			return false;
		}
		
		
		if(com.util.isEmpty(dma_banner.get("pcEposYn"))){
			//{0}은(는) 필수 입력 항목입니다.
			com.win.alert(com.data.getMessage("com.alt.0013", "PC노출여부"), function(){ 
				rad_pcEposYn.focus();
				return false; 
			}); 
			return false;
		}
		
		if(com.util.isEmpty(dma_banner.get("pcBnnrImgeOcpyFileNm"))){
			//{0}은(는) 필수 입력 항목입니다.
			com.win.alert(com.data.getMessage("com.alt.0013", "PC 이미지"), function(){ 
				return false; 
			}); 
			return false;
		}
		
		
		if(com.util.isEmpty(dma_banner.get("pcBnnrAltrTxtCntn"))){
			//{0}은(는) 필수 입력 항목입니다.
			com.win.alert(com.data.getMessage("com.alt.0013", "PC 대체텍스트(alt)"), function(){ 
				inp_pcBnnrAltrTxtCntn.focus();
				return false; 
			}); 
			return false;
		}
		
		

		if(com.util.isEmpty(dma_banner.get("mblEposYn"))){
			//{0}은(는) 필수 입력 항목입니다.
			com.win.alert(com.data.getMessage("com.alt.0013", "MW 노출 여부"), function(){ 
				rad_mblEposYn.focus();
				return false; 
			}); 
			return false;
		}		
		
		
		if(com.util.isEmpty(dma_banner.get("mblBnnrImgeOcpyFileNm"))){		
			//{0}은(는) 필수 입력 항목입니다.
			com.win.alert(com.data.getMessage("com.alt.0013", "mobile 이미지"), function(){ 
				return false; 
			}); 
			return false;
		}			

		
		if(com.util.isEmpty(dma_banner.get("mblBnnrAltrTxtCntn"))){
			//{0}은(는) 필수 입력 항목입니다.
			com.win.alert(com.data.getMessage("com.alt.0013", "mobile 대체텍스트(alt)"), function(){ 
				inp_mblBnnrAltrTxtCntn.focus();
				return false; 
			}); 
			return false;
		}
		

		com.win.confirm(com.data.getMessage("com.cfm.0001"), function(result) {
		 	if (result.clickValue) {
				if(com.util.isEmpty(dma_banner.get("urcChrgCalrBnnrNo"))){	
					com.sbm.execute(sbm_bannerReg, {}, gcm.SERVICE_LIST.ENTP);			
				} else {
					com.sbm.execute(sbm_bannerUpd, {}, gcm.SERVICE_LIST.ENTP);
				}	
		 	}
		});				
					
	};

	scwin.sbm_banner_submitdone = function(e) {
		
		if (e.responseText == "0") {						
		com.win.alert(com.data.getMessage("error.systemError"));						
		} else {						
			com.util.setTimeout(function(){scwin.fn_srchBanner();}, {delay:200});					
			com.win.toast(com.data.getMessage("com.inf.0010", "1"));					
		}		
					
	};
	
	
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload','ev:onpageunload':'scwin.onpageunload'},E:[{T:1,N:'xf:group',A:{class:'sub_wrapper',id:''},E:[{T:1,N:'w2:wframe',A:{class:'page_header',id:'',scope:'true',src:'../../../common/xml/wf_titleFav.xml',style:''}},{T:1,N:'xf:group',A:{class:'page_contents',id:''},E:[{T:1,N:'xf:group',A:{class:'page_contents_inner',id:'',style:''},E:[{T:1,N:'w2:tabControl',A:{alwaysDraw:'false',class:'wq_tbc',confirmFalseAction:'new',confirmTrueAction:'exist',id:'tab_main',style:'',useConfirmMessage:'false',useMoveNextTabFocus:'false',useTabKeyOnly:'true'},E:[{T:1,N:'w2:tabs',A:{class:'',disabled:'false',id:'tabs1',label:'기업 상품 요금 알아보기',style:''}},{T:1,N:'w2:content',A:{alwaysDraw:'false',id:'content1',src:'',style:''},E:[{T:1,N:'xf:group',A:{class:'info tip',id:'',style:'',tagname:'span'},E:[{T:1,N:'w2:textbox',A:{class:'fa fa-info-circle',id:'',label:'',style:'',tagname:'i'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'기업 상품 요금 알아보기 내 배너를 관리하는 화면입니다.',style:'',tagname:'p'}}]},{T:1,N:'xf:group',A:{id:'',style:'',tagname:'section'},E:[{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tb',id:'grp_input',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'caption'},E:[{T:3,text:'디테일&nbsp;테이블(2단)'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:15%;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:15%;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'PC 노출 여부',style:'',tagname:'label'}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:select1',A:{appearance:'full',cols:'',id:'rad_pcEposYn',ref:'data:dma_banner.pcEposYn',renderType:'radiogroup',rows:'',selectedIndex:'-1',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Y'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'Y'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'N'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'N'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'PC 이미지',style:'',tagname:'label'}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:group',A:{class:'tb_ly wauto',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'cell ',id:''},E:[{T:1,N:'xf:group',A:{class:'w2trigger btn_df btn_md',style:'',tagname:'button'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:type',E:[{T:3,text:'button'}]}]},{T:1,N:'w2:textbox',A:{class:'fa fa-plus',label:'',style:'',tagname:'i'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:aria-hidden',E:[{T:3,text:'true'}]}]}]},{T:1,N:'w2:textbox',A:{'ev:onclick':'scwin.btn_fileUpload_onclick',id:'btn_fileUploadPc',label:'파일찾기',style:'',tagname:'span'}},{T:1,N:'xf:input',A:{id:'inp_ocpyFileNmPc',style:'display:none;'}},{T:1,N:'xf:input',A:{id:'inp_upldFileNmPc',style:'display:none;'}},{T:1,N:'xf:input',A:{id:'inp_fileUrlAddrPc',style:'display:none;'}}]}]},{T:1,N:'xf:group',A:{class:'search_people',id:'grp_fileNmPc',style:'',tagname:'ul'},E:[{T:1,N:'xf:group',A:{id:'',style:'',tagname:'li',toolTip:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'tbx_fileNmPc',label:'',ref:'',style:'',tagname:'span'}},{T:1,N:'xf:trigger',A:{class:'btn_userDel','ev:onclick':'scwin.btn_fileNm_onclick',id:'btn_fileNmPc',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'삭제'}]}]}]}]},{T:1,N:'xf:trigger',A:{class:'btn_in',id:'btn_previewImgPc',style:'',type:'button','ev:onclick':'scwin.btn_preview_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'미리보기'}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'대체텍스트(alt)',style:'',tagname:'label'}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{adjustMaxLength:'false',class:'wd-full',id:'inp_pcBnnrAltrTxtCntn',placeholder:'',style:'',ref:'data:dma_banner.pcBnnrAltrTxtCntn',maxByteLength:'200',maxlength:'200'}}]}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{id:'',label:'URL',style:'',tagname:'label'}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{adjustMaxLength:'false',class:'wd-full',id:'inp_pcBnnrLinkUrl',placeholder:'',style:'',ref:'data:dma_banner.pcBnnrLinkUrl',maxByteLength:'500',maxlength:'500'}}]}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'MW 노출 여부',style:'',tagname:'label'}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:select1',A:{appearance:'full',cols:'',id:'rad_mblEposYn',ref:'data:dma_banner.mblEposYn',renderType:'radiogroup',rows:'',selectedIndex:'-1',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Y'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'Y'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'N'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'N'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'mobile 이미지',style:'',tagname:'label'}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:group',A:{class:'tb_ly wauto',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'cell ',id:''},E:[{T:1,N:'xf:group',A:{class:'w2trigger btn_df btn_md',style:'',tagname:'button'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:type',E:[{T:3,text:'button'}]}]},{T:1,N:'w2:textbox',A:{class:'fa fa-plus',label:'',style:'',tagname:'i'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:aria-hidden',E:[{T:3,text:'true'}]}]}]},{T:1,N:'w2:textbox',A:{'ev:onclick':'scwin.btn_fileUpload_onclick',id:'btn_fileUploadMo',label:'파일찾기',style:'',tagname:'span'}},{T:1,N:'xf:input',A:{id:'inp_ocpyFileNmMo',style:'display:none;'}},{T:1,N:'xf:input',A:{id:'inp_upldFileNmMo',style:'display:none;'}},{T:1,N:'xf:input',A:{id:'inp_fileUrlAddrMo',style:'display:none;'}}]}]},{T:1,N:'xf:group',A:{class:'search_people',id:'grp_fileNmMo',style:'',tagname:'ul'},E:[{T:1,N:'xf:group',A:{id:'',style:'',tagname:'li',toolTip:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'tbx_fileNmMo',label:'',ref:'',style:'',tagname:'span'}},{T:1,N:'xf:trigger',A:{class:'btn_userDel','ev:onclick':'scwin.btn_fileNm_onclick',id:'btn_fileNmMo',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'삭제'}]}]}]}]},{T:1,N:'xf:trigger',A:{class:'btn_in',id:'btn_previewImgMo',style:'',type:'button','ev:onclick':'scwin.btn_preview_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'미리보기'}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'대체텍스트(alt)',style:'',tagname:'label'}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{adjustMaxLength:'false',class:'wd-full',id:'inp_mblBnnrAltrTxtCntn',placeholder:'',style:'',ref:'data:dma_banner.mblBnnrAltrTxtCntn',maxByteLength:'200',maxlength:'200'}}]}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{id:'',label:'URL',style:'',tagname:'label'}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{adjustMaxLength:'false',class:'wd-full',id:'inp_mblBnnrLinkUrl',placeholder:'',style:'',ref:'data:dma_banner.mblBnnrLinkUrl',maxByteLength:'500',maxlength:'500'}}]}]}]}]},{T:1,N:'xf:group',A:{id:'grp_updInfo',style:'',tagname:'section',class:'mt20'},E:[{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'caption'},E:[{T:3,text:'디테일&nbsp;테이블(2단)'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:15.00%;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:15%;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'최종수정일',style:'',tagname:'label'}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:textbox',A:{id:'',label:'수정일',ref:'data:dma_banner.dataUpdDttm',style:'',tagname:'label'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'최종수정자',style:'',tagname:'label'}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',displayFormatter:'',id:'',label:'수정자',ref:'data:dma_banner.dataMfpnId',style:'',tagname:'label'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'최초등록일',style:'',tagname:'label'}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'등록일',ref:'data:dma_banner.dataInptDttm',style:'',tagname:'label'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'최초등록자',style:'',tagname:'label'}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',displayFormatter:'',id:'',label:'등록자',ref:'data:dma_banner.dataInpsId',style:'',tagname:'label'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'rta',id:''},E:[{T:1,N:'xf:group',A:{class:'w2trigger btn_cm',id:'',style:'',tagname:'button'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:type',E:[{T:3,text:'button'}]}]},{T:1,N:'w2:textbox',A:{class:'fa fa-check',id:'',label:'',style:'',tagname:'i'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:aria-hidden',E:[{T:3,text:'true'}]}]}]},{T:1,N:'w2:textbox',A:{'ev:onclick':'scwin.btn_save_onclick',id:'btn_save',label:'저장',style:'',tagname:'span'}}]}]}]}]}]}]}]}]}]}]}]}]})