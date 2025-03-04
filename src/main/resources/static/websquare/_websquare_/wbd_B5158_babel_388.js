"use strict";(self.webpackChunkwebpack_test=self.webpackChunkwebpack_test||[]).push([[388],{5388:function(t,e,i){i.r(e),i.d(e,{slider:function(){return u},thumb:function(){return l}});var s=i(9122),o=i(7827),n=i(1160),a=i(5841),h=i(8754),r=i(5316),u=function(t,e,i){r.s.call(this,t,e,i)};s.x.extend(u.prototype,r.s.prototype),u.prototype.defaultOptions={pluginType:"uiplugin.slider",pluginName:"slider",userEvents:["onthumbmove","onmovedone"],minValue:0,maxValue:100,increment:1,vertical:!1,showScale:!1,moveBack:!1,animationDuration:.5,value:0,animationMathOption:"round",tooltipShow:!1,tooltipDisplay:!1,tooltipTime:.1,tooltipClass:"",tooltipAlways:!1,tooltipFormatter:null,bothSideValue:6,setBackground:!1,changeDirection:!1,title:""},u.prototype.initialize=function(t){try{if(this.thumbList=[],this.areaValue=[],this.positionValue=[],this.bothSideValue=this.options.bothSideValue,this.options.value||(this.options.value=0),1==this.options.vertical?(this.areaValue[0]="Height",this.positionValue[0]="Top",this.areaValue[1]="Width",this.positionValue[1]="Left"):(this.areaValue[0]="Width",this.positionValue[0]="Left",this.areaValue[1]="Height",this.positionValue[1]="Top"),this.options.value&&(parseInt(this.options.value,10)>this.options.maxValue?this.options.value=this.options.maxValue+"":parseInt(this.options.value,10)<this.options.minValue&&(this.options.value=this.options.minValue+"")),1==this.options.tooltipDisplay&&(this.options.tooltipShow=this.options.tooltipDisplay),this._setSetting=!1,t){var e=WebSquare.Elem.api.getElementsByTagName(t,"w2:thumb");if(0==e.length){var i={id:"thumb1",index:0,parentId:this.id,value:this.options.value};this.thumbList[0]=new WebSquare.uiplugin.thumb(i)}else for(var s=0;s<e.length;s++){(i=WebSquare.WebSquareparser.parseAttribute(e[s])).parentId=this.id,i.index=s,this.thumbList[s]=new WebSquare.uiplugin.thumb(i)}}else{i={id:"thumb1",index:0,parentId:this.id,value:this.options.value};this.thumbList[0]=new WebSquare.uiplugin.thumb(i)}}catch(t){n.w.printStackTrace(t,null,this)}},u.prototype.toHTML=function(){try{var t=[],e="";this.scaleCnt=0;var i=""==this.options.style?"":"style='"+this.options.style+"'",s=""==this.options.tabIndex?"":"tabIndex='"+this.options.tabIndex+"'",o=""==this.options.minValue?"":"aria-valuemin='"+this.options.minValue+"'",a=""==this.options.maxValue?"":"aria-valuemax='"+this.options.maxValue+"'",h=""==this.options.value?"":"aria-valuenow='"+this.options.value+"'",r=""==this.options.value?"":"aria-labele='"+this.options.value+"'";if(this.options.maxValue>=this.options.minValue&&this.options.maxValue>=this.options.increment&&(this.scaleCnt=(this.options.maxValue-this.options.minValue)/this.options.increment-1),e=1==this.options.vertical?"w2slider_vertical":"w2slider_horizon",t.push("<div id='"+this.id+"' "+i+" class='w2slider "+e+" "+this.options.className+"' "),t.push("role='slider' "+o+" "+a+" "+h+" "+r+" "+s+">"),t.push("<div id='"+this.id+"_startLayer' class='w2slider_startLayer'>"),t.push("</div>"),t.push("<div id='"+this.id+"_centerLayer' class='w2slider_centerLayer'>"),t.push("</div>"),t.push("<div id='"+this.id+"_endLayer' class='w2slider_endLayer'>"),t.push("</div>"),t.push("<div id='"+this.id+"_bgLayer' class='w2slider_bgLayer'>"),t.push("</div>"),this.options.showScale){t.push("<div id='"+this.id+"_scale_start_0' class='w2slider_scale_L'></div>"),t.push("<div id='"+this.id+"_scale_start_1' class='w2slider_scale_L'></div>");for(var u=0;u<this.scaleCnt;u++)t.push("<div id='"+this.id+"_scale_0_"+u+"' class='w2slider_scale'></div>"),t.push("<div id='"+this.id+"_scale_1_"+u+"' class='w2slider_scale'></div>");t.push("<div id='"+this.id+"_scale_end_0' class='w2slider_scale_L'></div>"),t.push("<div id='"+this.id+"_scale_end_1' class='w2slider_scale_L'></div>")}return t.push("</div>"),t.join("")}catch(t){n.w.printStackTrace(t,null,this)}},u.prototype.setAction=function(){try{if(this.drawTumb(),this.modelControl.isBinded()){var t=this.modelControl.getData();this.setThumbValueNM(t,0)
}else this.setThumbValueNM(this.options.value,0);if(h.D.isTouchDevice()&&(this.event.addListener(this.render,"ontouchstart",this.event.bindAsEventListener(this,this.handleTouchStart)),this.event.addListener(this.render,"ontouchmove",this.event.bindAsEventListener(this,this.handleTouchMove)),this.event.addListener(this.render,"ontouchend",this.event.bindAsEventListener(this,this.handleTouchEnd))),this.event.addListener(this.render,"onmousedown",this.event.bindAsEventListener(this,this.handleTouchStart)),this.event.addListener(this.render,"onkeydown",this.event.bindAsEventListener(this,this.handleKeydown)),this.event.addListener(document.documentElement,"onmousemove",this.event.bindAsEventListener(this,this.handleTouchMove)),this.event.addListener(document.documentElement,"onmouseup",this.event.bindAsEventListener(this,this.handleTouchEnd)),this.event.addListener(this.render,"onselectstart",this.event.bindAsEventListener(this,(function(t){a.B.preventDefault(t)}))),this.scope_obj&&this.scope_obj.uuid!==(WebSquare.strictModeFrame?WebSquare.strictModeFrame.uuid:"")){var e=this;this.scope_obj.bind("onsetsize",(function(){!1===e._setSetting&&(e.drawTumb(),e._setSetting=!0)}))}}catch(t){n.w.printStackTrace(t,null,this)}},u.prototype.drawTumb=function(){try{this.dom.start=document.getElementById(this.id+"_startLayer"),this.dom.center=document.getElementById(this.id+"_centerLayer"),this.dom.end=document.getElementById(this.id+"_endLayer"),this.dom.bg=document.getElementById(this.id+"_bgLayer"),this.dom.start.style[this.areaValue[1].toLowerCase()]=this.render["offset"+this.areaValue[1]]+"px",this.dom.center.style[this.areaValue[1].toLowerCase()]=this.render["offset"+this.areaValue[1]]+"px",this.dom.end.style[this.areaValue[1].toLowerCase()]=this.render["offset"+this.areaValue[1]]+"px",this.dom.bg.style[this.areaValue[1].toLowerCase()]=this.render["offset"+this.areaValue[1]]+"px",0!=this.render["offset"+this.areaValue[0]]&&0!=this.render["offset"+this.areaValue[1]]||(this._chkRedraw=!0),this.bothSideValue=this.dom.start["offset"+this.areaValue[0]],this.dom.center.style[this.positionValue[0].toLowerCase()]=this.bothSideValue-2+"px",this.dom.center.style[this.areaValue[0].toLowerCase()]=this.render["offset"+this.areaValue[0]]-2*this.bothSideValue+4+"px",this.dom.bg.style[this.positionValue[0].toLowerCase()]=this.bothSideValue-2+"px";for(var t=0;t<this.thumbList.length;t++)this.render.appendChild(this.thumbList[t].getThumbRender()),this.thumbList[t].inputRender.setAttribute("title",this.options.title),this.render.appendChild(this.thumbList[t].inputRender),this.event.addListener(this.thumbList[t].inputRender,"onblur",this.event.bindAsEventListener(this,this.handleInputBlur));this.thumbArea=parseInt(this.thumbList[0].render["offset"+this.areaValue[0]],10),this.thumbPosition=(this.render["offset"+this.areaValue[1]]-this.thumbList[0].render["offset"+this.areaValue[1]])/2;for(t=0;t<this.thumbList.length;t++)this.thumbList[t].render.style[this.positionValue[1].toLowerCase()]=this.thumbPosition+"px",this.thumbList[t].render.setAttribute("aria-valuemin",this.options.minValue),this.thumbList[t].render.setAttribute("aria-valuemax",this.options.maxValue),this.thumbList[t].render.setAttribute("aria-valuenow",this.options.value),this.thumbList[t].render.setAttribute("role","slider"),this.thumbList[t].render.setAttribute("aria-label","입력 유형 범위"),this.thumbList[t].render.setAttribute("tabIndex",0);if(this.minPosition=WebSquare.style["getAbsolute"+this.positionValue[0]](this.render),this.maxPosition=parseInt(this.render["offset"+this.areaValue[0]],10)-this.thumbArea+1,this.bgStValue=this.options.minValue,this.options.showScale){var e=document.getElementById(this.id+"_scale_start_0"),i=document.getElementById(this.id+"_scale_start_1");e.style[this.positionValue[0].toLowerCase()]=this.thumbArea/2+"px",i.style[this.positionValue[0].toLowerCase()]=this.thumbArea/2+"px",
e.style[this.positionValue[1].toLowerCase()]=this.thumbPosition-e["offset"+this.areaValue[1]]-3+"px",i.style[this.positionValue[1].toLowerCase()]=this.thumbPosition+this.thumbList[0].render["offset"+this.areaValue[1]]+3+"px";var s=document.getElementById(this.id+"_scale_end_0"),o=document.getElementById(this.id+"_scale_end_1");s.style[this.positionValue[0].toLowerCase()]=this.render["offset"+this.areaValue[0]]-this.thumbArea/2+"px",o.style[this.positionValue[0].toLowerCase()]=this.render["offset"+this.areaValue[0]]-this.thumbArea/2+"px",s.style[this.positionValue[1].toLowerCase()]=this.thumbPosition-e["offset"+this.areaValue[1]]-3+"px",o.style[this.positionValue[1].toLowerCase()]=this.thumbPosition+this.thumbList[0].render["offset"+this.areaValue[1]]+3+"px";var a=this.options.increment/(this.options.maxValue-this.options.minValue)*100,h=this.render["offset"+this.areaValue[0]]-this.thumbArea;for(t=0;t<this.scaleCnt;t++){var r=document.getElementById(this.id+"_scale_0_"+t),u=document.getElementById(this.id+"_scale_1_"+t);r.style[this.positionValue[0].toLowerCase()]=h/100*a*(t+1)+this.thumbArea/2+"px",u.style[this.positionValue[0].toLowerCase()]=h/100*a*(t+1)+this.thumbArea/2+"px",r.style[this.positionValue[1].toLowerCase()]=this.thumbPosition-r["offset"+this.areaValue[1]]-3+"px",u.style[this.positionValue[1].toLowerCase()]=this.thumbPosition+this.thumbList[0].render["offset"+this.areaValue[1]]+3+"px"}}this.initThumbPosition()}catch(t){n.w.printStackTrace(t,null,this)}},u.prototype.refreshAdaptive=function(){try{1==this._chkRedraw&&(this.drawTumb(),this._chkRedraw=!1)}catch(t){n.w.printStackTrace(t,null,this)}},u.prototype.refresh=function(){try{if(this.modelControl.isBinded()){var t=this.modelControl.getData();this.setThumbValueNM(t,0),a.B.fireEvent(this,"onthumbmove",this.thumbList[0].value,this.thumbList[0].id)}}catch(t){n.w.printStackTrace(t,null,this)}},u.prototype.scaleRedraw=function(t,e){try{t||0===e||(t=this.options.maxValue),e||0===e||(e=this.options.minValue),this.currentScaleCnt=(this.options.maxValue-this.options.minValue)/this.options.increment-1,this.targetScaleCnt=(t-e)/this.options.increment-1;for(var i=this.options.increment/(t-e)*100,s=this.render["offset"+this.areaValue[0]]-this.thumbArea,o=document.getElementById(this.id),a=document.getElementById(this.id+"_scale_end_0"),r=Math.max(this.targetScaleCnt,this.currentScaleCnt),u=0;u<r;u++){if(this.targetScaleCnt>this.currentScaleCnt&&u>=this.currentScaleCnt){var l=document.createElement("div");l.setAttribute("id",this.id+"_scale_0_"+u),l.setAttribute("class","w2slider_scale");var p=document.createElement("div");p.setAttribute("id",this.id+"_scale_1_"+u),p.setAttribute("class","w2slider_scale"),o.insertBefore(l,a),o.insertBefore(p,a)}else if(this.targetScaleCnt<this.currentScaleCnt&&u>=this.targetScaleCnt){var d=document.getElementById(this.id+"_scale_0_"+u),m=document.getElementById(this.id+"_scale_1_"+u);h.D.isIEAllVersion()?(d.parentNode.removeChild(d),m.parentNode.removeChild(m)):(d.remove(),m.remove());continue}var c=document.getElementById(this.id+"_scale_0_"+u),b=document.getElementById(this.id+"_scale_1_"+u);c.style[this.positionValue[0].toLowerCase()]=s/100*i*(u+1)+this.thumbArea/2+"px",b.style[this.positionValue[0].toLowerCase()]=s/100*i*(u+1)+this.thumbArea/2+"px",c.style[this.positionValue[1].toLowerCase()]=this.thumbPosition-c["offset"+this.areaValue[1]]-3+"px",b.style[this.positionValue[1].toLowerCase()]=this.thumbPosition+this.thumbList[0].render["offset"+this.areaValue[1]]+3+"px"}}catch(t){n.w.printStackTrace(t,null,this)}},u.prototype.initThumbPosition=function(){try{for(var t=0;t<this.thumbList.length;t++)this.thumbList[t].render||(this.thumbList[t].render=document.getElementById(this.id+"_"+this.thumbList[t].id)),this.thumbList[t].render.style[this.positionValue[0].toLowerCase()]=this.valueToPosition(this.thumbList[t].value)+"px",this.setBackGroundImage(this.thumbList[t].value)}catch(t){n.w.printStackTrace(t,null,this)}},
u.prototype.getCurrentThumbElement=function(){try{return this.thumbList[this.movedIndex].render}catch(t){n.w.printStackTrace(t,null,this)}},u.prototype.getCurrentThumb=function(){try{return this.thumbList[this.movedIndex]}catch(t){n.w.printStackTrace(t,null,this)}},u.prototype.getThumbValue=function(t){return t||(t=0),parseFloat(this.thumbList[t].value,10)},u.prototype.getValue=function(){return this.getThumbValue(0)},u.prototype.setThumbValue=function(t,e){try{e||(e=0),this.moveThumb(e,t)}catch(t){n.w.printStackTrace(t,null,this)}},u.prototype.setValue=function(t){this.setThumbValue(t,0)},u.prototype.setThumbValueNM=function(t,e){this.thumbList[e].value=t,this.thumbList[e].inputRender.value=t,1!=this.options.moveBack&&(this.thumbList[e].render.style[this.positionValue[0].toLowerCase()]=this.valueToPosition(t)+"px"),this.setBackGroundImage(t),this.thumbList[e].render.setAttribute("aria-valuenow",t)},u.prototype.positionToValue=function(t){try{var e=(this.options.maxValue-this.options.minValue)*(t-this.minPosition)/this.maxPosition+this.options.minValue;return e=this.options.changeDirection?this.options.maxValue+this.options.minValue-e:e}catch(t){n.w.printStackTrace(t,null,this)}},u.prototype.valueToPosition=function(t){try{if(this.options.maxValue-this.options.minValue==0)return 0===this.options.minValue?0:this.maxPosition;t>this.options.maxValue?t=this.options.maxValue:t<this.options.minValue&&(t=this.options.minValue);var e=(t-this.options.minValue)*this.maxPosition/(this.options.maxValue-this.options.minValue);return e=this.options.changeDirection?this.maxPosition-e:e,e=Math.ceil(e)}catch(t){n.w.printStackTrace(t,null,this)}},u.prototype.setBackGroundImage=function(t){var e=this.valueToPosition(t),i=!1;e===this.maxPosition&&(i=!0),1==this.options.setBackground&&(1==this.options.changeDirection?(this.dom.bg.style[this.positionValue[0].toLowerCase()]=e+"px",this.bgStValue<t||i?this.addClass(this.dom.end,"w2slider_endLayerBg"):this.removeClass(this.dom.end,"w2slider_endLayerBg"),this.dom.bg.style[this.areaValue[0].toLowerCase()]=parseInt(this.render["offset"+this.areaValue[0]],10)-e-this.bothSideValue+2+"px"):(this.bgStValue<t||i?this.addClass(this.dom.start,"w2slider_startLayerBg"):this.removeClass(this.dom.start,"w2slider_startLayerBg"),this.dom.bg.style[this.areaValue[0].toLowerCase()]=e+"px"))},u.prototype.moveThumb=function(t,e){try{var i="";if(e<=this.options.minValue?e=this.options.minValue:e>=this.options.maxValue&&(e=this.options.maxValue),0==this.options.moveBack){var s={};s=e>this.thumbList[t].value?Math.floor:Math.ceil,e===this.options.maxValue?i=e:(i=s((e-=this.options.minValue)/this.options.increment)*this.options.increment,(i+=this.options.minValue)>this.options.maxValue&&(i=this.options.maxValue))}else this.thumbList[t].render.style[this.positionValue[0].toLowerCase()]=this.valueToPosition(e)+"px",this.lastThumbPosition=this.valueToPosition(e),i=Math[this.options.animationMathOption](e/this.options.increment)*this.options.increment;return i!=this.thumbList[t].value&&(this.modelControl.setData(i),this.setThumbValueNM(i,t),a.B.fireEvent(this,"onthumbmove",this.thumbList[t].value,this.thumbList[t].id),!0)}catch(t){n.w.printStackTrace(t,null,this)}},u.prototype.slideAnimation=function(t,e,i){try{var s=1e3*this.options.animationDuration,a=(new Date).getTime()-(i-s),h=[.25,.1,.25,1],r=function(t,e,i,s,o,n){var a,h,r=0,u=0,l=0,p=0,d=0,m=0;function c(t){return((r*t+u)*t+l)*t}function b(t){return(3*r*t+2*u)*t+l}return r=1-(l=3*e)-(u=3*(s-e)-l),p=1-(m=3*i)-(d=3*(o-i)-m),a=t,h=function(t){return 1/(200*t)}(n),function(t){return((p*t+d)*t+m)*t}(function(t,e){var i,s,o,n,a,h;function r(t){return t>=0?t:0-t}for(o=t,h=0;h<8;h++){if(r(n=c(o)-t)<e)return o;if(r(a=b(o))<1e-6)break;o-=n/a}if(s=1,(o=t)<(i=0))return i;if(o>s)return s;for(;i<s;){if(r((n=c(o))-t)<e)return o;t>n?i=o:s=o,o=.5*(s-i)+i}return o}(a,h))}(a/s,(h=[.25,.1,.25,1])[0],h[1],h[2],h[3],s/1e3)
;if(this.thumbList[t].render.style[this.positionValue[0].toLowerCase()]=this.lastThumbPosition+(this.valueToPosition(e)-this.lastThumbPosition)*r+"px",a>=s)return void this.stopSlideAnimation();o.v.setTimer(this.slideAnimation,{key:this.id+"_slider_slide",caller:this,delay:10,args:[t,e,i]})}catch(t){n.w.printStackTrace(t,null,this)}},u.prototype.stopSlideAnimation=function(){try{o.v.clearTimer(this.id+"_slider_slide")}catch(t){n.w.printStackTrace(t,null,this)}},u.prototype.getThumbMaxValue=function(t){return""},u.prototype.getThumbMinValue=function(t){return""},u.prototype.getPosition=function(t){try{var e=WebSquare.style.getScale();return((1==this.options.vertical?a.B.getMouseY(t):a.B.getMouseX(t))-this.thumbArea/2)/e}catch(t){n.w.printStackTrace(t,null,this)}},u.prototype.getNearThumbIndex=function(t){try{for(var e=0,i=this.options.maxValue-this.options.minValue+1,s=0;s<this.thumbList.length;s++)Math.abs(this.thumbList[s].value-t)<i&&(e=s,i=Math.abs(this.thumbList[s].value-t));return e}catch(t){n.w.printStackTrace(t,null,this)}},u.prototype.setRef=function(t){try{this.modelControl.isBinded()||(this.modelControl.useRef=!0),this.options.ref=t,this.modelControl.setRef(t),this.refresh()}catch(t){n.w.printStackTrace(t)}},u.prototype.unbindRef=function(){try{this.modelControl.isBinded()&&(this.options.ref="",this.modelControl.unbindRef(),this.refresh())}catch(t){n.w.printStackTrace(t)}},u.prototype.handleTouchStart=function(t){try{for(var e=h.D.getDataPrefix("thumbIndex"),i=this.event.getTargetIterator(t,this.render);i.next()&&!i.match("w2thumb_input");){if(i.match(null,this.id)){var s=this.getPosition(t),o=this.positionToValue(s);this.movedIndex=this.getNearThumbIndex(o);var r=this.thumbList[this.movedIndex];this.moveStart=!0,this.moveThumb(this.movedIndex,o),this.addClass(r.render,"w2thumb_over"),this.showTooltip(this.movedIndex,r.value),a.B.stopEvent(t),this.render.focus();break}if(i.match("w2thumb")){this.minPosition=WebSquare.style["getAbsolute"+this.positionValue[0]](this.render),this.maxPosition=parseInt(this.render["offset"+this.areaValue[0]],10)-this.thumbArea+1,this.movedIndex=i.getElement().getAttribute(e);r=this.thumbList[this.movedIndex];this.addClass(r.render,"w2thumb_over"),a.B.stopEvent(t),this.showTooltip(this.movedIndex,r.value),this.moveStart=!0,this.render.focus();break}}i=null}catch(t){n.w.printStackTrace(t,null,this)}},u.prototype.handleTouchMove=function(t){try{if(1==this.moveStart){var e=this.getCurrentThumb(),i=this.getPosition(t),s=this.positionToValue(i);1==this.moveThumb(e.index,s)&&(this.addClass(e.render,"w2thumb_over"),this.setTooltipLabel(e.value),this.setTooltipPosition(e.index)),a.B.stopEvent(t)}}catch(t){n.w.printStackTrace(t,null,this)}},u.prototype.handleTouchEnd=function(t){try{if(1==this.moveStart){if(1==this.options.moveBack){var e=(new Date).getTime()+this.options.animationDuration;this.slideAnimation(this.movedIndex,this.thumbList[this.movedIndex].value,e)}this.removeClass(this.thumbList[this.movedIndex].render,"w2thumb_over"),this.hideTooltip(),this.moveStart=!1,a.B.fireEvent(this,"onmovedone",this.thumbList[this.movedIndex].value,this.thumbList[this.movedIndex].id),a.B.stopEvent(t)}}catch(t){n.w.printStackTrace(t,null,this)}},u.prototype.handleInputBlur=function(t){try{var e=h.D.getDataPrefix("thumbIndex"),i=t.srcElement,s=i.getAttribute(e),o=parseFloat(i.value)||0;if(o<this.options.minValue||o>this.options.maxValue){var a=WebSquare.language.getMessage("Slider_warning1",this.options.minValue,this.options.maxValue)||this.options.minValue+"에서 "+this.options.maxValue+" 사이의 값을 입력해야 합니다.";alert(a),i.focus()}else if((o-this.options.minValue)%this.options.increment>0){var r=WebSquare.language.getMessage("Slider_warning2",this.options.minValue,this.options.maxValue,this.options.increment)||this.options.minValue+"에서 "+this.options.maxValue+"까지의 값들 중 "+this.options.increment+"씩 증가한 값을 입력해야 합니다.";alert(r),i.focus()}else this.setThumbValue(i.value,s)}catch(t){n.w.printStackTrace(t,null,this)}},
u.prototype.handleKeydown=function(t){try{var e=this.movedIndex||0,i=this.getThumbValue(e);if("input"==t.srcElement.nodeName.toLowerCase())return;switch(t.keyCode){case 37:0==this.options.vertical?0==this.options.changeDirection?this.setThumbValue(i-this.options.increment,e):this.setThumbValue(i+this.options.increment,e):this.setThumbValue(i-this.options.increment,e),a.B.stopEvent(t);break;case 39:0==this.options.vertical&&1==this.options.changeDirection?this.setThumbValue(i-this.options.increment,e):this.setThumbValue(i+this.options.increment,e),a.B.stopEvent(t);break;case 38:1==this.options.vertical&&0==this.options.changeDirection?this.setThumbValue(i-this.options.increment,e):this.setThumbValue(i+this.options.increment,e),a.B.stopEvent(t);break;case 40:1==this.options.vertical?1==this.options.changeDirection?this.setThumbValue(i-this.options.increment,e):this.setThumbValue(i+this.options.increment,e):this.setThumbValue(i-this.options.increment,e),a.B.stopEvent(t);break;case 33:a.B.preventDefault(t),0==this.options.vertical&&1==this.options.changeDirection?this.setThumbValue(i-10,e):this.setThumbValue(i+10,e);break;case 34:a.B.preventDefault(t),0==this.options.vertical&&1==this.options.changeDirection?this.setThumbValue(i+10,e):this.setThumbValue(i-10,e);break;case 35:a.B.preventDefault(t),0==this.options.vertical&&1==this.options.changeDirection?this.setThumbValue(this.options.minValue,e):this.setThumbValue(this.options.maxValue,e);break;case 36:a.B.preventDefault(t),0==this.options.vertical&&1==this.options.changeDirection?this.setThumbValue(this.options.maxValue,e):this.setThumbValue(this.options.minValue,e)}}catch(t){n.w.printStackTrace(t,null,this)}},u.prototype.showTooltip=function(t,e){try{if(1==this.options.tooltipShow){null!=this.timeShowTooltip&&(clearTimeout(this.timeShowTooltip),this.timeShowTooltip=null),null!=this.timeHideTooltip&&(clearTimeout(this.timeHideTooltip),this.timeHideTooltip=null);var i=this;this.timeShowTooltip=setTimeout(this.event.bindAsEventListener(this,(function(){try{var s=o.v.getConfiguration("/WebSquare/tooltipShowHideHandler/@value");if(s){var a=h.D.getGlobalFunction(s,i.scope_id),r=!0;if("function"==typeof a&&(r=a(i)),!r)return}}catch(t){n.w.printStackTrace(t)}this.tooltip||(this.tooltip=new WebSquare.uiplugin.group(this.id+"_tooltip",{className:"w2slider_tooltip "+this.options.tooltipClass}),this.tooltip.writeTo(WebSquare.getBody(),null,this.parentFrame),this.tooltip.hasClass("w2group")&&this.tooltip.removeClass("w2group"),this.tooltip.activate()),1==this.options.vertical?this.tooltip.setStyle("left",WebSquare.style.getAbsoluteLeft(this.render)+this.thumbPosition+25+"px"):this.tooltip.setStyle("top",WebSquare.style.getAbsoluteTop(this.render)+this.thumbPosition-25+"px"),this.tooltip.setStyle("display","block"),WebSquare.style.adjustZIndex(this.uuid,this.tooltip.uuid,"toolTip"),this.setTooltipLabel(e),this.setTooltipPosition(t)})),1e3*this.options.tooltipTime)}}catch(t){n.w.printStackTrace(t,null,this)}},u.prototype.setTooltipPosition=function(t){if(this.tooltip){var e=this.valueToPosition(this.thumbList[t].value);e=this.minPosition+e-this.tooltip.render["offset"+this.areaValue[0]]/2+this.thumbArea/2,this.tooltip.setStyle(this.positionValue[0].toLowerCase(),e+"px")}},u.prototype.setSize=function(t,e){try{r.s.prototype.setSize.call(this,t,e),this.drawTumb()}catch(t){n.w.printStackTrace(t)}},u.prototype.setTooltipLabel=function(t){if(this.tooltip){if(this.options.tooltipFormatter)try{var e=h.D.getGlobalFunction(this.options.tooltipFormatter,this.scope_id);"function"==typeof e&&(t=e.call(this,t))}catch(t){n.w.printStackTrace(t,null,this)}this.tooltip.render.innerHTML=t}},u.prototype.hideTooltip=function(){try{this.timeHideTooltip=setTimeout(this.event.bindAsEventListener(this,(function(){this.tooltip&&this.tooltip.setStyle("display","none")})),1e3*this.options.tooltipTime)}catch(t){n.w.printStackTrace(t,null,this)}},u.prototype.setMaxValue=function(t){try{
t<this.options.minValue&&(t=this.options.maxValue),this.options.showScale&&this.scaleRedraw(t);var e=this.getThumbValue(0)/this.options.maxValue,i=Math[this.options.animationMathOption](t*e);this.render.setAttribute("aria-valuemax",t),this.options.maxValue=parseInt(t),this.setThumbValue(i,0)}catch(t){n.w.printStackTrace(t,null,this)}},u.prototype.setMinValue=function(t){try{t>this.options.maxValue&&(t=this.options.minValue),this.options.showScale&&this.scaleRedraw(this.options.maxValue,t);var e=(this.getThumbValue(0)-this.options.minValue)/(this.options.maxValue-this.options.minValue),i=Math[this.options.animationMathOption]((this.options.maxValue-t)*e)+t;this.render.setAttribute("aria-valuemin",t),this.options.minValue=parseInt(t),this.setThumbValue(i,0)}catch(t){n.w.printStackTrace(t,null,this)}};var l=function(t){this.id=t.id||"thumb",this.value=t.value||0,this.index=t.index,this.options=t};l.prototype.getThumbRender=function(){if(!this.render){var t=h.D.getDataPrefix("thumbIndex");this.render=document.createElement("div"),this.render.setAttribute("id",this.options.parentId+"_"+this.id),this.render.setAttribute("className","w2thumb"),this.render.setAttribute("class","w2thumb"),this.render.setAttribute(t,this.index),this.inputRender=document.createElement("input"),this.inputRender.setAttribute("className","w2thumb_input"),this.inputRender.setAttribute("class","w2thumb_input"),this.inputRender.setAttribute("tabIndex","-1")}return this.render}}}]);