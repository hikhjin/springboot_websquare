"use strict";(self.webpackChunkwebpack_test=self.webpackChunkwebpack_test||[]).push([[225],{7225:(t,e,i)=>{i.r(e),i.d(e,{graphicUtil:()=>l});var r=i(2981),s=i(2085),n=i(3082),o=function(t,e){try{this.mainParent=t,this.options=e,this.id=t.id,this.mainLayer=null,this.defLayer=null,this.svgNS="http://www.w3.org/2000/svg",this.xlink="http://www.w3.org/1999/xlink",this.initSVGLayer(),this.objectArr=[],this.rotateAngle=0,this.defCnt=0}catch(t){s.w.printStackTrace(t)}};o.prototype.initSVGLayer=function(){try{var t=document.createElementNS(this.svgNS,"svg");t.style.position="absolute",t.style.left="0px",t.style.top="0px",t.style.width="100%",t.style.height="100%",t.setAttribute("class","w2graphicUtil"),"insert"==this.options.appendMode&&this.mainParent.render.firstChild?this.mainParent.render.insertBefore(t,this.mainParent.render.firstChild):this.mainParent.render.appendChild(t),this.defLayer=document.createElementNS(this.svgNS,"defs"),t.appendChild(this.defLayer),this.mainLayer=document.createElementNS(this.svgNS,"g"),t.appendChild(this.mainLayer)}catch(t){s.w.printStackTrace(t)}},o.prototype.rotate=function(t,e,i){t=t||0,e=e||parseInt(this.mainParent.render.style.width)/2,e+=.5,i+=.5,this.mainLayer.setAttribute("transform","rotate("+t+" "+e+" "+i+")"),this.rotateAngle=t},o.prototype.getRotateAngle=function(){return this.rotateAngle},o.prototype.createLine=function(t,e,i,r,s,n,o,a,l){var h=document.createElementNS(this.svgNS,"line");return h.setAttribute("id",t),h.setAttribute("stroke-linecap","round"),h.setAttribute("stroke-width",e),h.setAttribute("x1",i),h.setAttribute("y1",r),h.setAttribute("x2",s),h.setAttribute("y2",n),h.setAttribute("stroke",o||"#000000"),this.appendObj(t,h,a),h},o.prototype.createCircle=function(t,e,i,r,s,n,o,a,l){var h=document.createElementNS(this.svgNS,"circle");return h.setAttribute("id",t),h.setAttribute("stroke-width",e),h.setAttribute("cx",i),h.setAttribute("cy",r),h.setAttribute("r",s),h.setAttribute("stroke",n||"#000000"),h.setAttribute("fill",o||"#ffffff"),this.appendObj(t,h,a),h},o.prototype.createEllipse=function(t,e,i,r,s,n,o,a,l,h){var u=document.createElementNS(this.svgNS,"ellipse");return u.setAttribute("stroke-width",e),u.setAttribute("cx",i),u.setAttribute("cy",r),u.setAttribute("rx",s),u.setAttribute("ry",n),u.setAttribute("stroke",o||"#000000"),u.setAttribute("fill",a||"#ffffff"),this.appendObj(t,u,l),u},o.prototype.createRectangleAnimation=function(t,e,i,r,s,n,o,a,l,h){var u=null,p=this;return"bottom_top"==(h=h||"bottom_top")&&(u=this.createRectangle(t,e,i,r+n,s,0,o,a,l),setTimeout((function(){p.startRectangleAnimation1(u,r,n,1,10)}),1)),"left_right"==h&&(u=this.createRectangle(t,e,i,r,0,n,o,a,l),setTimeout((function(){p.startRectangleAnimation2(u,r,s,1,10)}),1)),u},o.prototype.startRectangleAnimation1=function(t,e,i,r,s){if(r=r>s?s:r,t.setAttribute("y",e+i-i*r/s),t.setAttribute("height",i*r/s),r<s){r++;var n=this;setTimeout((function(){n.startRectangleAnimation1(t,e,i,r,s)}),40)}},o.prototype.startRectangleAnimation2=function(t,e,i,r,s){if(r=r>s?s:r,t.setAttribute("width",i*r/s),r<s){r++;var n=this;setTimeout((function(){n.startRectangleAnimation2(t,e,i,r,s)}),40)}},o.prototype.createRectangle=function(t,e,i,r,s,n,o,a,l,h){var u=document.createElementNS(this.svgNS,"rect");return u.setAttribute("id",t),u.setAttribute("stroke-width",e),u.setAttribute("x",i),u.setAttribute("y",r),u.setAttribute("width",s),u.setAttribute("height",n),u.setAttribute("stroke",o||"#000000"),u.setAttribute("fill",a||"#ffffff"),this.appendObj(t,u,l),u},o.prototype.createRoundRect=function(t,e,i,r,s,n,o,a,l,h,u){e=parseInt(e)||0;var p=document.createElementNS(this.svgNS,"rect");return p.setAttribute("stroke-width",e),p.setAttribute("x",parseInt(i)+e/2),p.setAttribute("y",parseInt(r)+e/2),p.setAttribute("width",parseInt(s)-e),p.setAttribute("height",parseInt(n)-e),p.setAttribute("stroke",a||"#000000"),p.setAttribute("fill",l||"#ffffff"),p.setAttribute("rx",o),p.setAttribute("ry",o),this.appendObj(t,p,h),p},
o.prototype.setStyle=function(t,e,i,r,s){var n=this.objectArr[t],o=parseInt(n.getAttribute("stroke-width"))||0;null!=e&&n.setAttribute("x",parseInt(e)+o),null!=i&&n.setAttribute("y",parseInt(i)+o),null!=r&&n.setAttribute("width",parseInt(r)-o),null!=s&&n.setAttribute("height",parseInt(s)-o)},o.prototype.createImage=function(t,e,i,r,s,n,o,a,l,h){var u=document.createElementNS(this.svgNS,"image");return u.setAttribute("x",i),u.setAttribute("y",r),u.setAttribute("width",s),u.setAttribute("height",n),u.setAttributeNS(this.xlink,"href",a),this.appendObj(t,u,l),u},o.prototype.createArc=function(t,e,i,r,s,n,o,a,l,h,u){var p=document.createElementNS(this.svgNS,"path");n>o&&(o=n);var c=Math.abs(n-o)>180?1:0,d="M"+i+" "+r;return d+=" L"+(i+s*Math.cos(n*(Math.PI/180)))+" "+(r-s*Math.sin(n*(Math.PI/180))),d+=" A"+s+","+s+" 0 "+c+", 0 ",d+=i+s*Math.cos(o*(Math.PI/180))+" "+(r-s*Math.sin(o*(Math.PI/180))),d+=" Z",p.setAttribute("id",t),p.setAttribute("d",d),p.setAttribute("stroke-width",e),p.setAttribute("stroke",a||"#000000"),p.setAttribute("fill",l||"#ffffff"),this.appendObj(t,p,h),p},o.prototype.createPath=function(t,e,i,r,s,n,o){for(var a=document.createElementNS(this.svgNS,"path"),l="",h=0;h<i.length;h++)l+=0==h?"M":" L",l+=i[h].x+" "+i[h].y;return l+=" Z",a.setAttribute("d",l),a.setAttribute("id",t),a.setAttribute("stroke-width",e),a.setAttribute("stroke",r||"#000000"),a.setAttribute("fill",s||"#ffffff"),this.appendObj(t,a,n),a},o.prototype.createPath2=function(t,e,i,r,s,n,o,a,l){for(var h=document.createElementNS(this.svgNS,"path"),u="",p=0;p<i.length;p++)u+=0==p?"M":" L",u+=i[p].x+" "+i[p].y;return o&&(u+=" Z"),h.setAttribute("d",u),h.setAttribute("id",t),h.setAttribute("stroke-width",e),h.setAttribute("stroke",r||"#000000"),n?h.setAttribute("fill",s||"#ffffff"):h.setAttribute("fill","none"),this.appendObj(t,h,a),h},o.prototype.modifyPath=function(t,e){for(var i=this.objectArr[t],r="",s=0;s<e.pointList.length;s++)r+=0==s?"M":" L",r+=e.pointList[s].x+" "+e.pointList[s].y;e.closeFlag&&(r+=" Z"),i.setAttribute("d",r)},o.prototype.modifyRectangle=function(t,e){var i=this.objectArr[t];i&&(null!=e.x&&i.setAttribute("x",e.x),null!=e.y&&i.setAttribute("y",e.y),null!=e.width&&i.setAttribute("width",e.width),null!=e.height&&i.setAttribute("height",e.height))},o.prototype.modifyArc=function(t,e){var i=this.objectArr[t];if(i&&null!=e.centerX&&null!=e.centerY&&null!=e.radius&&null!=e.startAngle&&null!=e.endAngle){var r=e.centerX,s=e.centerY,n=e.radius,o=e.startAngle,a=e.endAngle,l=Math.abs(o-a)>180?1:0,h="M"+r+" "+s;h+=" L"+(r+n*Math.cos(o*(Math.PI/180)))+" "+(s-n*Math.sin(o*(Math.PI/180))),h+=" A"+n+","+n+" 0 "+l+", 0 ",h+=r+n*Math.cos(a*(Math.PI/180))+" "+(s-n*Math.sin(a*(Math.PI/180))),h+="",i.setAttribute("d",h)}},o.prototype.modifyLine=function(t,e){this.objectArr[t]},o.prototype.appendObj=function(t,e,i){this.objectArr[t]=e,i=null==i||i,n.D.isChrome()&&(e.style.visibility="hidden"),i&&this.mainLayer.appendChild(e),n.D.isChrome()&&setTimeout((function(){e.style.visibility=""}),100)},o.prototype.addLinearGradient=function(t,e,i,r){var s="0%",n="0%",o="0%",a="0%";if("number"!=typeof e)switch(e.toLowerCase()){case"left_right":o="100%";break;case"right_left":s="100%";break;case"top_bottom":a="100%";break;case"bottom_top":n="100%"}else{s="0%",n="0%",o="0%",a="0%";var l=e%360;(l=l<0?l+360:l)>=0&&l<23||l>337&&l<=360?o="100%":l>22&&l<68?(n="100%",o="100%"):l>67&&l<113?n="100%":l>112&&l<158?(s="100%",n="100%"):l>157&&l<203?s="100%":l>202&&l<248?(s="100%",a="100%"):l>247&&l<293?a="100%":l>292&&l<338&&(a="100%",o="100%")}this.defCnt++;var h=document.createElementNS(this.svgNS,"linearGradient");h.id=this.id+"_"+t+"def"+this.defCnt,h.setAttribute("x1",s),h.setAttribute("y1",n),h.setAttribute("x2",o),h.setAttribute("y2",a);var u=document.createElementNS(this.svgNS,"stop");u.setAttribute("offset","0%"),u.setAttribute("style","stop-color:"+i+"; stop-opacity:1");var p=document.createElementNS(this.svgNS,"stop");p.setAttribute("offset","100%"),
p.setAttribute("style","stop-color:"+r+"; stop-opacity:1"),h.appendChild(u),h.appendChild(p),this.defLayer.appendChild(h),this.objectArr[t].setAttribute("style","fill:url(#"+this.id+"_"+t+"def"+this.defCnt+")")},o.prototype.addRadialGradient=function(t,e,i,r,s){this.defCnt++;var n=this.id+"def"+this.defCnt,o=document.createElementNS(this.svgNS,"radialGradient");o.id=n,o.setAttribute("cx",e),o.setAttribute("cy",i),o.setAttribute("fx",e),o.setAttribute("fy",i);var a=document.createElementNS(this.svgNS,"stop");a.setAttribute("offset","0%"),a.setAttribute("style","stop-color:"+r+"; stop-opacity:1");var l=document.createElementNS(this.svgNS,"stop");l.setAttribute("offset","100%"),l.setAttribute("style","stop-color:"+s+"; stop-opacity:1"),o.appendChild(a),o.appendChild(l),this.defLayer.appendChild(o),this.objectArr[t].setAttribute("style","fill:url(#"+n+")")},o.prototype.addOpacity=function(t,e){this.objectArr[t].setAttribute("opacity",e)},o.prototype.add3DEffect=function(t,e){"rect"==this.objectArr[t].tagName&&this.add3DEffectRectangle(t,e)},o.prototype.add3DEffectRectangle=function(t,e){var i=this.objectArr[t];e/=3;var r=parseInt(i.getAttribute("stroke-width")||0),s=i.getAttribute("stroke"),n=i.getAttribute("fill"),o=r>0?r-1:0,a=parseInt(i.getAttribute("x")||0)+o,l=parseInt(i.getAttribute("y")||0)-o+1,h=parseInt(i.getAttribute("width")||0),u=parseInt(i.getAttribute("height")||0),p=[];(d={}).x=a,d.y=l,p.push(d),(f={}).x=a+e,f.y=l-e,p.push(f),(y={}).x=a+e+h,y.y=l-e,p.push(y),(b={}).x=a+h,b.y=l,p.push(b);var c=this.mainParent.get3DColor(n,"dark",5);this.createPath(t+"_upper",r,p,s,c,!0);var d,f,y,b;p=[];(d={}).x=a+h,d.y=l,p.push(d),(f={}).x=a+h+e,f.y=l-e,p.push(f),(y={}).x=a+h+e,y.y=l+u-e,p.push(y),(b={}).x=a+h,b.y=l+u,p.push(b);var A=this.mainParent.get3DColor(n,"bright",5);this.createPath(t+"_right",r,p,s,A,!0)};i(7275);var a=function(t,e){try{this.mainParent=t,this.options=e,this.mainLayer=null,this.objectArr=[],this.coordsize="",this.rotateAngle=0,this.initVMLLayer()}catch(t){s.w.printStackTrace(t)}};a.prototype.initVMLLayer=function(){try{document.namespaces.add("v","urn:schemas-microsoft-com:vml"),this.mainLayer=this.createElement("group"),this.mainLayer.style.position="absolute",this.mainLayer.className="w2graphicUtil",this.mainLayer.style.left="0px",this.mainLayer.style.top="0px",this.mainLayer.style.visibility="visible";var t=this.mainParent.render.offsetWidth,e=this.mainParent.render.offsetHeight;0!=t&&0!=e||(t=parseInt(n.D.getStyleProperty(this.mainParent.render,"width")),e=parseInt(n.D.getStyleProperty(this.mainParent.render,"height"))),this.mainLayer.style.width=t+"px",this.mainLayer.style.height=e+"px",this.mainLayer.coordsize=parseInt(t)+", "+parseInt(e),this.coordsize=parseInt(t)+", "+parseInt(e),"insert"==this.options.appendMode&&this.mainParent.render.firstChild?this.mainParent.render.insertBefore(this.mainLayer,this.mainParent.render.firstChild):this.mainParent.render.appendChild(this.mainLayer)}catch(t){s.w.printStackTrace(t)}},a.prototype.rotate=function(t,e,i){t=t||0,this.mainLayer.rotation=t,this.rotateAngle=t;var r=2*e+1,s=2*i+1;this.mainLayer.style.width=r+"px",this.mainLayer.style.height=s+"px",this.coordsize=r+" "+s,this.mainLayer.coordsize=this.coordsize},a.prototype.getRotateAngle=function(t){return this.rotateAngle},a.prototype.getPxWidth=function(t){return t+""==parseInt(t)+""?t+"px":t},a.prototype.createLine=function(t,e,i,r,s,n,o,a,l){var h=this.createElement("line");h.setAttribute("id",t),h.setAttribute("strokeweight",this.getPxWidth(e)),h.style.zIndex=l||0;var u=this.createElement("stroke");return u.setAttribute("endcap","round"),h.appendChild(u),h.setAttribute("to",i+","+r),h.setAttribute("from",s+","+n),h.setAttribute("strokecolor",o),this.appendObj(t,h,a),h},a.prototype.createCircle=function(t,e,i,r,s,n,o,a,l){var h=this.createElement("oval");return h.setAttribute("id",t),h.style.position="absolute",h.style.left=i-s,h.style.top=r-s,h.style.width=2*s,h.style.height=2*s,
h.setAttribute("stroke","true"),h.setAttribute("opacity","5.5"),h.setAttribute("strokecolor",n),h.setAttribute("strokeweight",this.getPxWidth(e)),h.setAttribute("fill","true"),h.setAttribute("fillcolor",o||"#ffffff"),h.style.zIndex=l||0,this.appendObj(t,h,a),h},a.prototype.createEllipse=function(t,e,i,r,s,n,o,a,l,h){var u=this.createElement("oval");return u.style.position="absolute",u.style.left=i-s,u.style.top=r-n,u.style.width=2*s,u.style.height=2*n,u.setAttribute("stroke","true"),u.setAttribute("strokecolor",o),u.setAttribute("strokeweight",this.getPxWidth(e)),u.setAttribute("fill","true"),u.setAttribute("fillcolor",a||"#ffffff"),u.style.zIndex=h||0,this.appendObj(t,u,l),u},a.prototype.createRectangleAnimation=function(t,e,i,r,s,n,o,a,l,h){var u=null,p=this;return"bottom_top"==(h=h||"bottom_top")&&(u=this.createRectangle(t,e,i,r+n,s,0,o,a,l),setTimeout((function(){p.startRectangleAnimation1(u,r,n,1,10)}),1)),"left_right"==h&&(u=this.createRectangle(t,e,i,r,0,n,o,a,l),setTimeout((function(){p.startRectangleAnimation2(u,r,s,1,10)}),1)),u},a.prototype.startRectangleAnimation1=function(t,e,i,r,s){if(r=r>s?s:r,t.style.top=e+i-i*r/s,t.style.height=i*r/s,r<s){r++;var n=this;setTimeout((function(){n.startRectangleAnimation1(t,e,i,r,s)}),20)}},a.prototype.startRectangleAnimation2=function(t,e,i,r,s){if(r=r>s?s:r,t.style.width=i*r/s,r<s){r++;var n=this;setTimeout((function(){n.startRectangleAnimation2(t,e,i,r,s)}),20)}},a.prototype.createRectangle=function(t,e,i,r,s,n,o,a,l,h){var u=this.createElement("rect");return u.id=t,u.setAttribute("stroke","true"),u.setAttribute("strokecolor",o),u.setAttribute("strokeweight",this.getPxWidth(e)),u.style.position="absolute",u.style.left=i,u.style.top=r,u.style.width=s,u.style.height=n,u.setAttribute("fill","true"),u.setAttribute("fillcolor",a||"#ffffff"),u.style.zIndex=h||0,this.appendObj(t,u,l),u},a.prototype.createRoundRect=function(t,e,i,r,s,n,o,a,l,h,u){n-=e=parseInt(e);var p=this.createElement("roundrect");return p.style.width=s,p.style.height=n,0!==e?(p.setAttribute("stroked","true"),p.setAttribute("strokecolor",a),p.setAttribute("strokeweight",this.getPxWidth(e))):p.setAttribute("stroked","false"),p.setAttribute("arcsize",parseFloat(o)/parseFloat(n)),p.style.position="absolute",p.style.left=i,p.style.top=r,p.setAttribute("fill","true"),p.setAttribute("fillcolor",l||"#ffffff"),p.style.zIndex=u||0,this.appendObj(t,p,h),p},a.prototype.setStyle=function(t,e,i,r,s){var n=this.objectArr[t];null!=e&&(n.style.left=e),null!=i&&(n.style.top=i),null!=r&&(n.style.width=r),null!=s&&(n.style.height=s)},a.prototype.createImage=function(t,e,i,r,s,n,o,a,l,h){var u=this.createElement("image");return u.src=a,u.style.position="absolute",u.style.left=i,u.style.top=r,u.style.width=s,u.style.height=n,u.style.zIndex=h||0,this.appendObj(t,u,l),u},a.prototype.createArc=function(t,e,i,r,s,n,o,a,l,h,u){s=Math.round(s),n>o&&(o=n);var p=parseInt(236e5*n/360),c=parseInt((o-n)/360*236e5),d=this.createElement("shape");return d.setAttribute("id",t),d.style.position="absolute",d.style.left=i,d.style.top=r,d.style.width=s,d.style.height=s,d.setAttribute("strokeweight",this.getPxWidth(e)),d.setAttribute("strokeColor",a),d.setAttribute("coordsize",s+" "+s),d.setAttribute("path","M 0 0 AE 0 0 "+s+" "+s+" "+p+" "+c+" X E"),d.style.zIndex=u||0,d.setAttribute("fill","true"),d.setAttribute("fillcolor",l||"#ffffff"),this.appendObj(t,d,h),d},a.prototype.createPath=function(t,e,i,r,s,n,o){var a=this.createElement("shape");a.setAttribute("id",t),a.style.position="absolute",a.style.width=this.mainLayer.style.width,a.style.height=this.mainLayer.style.height,a.setAttribute("strokeColor",r),a.setAttribute("strokeweight",this.getPxWidth(e)),a.setAttribute("fillcolor",s),a.style.zIndex=o||0;for(var l=this.createElement("path"),h="",u=0;u<i.length;u++)h+=0==u?"M":" L",h+=parseInt(i[u].x)+","+parseInt(i[u].y);return h+=" X E",l.setAttribute("v",h),a.appendChild(l),this.appendObj(t,a,n),a},a.prototype.createPath2=function(t,e,i,r,s,n,o,a,l){
var h=this.createElement("shape");h.setAttribute("id",t),h.style.position="absolute",h.style.width=this.mainLayer.style.width,h.style.height=this.mainLayer.style.height,h.setAttribute("strokeColor",r),h.setAttribute("strokeweight",this.getPxWidth(e)),h.style.zIndex=l||0,n&&(h.fillcolor=s);for(var u=this.createElement("path"),p="",c=0;c<i.length;c++)p+=0==c?"M":" L",p+=parseInt(i[c].x)+","+parseInt(i[c].y);return p+=o?" X E":" E nf ",u.setAttribute("v",p),h.appendChild(u),this.appendObj(t,h,a),h},a.prototype.modifyPath=function(t,e){var i=this.objectArr[t];if(i){for(var r=null,s="",n=i.firstChild;null!=n;n=n.nextSibling)if("path"==n.nodeName){r=n;break}if(r){for(var o=0;o<e.pointList.length;o++)s+=0==o?"M":" L",s+=parseInt(e.pointList[o].x)+","+parseInt(e.pointList[o].y);e.closeFlag?s+=" X E":s+=" E nf",r.v=s}}},a.prototype.modifyRectangle=function(t,e){var i=this.objectArr[t];i&&(null!=e.x&&(i.style.left=e.x),null!=e.y&&(i.style.top=e.y),null!=e.width&&(i.style.width=e.width),null!=e.height&&(i.style.height=e.height))},a.prototype.modifyArc=function(t,e){var i=this.objectArr[t];if(i&&(null!=e.centerX&&(i.style.left=e.centerX),null!=e.centerY&&(i.style.top=e.centerY),null!=e.radius&&null!=e.startAngle&&null!=e.endAngle)){var r=parseInt(e.radius),s=parseInt(236e5*e.startAngle/360),n=parseInt((e.endAngle-e.startAngle)/360*236e5);i.path="M 0 0 AE 0 0 "+r+" "+r+" "+s+" "+n+" X E"}},a.prototype.modifyLine=function(t,e){this.objectArr[t]},a.prototype.appendObj=function(t,e,i){this.objectArr[t]=e,i=null==i||i,e.style.visibility="visible",e.style.display="none",i&&this.mainLayer.appendChild(e),this.mainLayer.style.visibility="",e.style.display="",e.style.visibility=""},a.prototype.addLinearGradient=function(t,e,i,r){var s="0";if("number"!=typeof e)switch(e.toLowerCase()){case"left_right":s="270";break;case"right_left":s="90";break;case"top_bottom":s="180";break;case"bottom_top":s="0"}else s=e%360,s=(s-=90)<0?s+360:s;var n=this.createElement("fill");n.setAttribute("type","Gradient"),n.setAttribute("angle",s),n.setAttribute("color",i),n.setAttribute("color2",r),this.objectArr[t].appendChild(n)},a.prototype.addRadialGradient=function(t,e,i,r,s){var n="0";n=0,n=(n-=90)<0?n+360:n;var o=this.createElement("fill");o.setAttribute("type","Gradient"),o.setAttribute("angle",n),o.setAttribute("color",r),o.setAttribute("color2",s),this.objectArr[t].appendChild(o)},a.prototype.add3DEffect=function(t,e){var i=this.createElement("extrusion");i.setAttribute("on","true"),i.setAttribute("backdepth",e+"px"),this.objectArr[t].appendChild(i)},a.prototype.addOpacity=function(t,e){var i=this.createElement("stroke");i.setAttribute("opacity","50%"),this.objectArr[t].appendChild(i)},a.prototype.createElement=function(t){var e;if(e=document.createElement("v:"+t),n.D.isIE(8)&&navigator.userAgent.indexOf("MSIE 8.0")>-1){var i=navigator.userAgent.indexOf("Trident"),r=navigator.userAgent.indexOf("/",i),s=navigator.userAgent.indexOf(".",r);parseInt(navigator.userAgent.substring(r+1,s),10)>=5?e=document.createElement("v:"+t):e.style.BEHAVIOR="url(#default#VML)"}else e=document.createElement("v:"+t);return e};var l=function(t,e,i,s){this.id=t,this.platformType=i||"",this.options=r.x.extend({appendMode:"append"},s||{}),""==this.platformType&&(this.platformType=WebSquare.graphicPlatformType),this.makeMainLayer(e),this.hasMainCanvas=!1,this.drawToolkit=null,this.setDrawToolkit(this.options)};l.prototype.setDrawToolkit=async function(t){try{switch(this.platformType){case"svg":await inquires("uiplugin/graphicUtil/svgToolkit.js"),this.drawToolkit=new o(this,t);break;case"vml":await inquires("uiplugin/graphicUtil/vmlToolkit.js"),this.drawToolkit=new a(this,t)}}catch(t){s.w.printStackTrace(t)}},l.prototype.setSize=function(t,e){this.drawToolkit.setSize(t,e)},l.prototype.makeMainLayer=function(t){this.render=t},l.prototype.rotate=function(t){this.drawToolkit.rotate(t)},l.prototype.getRotateAngle=function(){return this.drawToolkit.getRotateAngle()},
l.prototype.get3DColor=function(t,e,i){return"dark"==e?this.getDarkColor(t,i):this.getBrightColor(t,i)},l.prototype.getDarkColor=function(t,e){var i,r,s;t.indexOf("#")>-1?(i=n.D.hexacodetoDbl(t.substr(1,2)),r=n.D.hexacodetoDbl(t.substr(3,2)),s=n.D.hexacodetoDbl(t.substr(5,2))):(i=255,r=255,s=255);var o=i-i/e;o<0&&(o=0);var a=r-r/e;a<0&&(a=0);var l=s-s/e;return l<0&&(l=0),"#"+this.getChangedHexacode(o)+this.getChangedHexacode(a)+this.getChangedHexacode(l)},l.prototype.getBrightColor=function(t,e){var i,r,s;t.indexOf("#")>-1?(i=n.D.hexacodetoDbl(t.substr(1,2)),r=n.D.hexacodetoDbl(t.substr(3,2)),s=n.D.hexacodetoDbl(t.substr(5,2))):(i=255,r=255,s=255);var o=i+i/e;o>255&&(o=255);var a=r+r/e;a>255&&(a=255);var l=s+s/e;return l>255&&(l=255),"#"+this.getChangedHexacode(o)+this.getChangedHexacode(a)+this.getChangedHexacode(l)},l.prototype.getChangedHexacode=function(t){return t=n.D.dbltoHexacode(t),t="0000".substring(0,2-t.length)+t},l.prototype.getRenderingObj=function(t){return this.drawToolkit.objectArr[t]}}}]);