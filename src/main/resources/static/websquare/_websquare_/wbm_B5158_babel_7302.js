"use strict";(self.webpackChunkwebpack_test=self.webpackChunkwebpack_test||[]).push([[7302],{7302:function(t,e,i){i.r(e),i.d(e,{upload:function(){return p}});var s=i(9122),n=i(7827),a=i(1160),o=i(5841),r=i(8754),h=i(5316),p=function(t,e,i){h.s.call(this,t,e,i)};s.x.extend(p.prototype,h.s.prototype),p.prototype.defaultOptions={useConfig:!0,userEvents:["ondone","onInputValueChange"],pluginType:"uiplugin.upload",pluginName:"upload",className:"",imageStyle:"",inputStyle:"",imageClass:"",inputClass:"",type:"",action:"",imagewidth:"",imageheight:"",empty:6,subDir:"",subSize:"",title:"",accept:"",targetFrame:"body",useXHR:!1,clickOpenFileDialog:!1,msaName:""},p.prototype.initialize=function(t){try{var e=n.v.getConfiguration("/WebSquare/upload/type/@value");""==this.options.type&&""!=e?this.options.type=e:""==this.options.type&&(this.options.type="image"),this.type=this.options.type,this.style=this.options.style,this.className=this.options.className,this.imageStyle=this.options.imageStyle,this.imageClassName=this.options.imageClass,this.inputStyle=this.options.inputStyle,this.inputClassName=this.options.inputClass,this.imagewidth=this.options.imagewidth,this.imageheight=this.options.imageheight,this.empty=this.options.empty,this.inputClassName=this.options.inputClass,this._defaultAction="upload.wq?callbackFunction="+this.id+".callback",this.action=n.v.getServletURL(this,this.options.msaName,this._defaultAction,this.options.action),t&&(this.xmlEvents=WebSquare.Parser.parseEvent(t)),this.disabled=this.options.disabled,this._targetFrameId=""}catch(t){a.w.printStackTrace(t,null,this)}},p.prototype.toHTML=function(){try{var t=[],e=""==this.options.title?"":"title='"+this.options.title.wq_replaceAll("'","&#39;")+"'",i=this.options.style,s=this.options.tabIndex?"tabIndex='"+this.options.tabIndex+"'":"";""!=i&&(i.indexOf("position")<0?i="position:relative;"+i:i.indexOf("position:static")>0&&(i=i.replace("position:static","position:relative"))),i=""==i?"":"style='"+i+"'";var n=""==this.action?"":"action='"+this.action+"'",o=""==this.inputStyle?"":"style='"+this.inputStyle+"'",r="style='"+(""==this.imagewidth?"":"width:"+this.imagewidth+"px;")+(""==this.imageheight?"":"height:"+this.imagewidth+"px;")+this.imageStyle+"'",h=""==this.options.accept?"":"accept='"+this.options.accept+"'";return t.push("<div id='"+this.id+"' "+i+" class='w2upload "+this.options.className+"' "+s+">"),t.push("<form id='"+this.id+"_form' "+n+" enctype='multipart/form-data' name='form1_upload1' method='post' target='__targetFrame__"+this.id+"'><fieldset>"),"image"==this.options.type?(t.push("<input  name='tempFlie' readonly='readonly' id='"+this.id+"_inputFile' class='w2upload_input "+this.options.inputClass+"' "+o+" type='text'/>"),t.push("<span id='"+this.id+"_span' class='w2upload_image "+this.options.imageClass+"' "+r+">"),t.push("<input  class='w2upload_fakeInput' style='margin: 0pt; padding: 0pt; width: "+this.imagewidth+"px; height:"+this.imageheight+"px; opacity: 0.01; filter : alpha(opacity=1);' name='upload' id='"+this.id+"_fakeinput' type='file' "+e+h+"/>"),t.push("</span>")):t.push("<INPUT  id='"+this.id+"_inputFile' name='upload' type='file' _objId='2' class='w2upload_input_type' "+o+" "+e+h+"/>"),t.push("</fieldset><input type='submit' class='w2upload_submit'/></form>"),t.push("</div>"),t.join("")}catch(t){a.w.printStackTrace(t,null,this)}},p.prototype.setAction=function(){try{if(this.dom.input=document.getElementById(this.id+"_inputFile"),this.dom.span=document.getElementById(this.id+"_span"),this.dom.form=document.getElementById(this.id+"_form"),this.dom.fakeinput=document.getElementById(this.id+"_fakeinput"),this.styleObj={paddingTop:parseInt(r.D.getStyleProperty(this.dom.input,"padding-top"))||0,paddingBottom:parseInt(r.D.getStyleProperty(this.dom.input,"padding-bottom"))||0,paddingLeft:parseInt(r.D.getStyleProperty(this.dom.input,"padding-left"))||0,paddingRight:parseInt(r.D.getStyleProperty(this.dom.input,"padding-right"))||0,
borderTopWidth:parseInt(r.D.getStyleProperty(this.dom.input,"border-top-width"))||0,borderBottomWidth:parseInt(r.D.getStyleProperty(this.dom.input,"border-bottom-width"))||0,borderLeftWidth:parseInt(r.D.getStyleProperty(this.dom.input,"border-left-width"))||0,borderRightWidth:parseInt(r.D.getStyleProperty(this.dom.input,"border-right-width"))||0,height:parseInt(r.D.getStyleProperty(this.dom.input,"height"))||0},"image"==this.options.type){var t=this.dom.span.offsetWidth||parseInt(r.D.getStyleProperty(this.dom.span,"width"))+WebSquare.style.getSize(this.dom.span,"outerMarginWidth");if(!this.dom.input.style.width&&this.render.style.width){var e={marginLeft:parseInt(r.D.getStyleProperty(this.dom.span,"margin-left"))||0,marginRight:parseInt(r.D.getStyleProperty(this.dom.span,"margin-right"))||0},i=parseInt(this.render.style.width)-parseInt(t)-(e.marginLeft+e.marginRight)-(this.styleObj.borderLeftWidth+this.styleObj.borderRightWidth+this.styleObj.paddingLeft+this.styleObj.paddingRight);this.dom.input.style.width=i-this.empty+6+"px"}if(!this.dom.input.style.height&&0==this.styleObj.height){var s=parseInt(this.render.style.height)-(this.styleObj.borderBottomWidth+this.styleObj.borderTopWidth+this.styleObj.paddingBottom+this.styleObj.paddingTop);this.dom.input.style.height=s+"px"}this.dom.fakeinput.style.width=0==t?t+100+"px":t+"px"}var n=document.createElement("div"),h=this.id+"__targetFrame";n.style.width="0",n.style.height="0",n.style.visibility="hidden",n.setAttribute("id",h),this._targetFrameId=h,"body"==this.options.targetFrame?document.body.appendChild(n):"self"==this.options.targetFrame&&this.render.appendChild(n);var p=WebSquare.net.getSSLBlankPage(),l=WebSquare.language.getMessage("Upload_msg1")||"파일 업로드를 위한 임시 프레임";if(n.innerHTML="<iframe frameborder='0' name='__targetFrame__"+this.id+"' scrolling='no' style='width:0; height:0' "+p+" title='"+l+"'></iframe>","image"==this.options.type&&null!=this.dom.fakeinput){var d=this;this.dom.fakeinput.onchange=function(){d.dom.input.value=d.dom.fakeinput.value,o.B.fireEvent(d,"onInputValueChange",d.dom.input.value)},this.event.addListener(this.render,"onmouseover",this.event.bindAsEventListener(this,this.handleMouseOverEvent)),this.event.addListener(this.render,"onmouseout",this.event.bindAsEventListener(this,this.handleMouseOutEvent))}else{d=this;this.dom.input.onchange=function(){o.B.fireEvent(d,"onInputValueChange",d.dom.input.value)}}this.options.subDir&&this.addParam("subDir",this.options.subDir),this.options.subSize&&this.addParam("subSize",this.options.subSize),this.options.clickOpenFileDialog&&this.event.addListener(this.render,"onclick",this.event.bindAsEventListener(this,this.handleClickEvent)),this.event.addListener(this.dom.form,"onsubmit",this.event.bindAsEventListener(this,this.onSubmitForm))}catch(t){a.w.printStackTrace(t,null,this)}},p.prototype.onSubmitForm=function(t){try{o.B.stopEvent(t)}catch(t){a.w.printStackTrace(t,null,this)}},p.prototype.onInputValueChange=function(t){try{"image"==this.options.type&&null!=this.dom.fakeinput&&(this.dom.input.value=this.dom.fakeinput.value),o.B.fireEvent(this,"onInputValueChange",this.dom.input.value)}catch(t){a.w.printStackTrace(t,null,this)}},p.prototype.handleMouseOverEvent=function(t){try{o.B.stopEvent(t);for(var e=this.event.getTargetIterator(t,this.render);e.next();)if(e.match("w2upload_image")){this.addClass(this.dom.span,"w2upload_image_over");break}e=null}catch(t){a.w.printStackTrace(t,null,this)}},p.prototype.handleMouseOutEvent=function(t){try{o.B.stopEvent(t);for(var e=this.event.getTargetIterator(t,this.render);e.next();)if(e.match("w2upload_image")){this.removeClass(this.dom.span,"w2upload_image_over");break}e=null}catch(t){a.w.printStackTrace(t,null,this)}},p.prototype.handleClickEvent=function(t){try{for(var e=this.event.getTargetIterator(t);e.next();)if(e.match("w2upload_input")){this.dom.fakeinput&&(this.setEventPause("onclick",!0),this.dom.fakeinput.click(),this.setEventPause("onclick",!1));break}e=null
}catch(t){WebSquare.exception.printStackTrace(t,null,this)}},p.prototype.openFileDialog=function(){try{this.dom.fakeinput&&this.dom.fakeinput.click()}catch(t){WebSquare.exception.printStackTrace(t,null,this)}},p.prototype.setCallback=function(t){try{"function"==typeof t&&(this.callbackFunction=t)}catch(t){a.w.printStackTrace(t,null,this)}},p.prototype.isEmpty=function(){try{var t=this.getValue();return void 0===t||""==t}catch(t){a.w.printStackTrace(t,null,this)}},p.prototype.getByte=function(){try{var t=WebSquare.language.getMessage("Upload_warning1")||"보안상의 문제로 사용할 수 없는 기능입니다.";alert(t);var e=document.getElementById(this.id+"_inputFile");if(e)return new ActiveXObject("Scripting.FileSystemObject").GetFile(e.value).size;$l("input form is not exist")}catch(t){a.w.printStackTrace(t,null,this)}},p.prototype.getValue=function(){try{var t=document.getElementById(this.id+"_inputFile");if(t)return t.value;$l("input form is not exist")}catch(t){a.w.printStackTrace(t,null,this)}},p.prototype.reset=function(){try{this.dom.form.reset(),"image"==this.options.type?(this.dom.fakeinput.value="",this.dom.input.value=""):this.dom.input.value="";for(var t=this.dom.form.getElementsByTagName("input"),e=0;e<t.length;e++)"hidden"==t[e].type&&t[e].removeAttribute("value");if(this.options.subDir)for(var i=this.dom.form.firstChild;i;){if("subDir"==i.id){i.value=this.options.subDir;break}i=i.nextSibling}if(this.options.subSize)for(var s=this.dom.form.firstChild;s;){if("subSize"==s.id)return void(s.value=this.options.subSize);s=i.nextSibling}}catch(t){a.w.printStackTrace(t,null,this)}},p.prototype.setSubDir=function(t){try{if(this.options.subDir)for(var e=this.dom.form.firstChild;e;){if("subDir"==e.id)return void(e.value=t);e=e.nextSibling}else this.addParam("subDir",t);this.options.subDir=t}catch(t){a.w.printStackTrace(t,null,this)}},p.prototype.getSubDir=function(){try{for(var t="",e=this.dom.form.firstChild;e;){if("subDir"==e.id){t=e.value;break}e=e.nextSibling}return t}catch(t){a.w.printStackTrace(t,null,this)}},p.prototype.submit=function(){try{if(WebSquare.domain){var t=this.dom.form.action;t.indexOf("?")>-1?t+="&":t+="?",t+="domain="+WebSquare.text.URLEncoder(WebSquare.domain),this.dom.form.action=t}if(WebSquare.hybridApp||1==this.options.useXHR&&"undefined"!=typeof FormData){var e=document.getElementById(this.dom.input.id);null==e.files&&(e=this.dom.fakeinput);var i=e.files[0],s=new FormData;s.append("upload",i);for(var o=this.dom.form.getElementsByTagName("input"),h=0;h<o.length;h++)"hidden"==o[h].type&&s.append(o[h].id,o[h].value);var p=new XMLHttpRequest,l=this.uuid;p.onreadystatechange=function(){if(4==p.readyState&&200==p.status){var t=WebSquare.idCache[l],e=p.responseText;t.callback(e.substring(e.indexOf("<ret>"),e.indexOf("</ret>")+6))}},p.open("POST",this.dom.form.action,!0);var d=encodeURIComponent(i.name);p.setRequestHeader("X-File-Name",d);var u=n.v.getConfiguration("/WebSquare/handler/requestHeaderFunction/@value");if(""!=u){var c=r.D.getGlobalFunction(u);c&&c(p,"upload")}p.send(s)}else{var m=this.options.msaName||this._getMsaName();m&&(this.addParam("msaName",m),this.event.addListener(window,"message",this.event.bindAsEventListener(this,this.receiveMessage),!1)),this.dom.form.submit()}}catch(t){a.w.printStackTrace(t,null,this)}},p.prototype.receiveMessage=function(t){try{if(t.currentTarget.WebSquare){this.callback(t.data);for(var e=0;e<this.event.cache.length;e++)if("message"===this.event.cache[e][1]){this.event.removeListener.apply(this.event,this.event.cache[e]),this.event.cache.splice(e,1);break}}}catch(t){a.w.printStackTrace(t,null,this)}},p.prototype.getFileInputObject=function(){try{return this.dom.input}catch(t){a.w.printStackTrace(t,null,this)}},p.prototype.setFAction=function(t){try{this.changeFormAction(t)}catch(t){a.w.printStackTrace(t,null,this)}},p.prototype.changeFormAction=function(t){try{t&&(this.options.action=t,this.action=n.v.getServletURL(this,this.options.msaName,this._defaultAction,this.options.action),
this.dom.form.action=this.action)}catch(t){a.w.printStackTrace(t,null,this)}},p.prototype.changeMsaName=function(t){try{t&&(this.options.msaName=t,this.action=n.v.getServletURL(this,this.options.msaName,this._defaultAction,this.options.action),this.dom.form.action=this.action)}catch(t){a.w.printStackTrace(t,null,this)}},p.prototype.addParam=function(t,e){try{for(var i=!1,s=this.dom.form.firstChild;s;){if(s.id==t){i=!0;break}s=s.nextSibling}if(i)this.dom.form[t].value=e;else{var n=document.createElement("input");n.type="hidden",n.value=e,n.id=t,n.name=t,this.dom.form.appendChild(n)}}catch(t){a.w.printStackTrace(t,null,this)}},p.prototype.getDefaultStyle=function(){try{return" border:0px solid blue "}catch(t){a.w.printStackTrace(t,null,this)}},p.prototype.callback=function(t){try{this.callbackFunction?this.callbackFunction.apply(this,new Array(WebSquare.xml.parse(t))):o.B.fireEvent(this,"ondone",WebSquare.xml.parse(t))}catch(t){a.w.printStackTrace(t,null,this)}},p.prototype.getActionUrl=function(t){try{var e="";return e=this.options.action?this.options.action:this.action,t&&!0===t.msa&&(e=this.dom.form.action),e}catch(t){a.w.printStackTrace(t,null,this)}},p.prototype.getAccessibiltyId=function(){try{return"image"==this.options.type?this.id+"_fakeinput":this.id+"_inputFile"}catch(t){a.w.printStackTrace(t,null,this)}},p.prototype.onPropertyChange=function(t,e){try{if("disabled"===t)e?this.addClass(this.render,"w2upload_disabled"):this.removeClass(this.render,"w2upload_disabled")}catch(t){a.w.printStackTrace(t,null,this)}},p.prototype.setDisabled=function(t){try{var e;t=r.D.getBoolean(t);var i=this.render.getElementsByTagName("fieldset")[0];e="image"==this.options.type?document.getElementById(this.id+"_fakeinput"):document.getElementById(this.id+"_inputFile"),t?(e.setAttribute("disabled","disabled"),i.setAttribute("disabled","disabled")):(e.removeAttribute("disabled"),i.removeAttribute("disabled")),h.s.prototype.setDisabled.call(this,t)}catch(t){a.w.printStackTrace(t)}return t},p.prototype.finalize=function(){try{h.s.prototype.finalize.call(this),n.v.setTimer((function(t){if(t){var e=document.getElementById(t);e&&e.parentNode&&(e.parentNode.removeChild(e),e=null)}}),{key:this.id+"_removeTargetFrame",delay:6e4,args:[this._targetFrameId]})}catch(t){a.w.printStackTrace(t)}}}}]);