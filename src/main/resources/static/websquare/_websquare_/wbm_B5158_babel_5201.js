"use strict";(self.webpackChunkwebpack_test=self.webpackChunkwebpack_test||[]).push([[5201],{5201:function(t,e,i){i.r(e),i.d(e,{fwBulletChart:function(){return p}});var r=i(1002),o=i(5861),s=i(4687),a=i.n(s),n=i(9122),c=i(7827),l=i(1160),h=i(6079),u=i(5316),p=function(t,e,i){u.s.call(this,t,e,i)};n.x.extend(p.prototype,u.s.prototype),p.prototype.defaultOptions={pluginType:"uiplugin.fwBulletChart",pluginName:"fwBulletChart",useConfig:!0,chartType:"",seriesType:"advanced",version:"3.7",accessibility:!1,displayData:!1,title:""},p.prototype.initialize=function(t){this.fcObj=null,this.chartObj={},this.attributeObj=null,this.colorrange=null,this.value=null,this.target=null,!t.getAttribute("version")&&c.v.getConfiguration("/WebSquare/fusionchart/version/@value")&&(this.options.version=c.v.getConfiguration("/WebSquare/fusionchart/version/@value"))},p.prototype.initAsync=(0,o.Z)(a().mark((function t(){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("undefined"!=typeof FusionCharts){t.next=27;break}if("3.19"!==this.options.version&&(this.options.version||"3.19"!=c.v.getConfiguration("/WebSquare/fusionchart/version/@value"))){t.next=7;break}return this.options.version="3.19",t.next=5,inquires("externalJS/FusionCharts3.19/FusionCharts_all.js");case 5:case 11:case 17:case 23:t.next=27;break;case 7:if("3.15"!==this.options.version&&(this.options.version||"3.15"!=c.v.getConfiguration("/WebSquare/fusionchart/version/@value"))){t.next=13;break}return this.options.version="3.15",t.next=11,inquires("externalJS/FusionCharts3.15.2/FusionCharts_all.js");case 13:if("3.13"!==this.options.version&&(this.options.version||"3.13"!=c.v.getConfiguration("/WebSquare/fusionchart/version/@value"))){t.next=19;break}return this.options.version="3.13",t.next=17,inquires("externalJS/FusionCharts3.13/js/FusionCharts_all.js");case 19:if("3.11"!=this.options.version&&(this.options.version||"3.11"!=c.v.getConfiguration("/WebSquare/fusionchart/version/@value"))){t.next=25;break}return this.options.version="3.11",t.next=23,inquires("externalJS/FusionCharts3.11.0/FusionCharts_all.js");case 25:return t.next=27,inquires("externalJS/FusionCharts3.7/FusionCharts_all.js");case 27:case"end":return t.stop()}}),t,this)}))),p.prototype.toHTML=function(){var t=[],e=""==this.options.style?"":"style='"+this.options.style+"'";return t.push("<div id='"+this.id+"' "+e+" class='w2fwBulletChart "+this.options.className+"'>"),t.push("</div>"),t.join("")},p.prototype.setAction=function(){try{if("3.19"==this.options.version&&"function"==typeof FusionCharts.options._setActivate&&FusionCharts.options._setActivate(),this.fcObj=new FusionCharts({id:"fw_bullet_"+this.id,type:this.options.chartType,width:"100%",height:this.render.offsetHeight||"100%"}),this.setDefaultOption(),this.modelControl.isDataCollectionRefBinded){var t=this.modelControl.dataCollectionRefInfo.dataComp,e=t.getRowPosition();e=e||0,this.setValue(t.getRowJSON(e))}}catch(t){l.w.printStackTrace(t)}},p.prototype.refresh=function(){try{var t=this.modelControl.dataCollectionRefInfo.dataComp;if(this.modelControl.isDataCollectionRefBinded){var e=t.getRowPosition();e=e||0,this.setValue(t.getRowJSON(e))}}catch(t){l.w.printStackTrace(t)}},p.prototype.setJSONData=function(t){try{this.chartObj=t,this.draw()}catch(t){l.w.printStackTrace(t)}},p.prototype.getJSONData=function(){try{return this.fcObj.getJSONData()}catch(t){l.w.printStackTrace(t)}},p.prototype.fc=function(){try{return FusionCharts.items["fw_bullet_"+this.id]}catch(t){l.w.printStackTrace(t)}},p.prototype.draw=function(){try{null!=this.attributeObj&&this._setChartAttribute(this.attributeObj),null!=this.colorrange&&(this.chartObj.colorrange=this.colorrange),null!=this.target&&(this.chartObj.target=this.target),null!=this.value&&(this.chartObj.value=this.value);var t=this.fc();if(t.setJSONData(this.chartObj),t.isActive()||t.render(this.id),1==this.options.accessibility){var e=document.getElementById("fw_bullet_"+this.id);e&&e.setAttribute("aria-hidden",!0),
this.setAccessibility(!0)}}catch(t){l.w.printStackTrace(t)}},p.prototype.setAccessibility=function(t){try{var e=document.getElementById("accessibility_"+this.id);if(0==t)return void(e&&e.remove());if(null==e){var i=document.createElement("table");i.id="accessibility_"+this.id,WebSquare.style.addClass(i,"w2fusionchart_accessibility"),1==this.options.displayData&&(WebSquare.style.removeClass(i,"w2fusionchart_accessibility"),WebSquare.style.addClass(i,"w2tb"),WebSquare.style.addClass(i,"w2fusionchart_accessibility_table")),this.render.appendChild(i,this.render.lastChild),e=document.getElementById("accessibility_"+this.id)}e.innerHTML="";var r="",o=this.getDataListInfo(),s=WebSquare.util.getComponentById(o.id,this.scope_id);if(s){var a=this.attributeObj.caption;a&&(r="<caption>"+a+"</caption>"),r+="<thead><tr>";for(var n=s.getColCnt(),c=0;c<n;c++){r+="<th scope='col' class='w2tb_th'>"+s.getColumnInfo(c,0).name+"</th>"}r+="</tr></thead>",r+="<tbody>";for(c=0;c<s.getRowCount();c++){r+="<tr>";for(var l=s.getRowData(c),h=0;h<l.length;h++)r+="<td class='w2tb_td'>"+l[h]+"</td>";r+="</tr>"}r+="</tbody>",e.innerHTML=r}}catch(t){WebSquare.exception.printStackTrace(t)}},p.prototype.setDefaultOption=function(){try{this.attributeObj={plotFillColor:"0075c2",targetColor:"8e0000",showHoverEffect:"1",showBorder:"0",bgColor:"ffffff",showShadow:"0",colorRangeFillMix:"{light+0}",caption:this.options.title},this.colorrange={color:[{minValue:"0",maxValue:"30",code:"fe5d55"},{minValue:"50",maxValue:"60",code:"f4c74e"},{minValue:"75",maxValue:"100",code:"00ba84"}]},this.value=0,this.target=0}catch(t){l.w.printStackTrace(t)}},p.prototype.setChartAttribute=function(t){try{for(var e in null==this.attributeObj&&(this.attributeObj={}),t)t.hasOwnProperty(e)&&(this.attributeObj[e.toLowerCase()]=t[e])}catch(t){l.w.printStackTrace(t)}},p.prototype._setChartAttribute=function(t){try{this.chartObj.chart=t}catch(t){l.w.printStackTrace(t)}},p.prototype.getChartAttribute=function(t){try{return FusionCharts.items["fw_bullet_"+this.id].getChartAttribute(t)}catch(t){l.w.printStackTrace(t)}},p.prototype.exportJSChart=function(t){try{t||(t="jpg");var e=this.options.id||"fusionChart",i=this.getSVGString();if(i){var r=encodeURI(i+"ExportType="+t+"ExportFileName="+e),o=n.x._resourceURI+"engine/servlet/exportFusionChart.jsp";c.v.download(o,r,"post")}}catch(t){l.w.printStackTrace(t)}},p.prototype.getSVGString=function(){try{var t=this.fc().getSVGString();if(t)return t=(t=(t=(t=(t=t.wq_replaceAll('shape-rendering="default"',"shape-rendering='auto'")).wq_replaceAll('visibility=""',"visibility='inherit'")).wq_replaceAll('text-anchor="undefined"',"text-anchor='start'")).wq_replaceAll("1e-006","0.000001")).wq_replaceAll('font-family="15"','font-family="Verdana"');h.k.printLog("not found svg object")}catch(t){l.w.printStackTrace(t)}},p.prototype.getValue=function(){try{var t={};return t.value=this.value,t.target=this.target,t}catch(t){l.w.printStackTrace(t)}},p.prototype.setValue=function(t){"object"==(0,r.Z)(t)&&(this.value=t[this.options.valueNode]||0,this.target=t[this.options.targetNode]||0),this.draw()},p.prototype.setRef=function(t,e,i){try{this.modelControl.isBinded()||(this.modelControl.useRef=!0),this.options.ref=t,this.options.targetNode=e,this.options.valueNode=i,this.modelControl.setRef(t),this.refresh()}catch(t){l.w.printStackTrace(t)}},p.prototype.getDataListInfo=function(){try{if(this.modelControl.isDataCollectionRefBinded){var t={},e=this.options.ref.slice(0);return t.ref=e,t.id=e.wq_replaceAll("data:",""),t.targetNode=this.options.targetNode,t.valueNode=this.options.valueNode,t}return null}catch(t){l.w.printStackTrace(t)}},p.prototype.unbindRef=function(){try{this.modelControl.isBinded()&&(this.options.ref="",this.modelControl.unbindRef(),this.refresh())}catch(t){l.w.printStackTrace(t)}}}}]);