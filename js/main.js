var NeoApp=angular.module("NeoApp",["ngAnimate","ngRoute","ngSanitize","ngTouch","ui.bootstrap"],function($interpolateProvider){$interpolateProvider.startSymbol("[");$interpolateProvider.endSymbol("]");});NeoApp.config(["$routeProvider",function($routeProvider,$scope,$rootScope){$routeProvider.when("/Home",{templateUrl:"Home",controller:"Home_Ctrl"});$routeProvider.when("/VesrionHistory",{templateUrl:"VesrionHistory",controller:"VesrionHistory_Ctrl"});$routeProvider.when("/Betanew1",{templateUrl:"Betanew1",controller:"Betanew1_Ctrl"});$routeProvider.when("/Betanew2",{templateUrl:"Betanew2",controller:"Betanew2_Ctrl"});$routeProvider.when("/Betanew3",{templateUrl:"Betanew3",controller:"Betanew3_Ctrl"});$routeProvider.when("/BetaSettings",{templateUrl:"BetaSettings",controller:"BetaSettings_Ctrl"});$routeProvider.when("/xxxxxxxxxxxxxxxxxpph",{templateUrl:"xxxxxxxxxxxxxxxxxpph",controller:"xxxxxxxxxxxxxxxxxpph_Ctrl"});$routeProvider.when("/KarboMain",{templateUrl:"KarboMain",controller:"KarboMain_Ctrl"});$routeProvider.when("/Karbo01",{templateUrl:"Karbo01",controller:"Karbo01_Ctrl"});$routeProvider.when("/Karbo2",{templateUrl:"Karbo2",controller:"Karbo2_Ctrl"});$routeProvider.when("/Karbo3",{templateUrl:"Karbo3",controller:"Karbo3_Ctrl"});$routeProvider.when("/Karbo4",{templateUrl:"Karbo4",controller:"Karbo4_Ctrl"});$routeProvider.when("/Karbo5",{templateUrl:"Karbo5",controller:"Karbo5_Ctrl"});$routeProvider.when("/Karbo6",{templateUrl:"Karbo6",controller:"Karbo6_Ctrl"});$routeProvider.when("/Karbo7",{templateUrl:"Karbo7",controller:"Karbo7_Ctrl"});$routeProvider.when("/Karbo8",{templateUrl:"Karbo8",controller:"Karbo8_Ctrl"});$routeProvider.when("/Karbo9",{templateUrl:"Karbo9",controller:"Karbo9_Ctrl"});$routeProvider.when("/Karbo10",{templateUrl:"Karbo10",controller:"Karbo10_Ctrl"});$routeProvider.when("/Karbo",{templateUrl:"Karbo",controller:"Karbo_Ctrl"});$routeProvider.when("/xxxxxxxxxxxxxxxKarbooxxx",{templateUrl:"xxxxxxxxxxxxxxxKarbooxxx",controller:"xxxxxxxxxxxxxxxKarbooxxx_Ctrl"});$routeProvider.when("/PhHome",{templateUrl:"PhHome",controller:"PhHome_Ctrl"});$routeProvider.when("/Ph1Main",{templateUrl:"Ph1Main",controller:"Ph1Main_Ctrl"});$routeProvider.when("/Ph2Main",{templateUrl:"Ph2Main",controller:"Ph2Main_Ctrl"});$routeProvider.when("/Ph3Main",{templateUrl:"Ph3Main",controller:"Ph3Main_Ctrl"});$routeProvider.when("/Ph4Main",{templateUrl:"Ph4Main",controller:"Ph4Main_Ctrl"});$routeProvider.when("/Ph5Main",{templateUrl:"Ph5Main",controller:"Ph5Main_Ctrl"});$routeProvider.when("/Ph6Main",{templateUrl:"Ph6Main",controller:"Ph6Main_Ctrl"});$routeProvider.when("/Ph7Main",{templateUrl:"Ph7Main",controller:"Ph7Main_Ctrl"});$routeProvider.when("/Ph8Main",{templateUrl:"Ph8Main",controller:"Ph8Main_Ctrl"});$routeProvider.when("/Ph9Main",{templateUrl:"Ph9Main",controller:"Ph9Main_Ctrl"});$routeProvider.when("/Ph10Main",{templateUrl:"Ph10Main",controller:"Ph10Main_Ctrl"});$routeProvider.when("/xxxxxxxxxxxxxxxxxx",{templateUrl:"xxxxxxxxxxxxxxxxxx",controller:"xxxxxxxxxxxxxxxxxx_Ctrl"});$routeProvider.when("/ADHDHome",{templateUrl:"ADHDHome",controller:"ADHDHome_Ctrl"});$routeProvider.when("/HEADERS",{templateUrl:"HEADERS",controller:"HEADERS_Ctrl"});$routeProvider.when("/Diary1",{templateUrl:"Diary1",controller:"Diary1_Ctrl"});$routeProvider.when("/HeadersPh",{templateUrl:"HeadersPh",controller:"HeadersPh_Ctrl"});$routeProvider.when("/HeadersQuestions",{templateUrl:"HeadersQuestions",controller:"HeadersQuestions_Ctrl"});$routeProvider.when("/Settings1",{templateUrl:"Settings1",controller:"Settings1_Ctrl"});$routeProvider.when("/ADHDhelper",{templateUrl:"ADHDhelper",controller:"ADHDhelper_Ctrl"});$routeProvider.when("/xxxxxxxxxxxxxxxxxad",{templateUrl:"xxxxxxxxxxxxxxxxxad",controller:"xxxxxxxxxxxxxxxxxad_Ctrl"});$routeProvider.when("/q1",{templateUrl:"q1",controller:"q1_Ctrl"});$routeProvider.when("/q2",{templateUrl:"q2",controller:"q2_Ctrl"});$routeProvider.when("/Q3",{templateUrl:"Q3",controller:"Q3_Ctrl"});$routeProvider.when("/q4",{templateUrl:"q4",controller:"q4_Ctrl"});$routeProvider.when("/q5",{templateUrl:"q5",controller:"q5_Ctrl"});$routeProvider.when("/q6",{templateUrl:"q6",controller:"q6_Ctrl"});$routeProvider.when("/q7",{templateUrl:"q7",controller:"q7_Ctrl"});$routeProvider.when("/q8",{templateUrl:"q8",controller:"q8_Ctrl"});$routeProvider.when("/q9",{templateUrl:"q9",controller:"q9_Ctrl"});$routeProvider.when("/q10",{templateUrl:"q10",controller:"q10_Ctrl"});$routeProvider.when("/q11",{templateUrl:"q11",controller:"q11_Ctrl"});$routeProvider.when("/AD1main",{templateUrl:"AD1main",controller:"AD1main_Ctrl"});$routeProvider.when("/x1xxxxxxxxxxxxxxxad",{templateUrl:"x1xxxxxxxxxxxxxxxad",controller:"x1xxxxxxxxxxxxxxxad_Ctrl"});$routeProvider.when("/AD2main",{templateUrl:"AD2main",controller:"AD2main_Ctrl"});$routeProvider.when("/xxxpxxxxxxxxxxxxxph",{templateUrl:"xxxpxxxxxxxxxxxxxph",controller:"xxxpxxxxxxxxxxxxxph_Ctrl"});$routeProvider.when("/Prayer",{templateUrl:"Prayer",controller:"Prayer_Ctrl"});$routeProvider.when("/xxxxxxxxxxxxprayxxxx",{templateUrl:"xxxxxxxxxxxxprayxxxx",controller:"xxxxxxxxxxxxprayxxxx_Ctrl"});$routeProvider.when("/Rep1",{templateUrl:"Rep1",controller:"Rep1_Ctrl"});$routeProvider.when("/xxxxxxxxxxrepxxxxxxx",{templateUrl:"xxxxxxxxxxrepxxxxxxx",controller:"xxxxxxxxxxrepxxxxxxx_Ctrl"});$routeProvider.when("/Projectmanager",{templateUrl:"Projectmanager",controller:"Projectmanager_Ctrl"});$routeProvider.when("/H1Main",{templateUrl:"H1Main",controller:"H1Main_Ctrl"});$routeProvider.when("/H1m2",{templateUrl:"H1m2",controller:"H1m2_Ctrl"});$routeProvider.when("/H1m3",{templateUrl:"H1m3",controller:"H1m3_Ctrl"});$routeProvider.when("/xxxxxxxxxxxxxxxx1",{templateUrl:"xxxxxxxxxxxxxxxx1",controller:"xxxxxxxxxxxxxxxx1_Ctrl"});$routeProvider.when("/H2Main",{templateUrl:"H2Main",controller:"H2Main_Ctrl"});$routeProvider.when("/H2m2",{templateUrl:"H2m2",controller:"H2m2_Ctrl"});$routeProvider.when("/H2m3",{templateUrl:"H2m3",controller:"H2m3_Ctrl"});$routeProvider.when("/xxxxxxxxxxxxxxxx2",{templateUrl:"xxxxxxxxxxxxxxxx2",controller:"xxxxxxxxxxxxxxxx2_Ctrl"});$routeProvider.when("/H3Main",{templateUrl:"H3Main",controller:"H3Main_Ctrl"});$routeProvider.when("/H3m2",{templateUrl:"H3m2",controller:"H3m2_Ctrl"});$routeProvider.when("/H3m3",{templateUrl:"H3m3",controller:"H3m3_Ctrl"});$routeProvider.when("/xxxxxxxxxxxxxxxx3",{templateUrl:"xxxxxxxxxxxxxxxx3",controller:"xxxxxxxxxxxxxxxx3_Ctrl"});$routeProvider.when("/H4Main",{templateUrl:"H4Main",controller:"H4Main_Ctrl"});$routeProvider.when("/H4m2",{templateUrl:"H4m2",controller:"H4m2_Ctrl"});$routeProvider.when("/H4M3",{templateUrl:"H4M3",controller:"H4M3_Ctrl"});$routeProvider.when("/xxxxxxxxxxxxxxxx4",{templateUrl:"xxxxxxxxxxxxxxxx4",controller:"xxxxxxxxxxxxxxxx4_Ctrl"});$routeProvider.when("/H5Main",{templateUrl:"H5Main",controller:"H5Main_Ctrl"});$routeProvider.when("/HV1",{templateUrl:"HV1",controller:"HV1_Ctrl"});$routeProvider.when("/HV2",{templateUrl:"HV2",controller:"HV2_Ctrl"});$routeProvider.when("/H5M2",{templateUrl:"H5M2",controller:"H5M2_Ctrl"});$routeProvider.when("/H5M3",{templateUrl:"H5M3",controller:"H5M3_Ctrl"});$routeProvider.when("/xxxxxxxxxxxxxxxx5",{templateUrl:"xxxxxxxxxxxxxxxx5",controller:"xxxxxxxxxxxxxxxx5_Ctrl"});$routeProvider.when("/H6Main",{templateUrl:"H6Main",controller:"H6Main_Ctrl"});$routeProvider.when("/H6M2",{templateUrl:"H6M2",controller:"H6M2_Ctrl"});$routeProvider.when("/H6M3",{templateUrl:"H6M3",controller:"H6M3_Ctrl"});$routeProvider.when("/xxxxxxxxxxxxxxxx6",{templateUrl:"xxxxxxxxxxxxxxxx6",controller:"xxxxxxxxxxxxxxxx6_Ctrl"});$routeProvider.when("/H7Main",{templateUrl:"H7Main",controller:"H7Main_Ctrl"});$routeProvider.when("/H7M2",{templateUrl:"H7M2",controller:"H7M2_Ctrl"});$routeProvider.when("/H7M3",{templateUrl:"H7M3",controller:"H7M3_Ctrl"});$routeProvider.when("/xxxxxxxxxxxxxxxx7",{templateUrl:"xxxxxxxxxxxxxxxx7",controller:"xxxxxxxxxxxxxxxx7_Ctrl"});$routeProvider.when("/H8Main",{templateUrl:"H8Main",controller:"H8Main_Ctrl"});$routeProvider.when("/H9main",{templateUrl:"H9main",controller:"H9main_Ctrl"});$routeProvider.when("/H10Main",{templateUrl:"H10Main",controller:"H10Main_Ctrl"});$routeProvider.when("/H8M2",{templateUrl:"H8M2",controller:"H8M2_Ctrl"});$routeProvider.when("/H8M3",{templateUrl:"H8M3",controller:"H8M3_Ctrl"});$routeProvider.when("/xxxxxxxxxxxxxxxx8",{templateUrl:"xxxxxxxxxxxxxxxx8",controller:"xxxxxxxxxxxxxxxx8_Ctrl"});$routeProvider.when("/Rulz",{templateUrl:"Rulz",controller:"Rulz_Ctrl"});$routeProvider.when("/R1more",{templateUrl:"R1more",controller:"R1more_Ctrl"});$routeProvider.when("/R2more",{templateUrl:"R2more",controller:"R2more_Ctrl"});$routeProvider.when("/R3more",{templateUrl:"R3more",controller:"R3more_Ctrl"});$routeProvider.when("/R4more",{templateUrl:"R4more",controller:"R4more_Ctrl"});$routeProvider.when("/R5more",{templateUrl:"R5more",controller:"R5more_Ctrl"});$routeProvider.when("/R6more",{templateUrl:"R6more",controller:"R6more_Ctrl"});$routeProvider.when("/R7more",{templateUrl:"R7more",controller:"R7more_Ctrl"});$routeProvider.when("/R8more",{templateUrl:"R8more",controller:"R8more_Ctrl"});$routeProvider.when("/R9more",{templateUrl:"R9more",controller:"R9more_Ctrl"});$routeProvider.when("/R10more",{templateUrl:"R10more",controller:"R10more_Ctrl"});$routeProvider.when("/R11more",{templateUrl:"R11more",controller:"R11more_Ctrl"});$routeProvider.otherwise({redirectTo:"/Home"});}]);NeoApp.filter("checkmark",function(){return function(input){return input?"\u2713":"\u2718";};});NeoApp.filter("element",function(){return function(input,idx1,idx2){idx1=idx1||0;if(input&&input.constructor===Array){if(idx2){return input[idx1,idx2];}else{return input[idx1];};};return"";};});NeoApp.filter("string",function(){return function(input){if(input&&input.constructor===Array)return input.toString();if(input)return input;return"";};});NeoApp.filter("default",function(){return function(input,defValue){if(!input)return defValue;return input;};});NeoApp.filter("trustUrl",function($sce){return function(url){return $sce.trustAsResourceUrl(url);};});NeoApp.filter('bool',function(){return function(input,valueTrue,valueFalse){return input!==true?valueFalse:valueTrue;};});NeoApp.filter('splitLt',function(){return function(str,delimeter){var p=str.indexOf(delimeter);return(p>-1)?str.substring(0,p):str;};});NeoApp.filter('splitRt',function(){return function(str,delimeter){var p=str.indexOf(delimeter);return(p>-1)?str.substring(p+1):str;};});NeoApp.controller("NeoApp_CoreCtrl",function($scope,$rootScope,$location,$route,$modal,$window,$timeout,$interval,$http,$filter,$compile,$animate){$App=$rootScope;$App.$on("$locationChangeStart",function(event,newUrl,oldUrl){var newPg=newUrl.substr(newUrl.lastIndexOf("/")+1);var oldPg=oldUrl.substr(oldUrl.lastIndexOf("/")+1);if(newPg=="!"){event.preventDefault();};if(newPg=="Home"){$timeout($scope.Home_pageenter);};if(newPg=="VesrionHistory"){$timeout($scope.VesrionHistory_pageenter);};if(newPg=="BetaSettings"){$timeout($scope.BetaSettings_pageenter);};if(newPg=="xxxxxxxxxxxxxxxxxpph"){$timeout($scope.xxxxxxxxxxxxxxxxxpph_pageenter);};if(newPg=="PhHome"){$timeout($scope.PhHome_pageenter);};if(newPg=="ADHDHome"){$timeout($scope.ADHDHome_pageenter);};if(newPg=="xxxxxxxxxxxxxxxxxad"){$timeout($scope.xxxxxxxxxxxxxxxxxad_pageenter);};if(oldPg=="Prayer"){$scope.Prayer_pageexit();};});
$scope.SetError=function(msg){throw msg;};$scope.Refresh=function(){$timeout(angular.noop);};$scope.AddFont=function(fontName,fontPath){neotempstyle=document.createElement("style");var position=fontPath.lastIndexOf("/");if(position!=-1){position++;}else{position=0;}var extPosition=fontPath.lastIndexOf(".");extPosition++;var extension=fontPath.substr(extPosition);if(extension=="ttf"){extension="truetype";}if(window.location.href.indexOf("file://")!=-1){neotempstyle.textContent='@font-face{font-family: "'+fontName+'";src: url("'+fontPath+'") format("'+extension+'");}';}else{fontPath=fontPath.substr(position);neotempstyle.textContent='@font-face{font-family: "'+fontName+'";src: url("./fonts/'+fontPath+'") format("'+extension+'");}';}document.head.append(neotempstyle);};$scope.GetOrientation=function(){if($window.orientation){if(Math.abs(window.orientation)===90){return"Landscape";}else{return"Portrait";}}else{if($window.innerWidth>=$window.innerHeight){return"Landscape";}else{return"Portrait";}}};$scope.GotoPageNum=function(pgNum){if(pgNum>0&&pgNum<=$App.NAB.PageList.length){if($App.NAB.PageEnterEffect[pgNum-1]){$App.NAB._pageEffect=" animate enter-"+$App.NAB.PageEnterEffect[pgNum-1]+" exit-"+($App.NAB.PageExitEffect[pgNum-1]||"fadeOut");}else{$App.NAB._pageEffect="";}$timeout(function(){$location.path('/'+$App.NAB.PageList[pgNum-1]);});}else{$scope.SetError('Invalid page.');}};$scope.GotoPage=function(pgId){$scope.GotoPageNum($App.NAB.PageList.indexOf(pgId)+1);};$scope.GotoFirstPage=function(){$scope.GotoPageNum(1);};$scope.GotoLastPage=function(){$scope.GotoPageNum($App.NAB.PageList.length);};$scope.GotoNextPage=function(){var pgNum=$App.NAB.PageNumber;if(pgNum<$App.NAB.PageList.length){$scope.GotoPageNum(pgNum+1);return true;}return false;};$scope.GotoPrevPage=function(){var pgNum=$App.NAB.PageNumber;if(pgNum>1){$scope.GotoPageNum(pgNum-1);return true;}return false;};function makeSVG(tag,attrs){var el=document.createElementNS('http://www.w3.org/2000/svg',tag);for(var k in attrs)el.setAttribute(k,attrs[k]);return el;};function addSvgNode(objId,svgNode){if(document.getElementById(objId).tagName=="svg"){document.getElementById(objId).appendChild(svgNode);}else{document.getElementById(objId).getElementsByTagName('svg')[0].appendChild(svgNode);}};$scope.DrawCircle=function DrawCircle(objId,svgName,cx,cy,circleRadio,strokeColor,strokeWidth,fillColor){$App[svgName]=makeSVG('circle',{'id':svgName,'VisualNEOWebName':svgName,'cx':cx,'cy':cy,'r':circleRadio,'stroke':strokeColor,'stroke-width':strokeWidth,'fill':fillColor});addSvgNode(objId,$App[svgName]);};$scope.DrawEllipse=function DrawEllipse(objId,svgName,cx,cy,rx,ry,strokeColor,strokeWidth,fillColor){$App[svgName]=makeSVG('ellipse',{'id':svgName,'VisualNEOWebName':svgName,'cx':cx,'cy':cy,'rx':rx,'ry':ry,'stroke':strokeColor,'stroke-width':strokeWidth,'fill':fillColor});addSvgNode(objId,$App[svgName]);};$scope.DrawRect=function DrawRect(objId,svgName,posx,posy,width,height,strokeColor,strokeWidth,fillColor){$App[svgName]=makeSVG('rect',{'id':svgName,'VisualNEOWebName':svgName,'x':posx,'y':posy,'width':width,'height':height,'stroke':strokeColor,'stroke-width':strokeWidth,'fill':fillColor});addSvgNode(objId,$App[svgName]);};$scope.DrawPolygon=function DrawPolygon(objId,svgName,points,strokeColor,strokeWidth,fillColor){$App[svgName]=makeSVG('polygon',{'id':svgName,'VisualNEOWebName':svgName,'points':points,'stroke':strokeColor,'stroke-width':strokeWidth,'fill':fillColor});addSvgNode(objId,$App[svgName]);};$scope.DrawPath=function DrawPath(objId,svgName,path,strokeColor,strokeWidth,fillColor){$App[svgName]=makeSVG('path',{'id':svgName,'VisualNEOWebName':svgName,'d':path,'stroke':strokeColor,'stroke-width':strokeWidth,'fill':fillColor});addSvgNode(objId,$App[svgName]);};$scope.DrawPolyLine=function DrawPolyLine(objId,svgName,points,strokeColor,strokeWidth){$App[svgName]=makeSVG('polyline',{'id':svgName,'VisualNEOWebName':svgName,'points':points,'stroke':strokeColor,'stroke-width':strokeWidth,'fill':'none'});addSvgNode(objId,$App[svgName]);};$scope.DrawLine=function DrawLine(objId,svgName,x1,y1,x2,y2,strokeColor,strokeWidth){$App[svgName]=makeSVG('line',{'id':svgName,'VisualNEOWebName':svgName,'x1':x1,'y1':y1,'x2':x2,'y2':y2,'stroke':strokeColor,'stroke-width':strokeWidth});addSvgNode(objId,$App[svgName]);};$scope.DrawImage=function DrawImage(objId,svgName,fileName,x,y,width,height){$App[svgName]=makeSVG('image',{'id':svgName,'VisualNEOWebName':svgName,'x':x,'y':y,'width':width,'height':height,'xlink:href':''});$App[svgName].setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",""+fileName+"");addSvgNode(objId,$App[svgName]);};$scope.DrawText=function DrawText(objId,svgName,theText,posx,posy,fillColor,fontSize,fontFamily,angle){$App[svgName]=makeSVG('text',{'id':svgName,'VisualNEOWebName':svgName,'x':posx,'y':posy,'stroke-width':0,'fill':fillColor,'font-size':fontSize,'font-family':fontFamily,'transform':'rotate('+angle+' '+posx+' '+posy+')'});$App[svgName].textContent=theText;addSvgNode(objId,$App[svgName]);};$scope.DrawClear=function DrawClear(objId){var n=0;$("#"+objId).children().each(function(){if(n!=0){$(this).remove();}n++;});};$scope.OnMouseEvent=function(objId,eventName,subroutine){if(eventName=="contextmenu"){if($App.NAB[objId]){$App.NAB[objId].on(eventName,function(e){e.preventDefault();subroutine;return;});}$("#"+objId).on(eventName,function(e){e.preventDefault();subroutine;return;});}if($App.NAB[objId]){$App.NAB[objId].on(eventName,subroutine);return;}$("#"+objId).on(eventName,subroutine);};$scope.RemoveOnMouseEvent=function(objId,eventName){if($App.NAB[objId]){$App.NAB[objId].off(eventName);return;}$("#"+objId).off(eventName);};$scope.OnTouchEvent=function(objId,eventName,subroutine){if($App.NAB[objId]){$App.NAB[objId].on(eventName,subroutine);return;}$("#"+objId).on(eventName,subroutine);};$scope.RemoveOnTouchEvent=function(objId,eventName){if($App.NAB[objId]){$App.NAB[objId].off(eventName);return;}$("#"+objId).off(eventName);};$scope.ShowObject=function(objId,effect,speed){if($App.NAB[objId]){$App.NAB[objId].show(speed);return;}if(!effect||effect.toLowerCase()=='none'){$App.NAB[objId+'_effect']='';}else{if(speed)effect=effect+' speed-'+speed*50;$App.NAB[objId+'_effect']='animate enter-'+effect;}$timeout(function(){var name=objId+'_hidden';if($App.NAB[name])delete $App.NAB[name];});};$scope.HideObject=function(objId,effect,speed){if($App.NAB[objId]){$App.NAB[objId].hide(speed);return;}if(!effect||effect.toLowerCase()=='none'){$App.NAB[objId+'_effect']='';}else{if(speed)effect=effect+' speed-'+speed*50;$App.NAB[objId+'_effect']='animate exit-'+effect;}$timeout(function(){$App.NAB[objId+'_hidden']=true;});};$scope.DisableObject=function(objId,value){var name=objId+'_disabled';if(value){$App.NAB[name]=value;}else{if($App.NAB[name])delete $App.NAB[name];}};$scope.ClipObjectPolygon=function(objId,polygonId){var points=$("#"+polygonId).html();points=points.replace('<polygon vector-effect="non-scaling-stroke" points="',"");points=points.replace('"></polygon>','');coords=points.split(",");var puntos="";for(i=0;i<coords.length;i=i+2){if(i!=coords.length-2){puntos=puntos+coords[i]+"px "+coords[i+1]+"px,";}else{puntos=puntos+coords[i]+"px "+coords[i+1]+"px";}}$("#"+objId).css("clip-path","polygon("+puntos+")");};$scope.ClipObjectPath=function(objId,shape){if(shape=="circle"){$("#"+objId).css("clip-path","circle(50% at 50% 50%)");}else if(shape=="triangle"){$("#"+objId).css("clip-path","polygon(50% 0%, 0% 100%, 100% 100%)");}else if(shape=="rhombus"){$("#"+objId).css("clip-path","polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)");}else if(shape=="pentagon"){$("#"+objId).css("clip-path","polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)");}else{$("#"+objId).css("clip-path",shape);}};$scope.SetObjectStyle=function(objId,selector,value){if($App.NAB[objId]){$App.NAB[objId].css(selector,value);return;}if($App[objId]){$("#"+objId).css(selector,value);return;}var name=objId+'_style';if(!$App.NAB[name])$App.NAB[name]={};if(value&&value.length>0){$App.NAB[name][selector]=value;}else{if($App.NAB[name][selector])delete $App.NAB[name][selector];if(jQuery.isEmptyObject($App.NAB[name]))delete $App.NAB[name];}};$scope.ClearObjectStyles=function(objId){var name=objId+'_style';if($App.NAB[name])delete $App.NAB[name];};$scope.GetObjectInfo=function(objId,info){if($App.NAB[objId]){return $App.NAB[objId].css(info);}return $("#"+objId).css(info);};$scope.GetObjectXY=function(objId,xvar,yvar){var rect=document.getElementById($App.NAB.PageID).getBoundingClientRect();$App.PageLeft=rect.left;$App.PageTop=rect.top;var objeto=document.getElementById(objId).getBoundingClientRect();$App[xvar]=objeto.x-$App.PageLeft;$App[yvar]=objeto.y-$App.PageTop;};$scope.SetObjectHTML=function(objId,code){if($App.NAB[objId]){$App.NAB[objId].html(code);return;}var e=document.getElementById(objId);e.innerHTML=code;$compile(e)($scope);};$scope.GetObjectHTML=function(objId){if($App.NAB[objId]){return $App.NAB[objId].html();;}return document.getElementById(objId).innerHTML;};$scope.SetObjectAttribute=function(objId,AttrName,AttrValue){var element=$("#"+objId);if(AttrName==="src"){AttrName="ng-src";}var pendingChanges=$App.NAB['pendingChanges']||{};pendingChanges[objId]=pendingChanges[objId]||[];pendingChanges[objId].push({AttrName,AttrValue});$App.NAB['pendingChanges']=pendingChanges;$scope.applyPendingChanges();};$scope.applyPendingChanges=function(){var pendingChanges=$App.NAB['pendingChanges'];if(!pendingChanges||jQuery.isEmptyObject(pendingChanges)){return;}Object.keys(pendingChanges).forEach(function(objId){var element=$("#"+objId);if(element.length>0){pendingChanges[objId].forEach(function(change){element.attr(change.AttrName,change.AttrValue);$compile(element)($scope);});}});};$scope.GetObjectAttribute=function(objId,AttrName){if($App.NAB[objId]){return $App.NAB[objId].attr(AttrName);}return $("#"+objId).attr(AttrName);};$scope.SetObjectText=function(objId,code){if($App.NAB[objId]){$App.NAB[objId].text(code);return;}var e=document.getElementById(objId);e.innerText=code;$compile(e)($scope);};$scope.GetObjectText=function(objId){if($App.NAB[objId]){return $App.NAB[objId].text();}return document.getElementById(objId).innerText;};$scope.DuplicateObject=function(objId,objName,containerId){if($App.NAB[objName]){$App.NAB[objName].remove();delete $App.NAB[objName];}else{$("#"+objName).remove();delete $App.NAB[objName];}if($App.NAB[objId]){$App.NAB[objName]=$App.NAB[objId].clone().appendTo("#"+containerId);}else if($App[objId]){$App.NAB[objName]=$("#"+objId).clone().appendTo("#"+containerId);$App.NAB[objName].attr("id","");}else{$App.NAB[objName]=$("#"+objId).clone().appendTo("#"+containerId);}$App.NAB[objName].attr("VisualNEOWebName",objName);$App.NAB[objName].attr("ng-style","NAB."+objName+"_style");$App.NAB[objName].attr("ng-hide","NAB."+objName+"_hidden");$App.NAB[objName].attr("ng-disabled","NAB."+objName+"_disabled");var e=document.getElementById(containerId);$compile(e)($scope);};$scope.DuplicateObjectEx=function(objId,objName,containerId,objStyle){if($App.NAB[objName]){$App.NAB[objName].remove();delete $App.NAB[objName];}else{$("#"+objName).remove();delete $App.NAB[objName];}if($App.NAB[objId]){$App.NAB[objName]=$App.NAB[objId].clone().appendTo("#"+containerId);}else if($App[objId]){$App.NAB[objName]=$("#"+objId).clone().appendTo("#"+containerId);$App.NAB[objName].attr("id","");}else{$App.NAB[objName]=$("#"+objId).clone().appendTo("#"+containerId);$App.NAB[objName].attr("id",objName);$App.NAB[objName].atyle=document.getElementById(objId).style;}$App.NAB[objName].attr("VisualNEOWebName",objName);$App.NAB[objName].attr("ng-style","NAB."+objName+"_style");$App.NAB[objName].attr("ng-hide","NAB."+objName+"_hidden");$App.NAB[objName].attr("ng-disabled","NAB."+objName+"_disabled");$App.NAB[objName].attr("style",objStyle);var e=document.getElementById(containerId);$compile(e)($scope);};$scope.AnimateObjectCSS=function(objId,cssData,duration,delay,easing,callbackfn){if($App.NAB[objId]){$App.NAB[objId].delay(delay).animate(cssData,duration,easing,callbackfn);}else{$("#"+objId).delay(delay).animate(cssData,duration,easing,callbackfn);}};$scope.SetObjectCSS=function(objId,cssData){if($App.NAB[objId]){$App.NAB[objId].css(cssData);}else{$("#"+objId).css(cssData);}};$scope.CheckCollision=function(objId1,objId2){var x1=$("#"+objId1).offset().left;var y1=$("#"+objId1).offset().top;var h1=$("#"+objId1).outerHeight(true);var w1=$("#"+objId1).outerWidth(true);var b1=y1+h1;var r1=x1+w1;var x2=$("#"+objId2).offset().left;var y2=$("#"+objId2).offset().top;var h2=$("#"+objId2).outerHeight(true);var w2=$("#"+objId2).outerWidth(true);var b2=y2+h2;var r2=x2+w2;if(b1<y2||y1>b2||r1<x2||x1>r2){return false;}else{return true;}};$scope.CheckFullCollision=function(objId1,objId2){var r1=document.getElementById(rectone);var r2=document.getElementById(recttwo);var r1bb=r1.getBoundingClientRect();var r2bb=r2.getBoundingClientRect();var r1x=r1bb.x;var r1w=r1bb.width;var r1y=r1bb.y;var r1h=r1bb.height;var r2x=r2bb.x;var r2w=r2bb.width;var r2y=r2bb.y;var r2h=r2bb.height;if(r1x+1>=r2x&&r1y+1>=r2y&&r1x+r1w-1<=r2x+r2w&&r1y+r1h-1<=r2y+r2h){return true;}else{return false;}};function fixUnit(s){var t=s.toString();var parts=t.match(/^([+-]?(?:\d+|\d*\.\d+))([a-z]*|%)$/);return(parts[2])?t:parts[1]+'px';}$scope.SetObjectBounds=function(objId,l,t,w,h){if($App.NAB[objId]){var e=$App.NAB[objId];}else{var e=document.getElementById(objId);}if(w){w=fixUnit(w);e.style.width=w;$scope.SetObjectStyle(objId,'width',w);};if(h){h=fixUnit(h);e.style.height=h;$scope.SetObjectStyle(objId,'height',h);};if(l){l=fixUnit(l);e.style.left=l;$scope.SetObjectStyle(objId,'left',l);};if(t){t=fixUnit(t);e.style.top=t;$scope.SetObjectStyle(objId,'top',t);};};$scope.MoveObject=function(objId,left,top){if($App.NAB[objId]){$App.NAB[objId].css("left",left);$App.NAB[objId].css("top",top);}else{$scope.SetObjectBounds(objId,left,top);}};$scope.ObjectToFront=function(objId){if($App.NAB[objId]){theParent=$App.NAB[objId].parent();$App.NAB[objId].detach().appendTo(theParent);}else{theParent=$("#"+objId).parent();$("#"+objId).detach().appendTo(theParent);}};$scope.ObjectToBack=function(objId){if($App.NAB[objId]){theParent=$App.NAB[objId].parent();$App.NAB[objId].detach().prependTo(theParent);}else if($("#"+objId).parent().prop("tagName")=="svg"){theParent=$("#"+objId).parent().children().first();$("#"+objId).detach().insertAfter(theParent);}else{theParent=$("#"+objId).parent();$("#"+objId).detach().prependTo(theParent);}};$scope.SizeObject=function(objId,width,height){if($App.NAB[objId]){w=fixUnit(width);h=fixUnit(height);$App.NAB[objId].css("width",w);$App.NAB[objId].css("height",h);}else{$scope.SetObjectBounds(objId,null,null,width,height);}};$scope.RotateObject=function(objId,deg){if($App.NAB[objId]){$App.NAB[objId].css("webkitTransform","rotate("+deg+"deg)");$App.NAB[objId].css("mozTransform","rotate("+deg+"deg)");$App.NAB[objId].css("msTransform","rotate("+deg+"deg)");$App.NAB[objId].css("oTransform","rotate("+deg+"deg)");$App.NAB[objId].css("transform","rotate("+deg+"deg)");}else{var e=document.getElementById(objId);e.style.webkitTransform='rotate('+deg+'deg)';e.style.mozTransform='rotate('+deg+'deg)';e.style.msTransform='rotate('+deg+'deg)';e.style.oTransform='rotate('+deg+'deg)';e.style.transform='rotate('+deg+'deg)';};};$scope.ListBoxSort=function(objId){if($("#"+objId).children("option:selected").text()==""){$("#"+objId).children("option:selected").remove();};$("#"+objId+" option").filter(function(){return!this.value||$.trim(this.value).length==0||$.trim(this.text).length==0;}).remove();var options=$("#"+objId+" option");var arr=options.map(function(_,o){return{t:$(o).text(),v:o.value};}).get();arr.sort(function(o1,o2){return o1.t>o2.t?1:o1.t<o2.t?-1:0;});options.each(function(i,o){o.value=arr[i].v;$(o).text(arr[i].t);});if($("#"+objId).children("option:selected").text()==""){$("#"+objId).children("option:selected").remove();};};$scope.ListBoxMoveItem=function(listID,direction){var listbox=document.getElementById(listID);var selIndex=listbox.selectedIndex;if(-1==selIndex){return;}var increment=-1;if(direction=='up'){if(selIndex==1){return;}else{increment=-1;}}else{increment=1;}if((selIndex+increment)<0||(selIndex+increment)>(listbox.options.length-1)){return;}var selValue=listbox.options[selIndex].value;var selText=listbox.options[selIndex].text;listbox.options[selIndex].value=listbox.options[selIndex+increment].value
listbox.options[selIndex].text=listbox.options[selIndex+increment].text
listbox.options[selIndex+increment].value=selValue;listbox.options[selIndex+increment].text=selText;listbox.selectedIndex=selIndex+increment;};$scope.OpenDialog=function(dlgId){var modalInstance=$modal.open({templateUrl:dlgId,controller:dlgId+'_Ctrl',scope:$scope,size:'sm',backdrop:'static',animation:true});};$scope.AlertBox=function(dlgTitle,dlgMsg,dlgKind,callbackFn){detect1=dlgMsg.toLowerCase().search("<script");detect2=dlgMsg.toLowerCase().search("javascript:");detect3=dlgMsg.toLowerCase().search("onclick");detect4=dlgMsg.toLowerCase().search("onmouse");if(detect1!=-1||detect2!=-1||detect3!=-1||detect4!=-1){return;}var dlgKind=dlgKind||"primary";var modalInstance=$modal.open({template:'<div class="modal-dialog" ng-class="modal-sm">'+'<div class="modal-content">'+'<div class="modal-header bg-'+dlgKind+'">'+'<h4 class="modal-title">'+dlgTitle+'</h4>'+'</div>'+'<div class="modal-body">'+'<p>'+dlgMsg+'</p>'+'</div>'+'<div class="modal-footer">'+'<button class="btn btn-primary" ng-click="CloseDialog();">OK</button>'+'</div>'+'</div>'+'</div>',controller:'App_DlgCtrl',scope:$scope,size:'sm',backdrop:'static'});if(callbackFn!=undefined){modalInstance.result.then(function(){callbackFn()},function(){callbackFn()});}};$scope.AlertBoxEx=function(dlgTitle,dlgMsg,dlgKind,theWidth,theHeight,theColor,callbackFn){detect1=dlgMsg.toLowerCase().search("<script");detect2=dlgMsg.toLowerCase().search("javascript:");detect3=dlgMsg.toLowerCase().search("onclick");detect4=dlgMsg.toLowerCase().search("onmouse");if(detect1!=-1||detect2!=-1||detect3!=-1||detect4!=-1){return;}var dlgKind=dlgKind||"primary";if(theWidth<150){theWidth=150;}if(theHeight<200){theHeight=200;}var modalBodyMaxHeight=theHeight-140;var modalInstance=$modal.open({template:'<div class="modal-dialog" style="width:'+theWidth+'px;height:'+theHeight+'px;" ng-class="modal-sm">'+'<div class="modal-content">'+'<div style="background:'+theColor+';" class="modal-header bg-'+dlgKind+'">'+'<h4 class="modal-title">'+dlgTitle+'</h4>'+'</div>'+'<div style="overflow:auto;max-height:'+modalBodyMaxHeight+'px" class="modal-body">'+'<p>'+dlgMsg+'</p>'+'</div>'+'<div class="modal-footer">'+'<button class="btn btn-custom" style="color:#fff;background:'+theColor+';" ng-click="CloseDialog();">OK</button>'+'</div>'+'</div>'+'</div>',controller:'App_DlgCtrl',scope:$scope,size:'sm',backdrop:'static'});if(callbackFn!=undefined){modalInstance.result.then(function(){callbackFn()},function(){callbackFn()});}};$scope.MessageBoxEx=function(dlgTitle,dlgMsg,dlgButtons,dlgKind,theWidth,theHeight,theColor,callbackFn){detect1=dlgMsg.toLowerCase().search("<script");detect2=dlgMsg.toLowerCase().search("javascript:");detect3=dlgMsg.toLowerCase().search("onclick");detect4=dlgMsg.toLowerCase().search("onmouse");if(detect1!=-1||detect2!=-1||detect3!=-1||detect4!=-1){return;}if(theWidth<150){theWidth=150;}if(theHeight<200){theHeight=200;}var modalBodyMaxHeight=theHeight-140;var idx;var btns=dlgButtons.split("|");var btnsHTML='';for(idx=0;idx<btns.length;idx++){btnsHTML+='<button class="btn btn-custom" style="color:#fff;background:'+theColor+';" ng-click="CloseDialogBtn('+idx.toString()+');">'+btns[idx]+'</button>';}var dlgKind=dlgKind||"primary";var modalInstance=$modal.open({template:'<div class="modal-dialog" style="width:'+theWidth+'px;height:'+theHeight+'px;" ng-class="modal-sm">'+'<div class="modal-content">'+'<div style="background:'+theColor+';" class="modal-header bg-'+dlgKind+'">'+'<h4 class="modal-title">'+dlgTitle+'</h4>'+'</div>'+'<div style="overflow:auto;max-height:'+modalBodyMaxHeight+'px" class="modal-body">'+'<p>'+dlgMsg+'</p>'+'</div>'+'<div class="modal-footer">'+btnsHTML+'</div>'+'</div>'+'</div>',controller:'App_DlgCtrl',scope:$scope,size:'sm',backdrop:'static'});if(callbackFn){modalInstance.result.then(function(value){callbackFn(value+1)},function(){callbackFn(0)});}};$scope.MessageBox=function(dlgTitle,dlgMsg,dlgButtons,dlgKind,callbackFn){detect1=dlgMsg.toLowerCase().search("<script");detect2=dlgMsg.toLowerCase().search("javascript:");detect3=dlgMsg.toLowerCase().search("onclick");detect4=dlgMsg.toLowerCase().search("onmouse");if(detect1!=-1||detect2!=-1||detect3!=-1||detect4!=-1){return;}var idx;var btns=dlgButtons.split("|");var btnsHTML='';for(idx=0;idx<btns.length;idx++){btnsHTML+='<button class="btn btn-primary" ng-click="CloseDialogBtn('+idx.toString()+');">'+btns[idx]+'</button>';}var dlgKind=dlgKind||"primary";var modalInstance=$modal.open({template:'<div class="modal-dialog" ng-class="modal-sm">'+'<div class="modal-content">'+'<div class="modal-header bg-'+dlgKind+'">'+'<h4 class="modal-title">'+dlgTitle+'</h4>'+'</div>'+'<div class="modal-body">'+'<p>'+dlgMsg+'</p>'+'</div>'+'<div class="modal-footer">'+btnsHTML+'</div>'+'</div>'+'</div>',controller:'App_DlgCtrl',scope:$scope,size:'sm',backdrop:'static'});if(callbackFn){modalInstance.result.then(function(value){callbackFn(value+1)},function(){callbackFn(0)});}};$scope.SerializeForm=function(formId){var form=document.getElementById(formId);if(!form||form.nodeName!=="FORM")return;var i,j,s,field,m,q=[];for(i=0;i<form.elements.length;i++){field=form.elements[i];if(field.name==="")continue;switch(field.nodeName){case'INPUT':switch(field.type){case'text':case'hidden':case'password':case'number':q.push(field.name+"="+encodeURIComponent(field.value));break;case'checkbox':if(angular.isElement(field)){m=angular.element(field).controller('ngModel');if(m){q.push(field.name+"="+encodeURIComponent(m.$modelValue));break;}}q.push(field.name+"="+encodeURIComponent(field.checked));break;case'radio':if(field.checked){q.push(field.name+"="+encodeURIComponent(field.value));}break;case'file':break;}break;case'TEXTAREA':q.push(field.name+"="+encodeURIComponent(field.value));break;case'SELECT':switch(field.type){case'select-one':q.push(field.name+"="+encodeURIComponent(field.value));break;case'select-multiple':s='';for(j=field.options.length-1;j>=0;j=j-1){if(field.options[j].selected){s+=','+encodeURIComponent(field.options[j].value);}}if(s.length>0)q.push(field.name+"="+s.substr(1));break;}break;}}return q.join("&");};$scope.SubmitForm=function(form,url,method,submitFn,successFn,failFn){var ok=true;if(submitFn){ok=submitFn();}if(ok&&form&&url&&method){var f=$scope.SerializeForm(form);$http({method:method,url:url,data:f,responseType:"text",headers:{'Content-Type':'application/x-www-form-urlencoded'}}).then(function(response){if(successFn)successFn(response.data,response.status);},function(response){if(failFn)failFn(response.data,response.status);});}};$scope.FormSubmit=function(formulario,url){var neoApp=angular.element(document.getElementById("ng-view")).scope();var fnsubmit=neoApp[formulario+"_submit"];var fnsuccess=neoApp[formulario+"_success"];var fnfail=neoApp[formulario+"_fail"];neoApp.SubmitForm(formulario,url,'POST',fnsubmit,fnsuccess,fnfail);};$scope.FormReset=function(formulario){$("#"+formulario).trigger("reset");};$scope.SetCompVar=function(varname,varvalue){varname2="";vararray=varname.split("[");for(n=0;n<vararray.length;n++){vararray[n]=vararray[n].replace("]","");if($App[vararray[n]]!=undefined){varname2=varname2+$App[vararray[n]];}else{varname2=varname2+vararray[n];};};$App[varname2]=varvalue;};$scope.GetCompVar=function(varname,composedvar){varname2="";vararray=composedvar.split("[");for(n=0;n<vararray.length;n++){vararray[n]=vararray[n].replace("]","");if($App[vararray[n]]!=undefined){varname2=varname2+$App[vararray[n]];}else{varname2=varname2+vararray[n];};};$App[varname]=$App[varname2];};$scope.ArraySuffle=function(array,newArray){for(n=0;n<array.length;n++){newArray[n]=array[n];}var currentIndex=newArray.length,temporaryValue,randomIndex;while(0!==currentIndex){randomIndex=Math.floor(Math.random()*currentIndex);currentIndex-=1;temporaryValue=newArray[currentIndex];newArray[currentIndex]=newArray[randomIndex];newArray[randomIndex]=temporaryValue;}};$scope.ArrayCopy=function(a,start,len){if(a&&start>-1&&len>0)return a.slice(start,start+len);return[]};$scope.LoadGoogleFont=function(fontName){$("head").append("<link href='https://fonts.googleapis.com/css?family="+fontName+"' rel='stylesheet' type='text/css'>");};$scope.LocalFileToVar=function(inputFileName,resultVar,tipo){$App.NAB.temp=resultVar;var realInputFileName=$("#"+inputFileName).prop("for");var files=$('#'+realInputFileName).prop("files");for(var i=0,f;f=files[i];i++){var reader=new FileReader();reader.onload=(function(theFile,resultVar,callBackFunction){return function(e,resultVar){varName=$App.NAB.temp;$App[varName]=e.target.result;};})(f);if(tipo=="text"){reader.readAsText(f);}else if(tipo=="binary"){reader.readAsBinaryString(f);}else if(tipo=="base64"){reader.readAsDataURL(f);}else{reader.readAsArrayBuffer(f);}};};$scope.SvgToBase64=function(theContainer,theWidth,theHeight,theType,theQuality,resultVar,callbackFn){var tagName=$("#"+theContainer).prop("tagName").toLowerCase();if(tagName=="svg"){var svg=document.getElementById(theContainer);}else{var svg=document.querySelector("#"+theContainer+" svg");}var svgToBase64PngTemp=svg.outerHTML;tempWidth=svg.getAttribute("width");if(tempWidth==null){tempWidth=theWidth;}tempHeight=svg.getAttribute("height");if(tempHeight==null){tempHeight=theHeight;}svg.setAttribute("width",theWidth);svg.setAttribute("height",theHeight);var svgData=new XMLSerializer().serializeToString(svg);var canvas=document.createElement("canvas");canvas.width=theWidth;canvas.height=theHeight;var ctx=canvas.getContext("2d");var img=document.createElement("img");img.setAttribute("src","data:image/svg+xml;base64,"+btoa(svgData));img.onload=function(){ctx.drawImage(img,0,0);svg.setAttribute("width",tempWidth);svg.setAttribute("height",tempHeight);if(theType=="jpg"){$App[resultVar]=canvas.toDataURL("image/jpeg",theQuality);if(callbackFn!=""&&callbackFn!=null&&callbackFn!=undefined){callbackFn();}}else{$App[resultVar]=canvas.toDataURL("image/png");if(callbackFn!=""&&callbackFn!=null&&callbackFn!=undefined){callbackFn();}}};};$scope.ImgToBase64=function(theImg,theType,theQuality,resultVar){var img=document.querySelector("#"+theImg);const canvas=document.createElement('canvas');const ctx=canvas.getContext('2d');canvas.width=img.naturalWidth;canvas.height=img.naturalHeight;ctx.drawImage(img,0,0);if(theType=="jpg"){$App[resultVar]=canvas.toDataURL('image/jpeg',theQuality);}else{$App[resultVar]=canvas.toDataURL('image/png');}};$scope.Base64ToLocalFile=function(dataurl,filename){var arr=dataurl.split(','),mime=arr[0].match(/:(.*?);/)[1],bstr=atob(arr[1]),n=bstr.length,u8arr=new Uint8Array(n);while(n--){u8arr[n]=bstr.charCodeAt(n);}theFile=new File([u8arr],filename,{type:mime});saveAs(theFile,filename);};$scope.ResizeDesktopWindow=function(theWidth,theHeight){if(window.matchMedia('(display-mode: standalone)').matches||window.navigator.standalone===true){window.resizeTo(theWidth,theHeight);}};$scope.FitAppToScreen=function(coverScreen,verticalAlign,horizontalAlign){$scope.AppPosition(verticalAlign,horizontalAlign);var ha=horizontalAlign.toUpperCase();var va=verticalAlign.toUpperCase();if(va=="MIDDLE"){va="CENTER"};fit(document.getElementById("ng-app"),{x:0,y:0,width:window.innerWidth,height:window.innerHeight},{cover:coverScreen,hAlign:fit[ha],vAlign:fit[va]});fit(document.getElementById("ng-app"),{x:0,y:0,width:window.innerWidth,height:window.innerHeight},{cover:coverScreen,hAlign:fit[ha],vAlign:fit[va]},function(transform){$App.NAB.AppScale=transform.scale});};$scope.IsInstalled=function(){if(window.matchMedia('(display-mode: standalone)').matches||window.navigator.standalone===true){return true;}else{return false;}};$scope.CenterApp=function(){$("body").css("position","absolute");$("body").css("top","0px");$("body").css("bottom","0px");$("body").css("left","0px");$("body").css("right","0px");$("body").css("margin","auto");$("body").css("margin","auto");};$scope.TopCenterApp=function(){$("body").css("position","absolute");$("body").css("top","0px!important");$("body").css("left","0px");$("body").css("right","0px");$("body").css("bottom","auto");$("body").css("margin","auto");};$scope.ScaleApp=function(thezoom){$App.NAB.AppScale=thezoom;$("#ng-app").css("transform-origin","50% 50%");$("#ng-app").css("transform","scale("+thezoom+","+thezoom+")");};$scope.AppPosition=function(vertical,horizontal){$('body').css("position","absolute");if(vertical=="top"){$('body').css("top","0px");$('body').css("bottom","auto");}else if(vertical=="bottom"){$('body').css("bottom","0px");$('body').css("top","auto");}else{$('body').css("bottom","0px");$('body').css("top","0px");}if(horizontal=="left"){$('body').css("left","0px");$('body').css("right","auto");}else if(horizontal=="right"){$('body').css("left","auto");$('body').css("right","0px");}else{$('body').css("left","0px");$('body').css("right","0px");}$('body').css("margin","auto");};$scope.SetResponsivePages=function(plarge,pmedium,psmall,pxsmall){if(matchMedia){const largedisp=window.matchMedia("(min-width: 1025px)");const mediumdisp=window.matchMedia("(min-width: 768px) and (max-width: 1024px)");const smalldisp=window.matchMedia("(min-width: 481px) and (max-width: 767px)");const verysmalldisp=window.matchMedia("(min-width: 320px) and (max-width: 480px)");funciones=angular.element(document.getElementById("ng-view")).scope();$("body").css("width","100%");$("body").css("height","100%");$("body").css("overflow-x","hidden");$("body").css("overflow-y","auto");largedisp.addListener(WidthChangeLarge);WidthChangeLarge(largedisp);mediumdisp.addListener(WidthChangeMedium);WidthChangeMedium(mediumdisp);smalldisp.addListener(WidthChangeSmall);WidthChangeSmall(smalldisp);verysmalldisp.addListener(WidthChangeVerySmall);WidthChangeVerySmall(verysmalldisp);function WidthChangeLarge(largedisp){if(largedisp.matches){funciones.GotoPage(plarge);}};function WidthChangeMedium(mediumdisp){if(mediumdisp.matches){funciones.GotoPage(pmedium);}};function WidthChangeSmall(smalldisp){if(smalldisp.matches){funciones.GotoPage(psmall);}};function WidthChangeVerySmall(verysmalldisp){if(verysmalldisp.matches){funciones.GotoPage(pxsmall);}};}};$scope.AppBackgroundColor=function(thecolor){$("html").css("background",thecolor);};$scope.AppBackgroundImage=function(imagen){ruta=$("#"+imagen).attr('src');$("html").css('background-image','url('+ruta+' )');$("html").css('background-repeat','no-repeat');$("html").css('background-position','center center');$("html").css('background-attachment','fixed');$("html").css("-webkit-background-size","cover");$("html").css("-moz-background-size","cover");$("html").css("-o-background-size","cover");$("html").css("background-size","cover");};$scope.ObjDisableSelection=function(objectname){$("#"+objectname).css("-webkit-touch-callout","none");$("#"+objectname).css("-webkit-user-select","none");$("#"+objectname).css("-khtml-user-select","none");$("#"+objectname).css("-moz-user-select","none");$("#"+objectname).css("-ms-user-select","none");$("#"+objectname).css("user-select","none");};$scope.DisableSelection=function(){$("*").css("-webkit-touch-callout","none");$("*").css("-webkit-user-select","none");$("*").css("-khtml-user-select","none");$("*").css("-moz-user-select","none");$("*").css("-ms-user-select","none");$("*").css("user-select","none");};$scope.GetUrlParameter=function(param){url=window.location.href;var queryString=url?url.split('?')[1]:window.location.search.slice(1);var obj={};if(queryString){queryString=queryString.split('#')[0];var arr=queryString.split('&');for(var i=0;i<arr.length;i++){var a=arr[i].split('=');var paramName=a[0];var paramValue=typeof(a[1])==='undefined'?true:a[1];if(typeof paramValue==='string')paramValue=paramValue;if(paramName.match(/\[(\d+)?\]$/)){var key=paramName.replace(/\[(\d+)?\]/,'');if(!obj[key])obj[key]=[];if(paramName.match(/\[\d+\]$/)){var index=/\[(\d+)\]/.exec(paramName)[1];obj[key][index]=paramValue;}else{obj[key].push(paramValue);}}else{if(!obj[paramName]){obj[paramName]=paramValue;}else if(obj[paramName]&&typeof obj[paramName]==='string'){obj[paramName]=[obj[paramName]];obj[paramName].push(paramValue);}else{obj[paramName].push(paramValue);}}}}return obj[param];};$scope.csvToJSON=function(mycsv,separator,jsonObject){var lines=$App[mycsv].split("\n");var result=[];var headers=lines[0].split(separator);for(var i=1;i<lines.length;i++){var obj={};var currentline=lines[i].split(separator);for(var j=0;j<headers.length;j++){obj[headers[j]]=currentline[j];}result.push(obj);}$App[jsonObject]=result;};$scope.CheckInternetConnection=function(url,timeout,successFn,errorFn){$.ajax({url:url,timeout:timeout,cache:false,success:function(){if(successFn!=undefined){successFn();}},error:function(){if(errorFn!=undefined){errorFn();}},});};$scope.SetRelativePosition=function(objectname,vertical,horizontal){$("#"+objectname).css("position","absolute");if(vertical=="top"){$("#"+objectname).css("top","0px");$("#"+objectname).css("bottom","auto");}else if(vertical=="bottom"){$("#"+objectname).css("bottom","0px");$("#"+objectname).css("top","auto");}else{$("#"+objectname).css("bottom","0px");$("#"+objectname).css("top","0px");}if(horizontal=="left"){$("#"+objectname).css("left","0px");$("#"+objectname).css("right","auto");}else if(horizontal=="right"){$("#"+objectname).css("left","auto");$("#"+objectname).css("right","0px");}else{$("#"+objectname).css("left","0px");$("#"+objectname).css("right","0px");}$("#"+objectname).css("margin","auto");};$scope.WatchVar=function(varName,fn){if($App.NAB.$Watches[varName]){if($App.NAB.$Watches[varName].deRegFn)$App.NAB.$Watches[varName].deRegFn();delete $App.NAB.$Watches[varName];};if(fn){$App.NAB.$Watches[varName]={id:varName,deRegFn:undefined};$App.NAB.$Watches[varName].deRegFn=$scope.$watch(varName,function(newVal,oldVal){if(oldVal!==newVal)fn(newVal,oldVal);});};};$scope.TimerStart=function(objId,ms){if($App.NAB.$Timers[objId]){if(!angular.isDefined($App.NAB.$Timers[objId].promise)){$App.NAB.$Timers[objId].stime=Date.now();$App.NAB.$Timers[objId].promise=$interval($App.NAB.$Timers[objId].fn,ms||1000);}}else throw'A timer named "'+objId+'" does not exist.';};$scope.TimerStop=function(objId){if($App.NAB.$Timers[objId]){if(angular.isDefined($App.NAB.$Timers[objId].promise)){$interval.cancel($App.NAB.$Timers[objId].promise);$App.NAB.$Timers[objId].promise=undefined;}}else throw'A timer named "'+objId+'" does not exist.';};$scope._DeleteSound=function(sname){if($App.NAB.$Audio[sname]){$App.NAB.$Audio[sname].player.pause();delete $App.NAB.$Audio[sname].player;delete $App.NAB.$Audio[sname];return true;}return false;};$scope.PlaySound=function(fname,loop){var sname=ExtractFileName(fname).toLowerCase();if($App.NAB.$Audio[sname])throw'A sound named "'+sname+'" is already playing.';var devicePlatform=(typeof device!=='undefined'&&device.platform)?device.platform:null;if(typeof Audio!=="undefined"&&devicePlatform===null){obj={id:sname,kind:"audio",player:new Audio(fname)};obj.player.addEventListener("ended",function(){$scope._DeleteSound(sname);});}else if(devicePlatform){if(devicePlatform==='Android'){if(!IsUrl(fname))fname='/android_asset/www/'+fname;}obj={id:sname,kind:"media",player:new Media(fname,function onSuccess(){$scope._DeleteSound(sname);},function onError(e){console.log("Error playing sound: "+JSON.stringify(e));$scope._DeleteSound(sname);})};}else throw'Sound API unavailable.';$App.NAB.$Audio[sname]=obj;if(obj.kind==="audio"){obj.player.loop=loop;obj.player.play();}else obj.player.play({numberOfLoops:loop});};$scope.StopSound=function(fname){if(!fname||fname.length===0){for(var id in $App.NAB.$Audio)$scope._DeleteSound(id);}else{var sname=ExtractFileName(fname).toLowerCase();if(!$scope._DeleteSound(sname))throw'There is no playing sound named "'+sname+'"';}};$scope.CreateVideoPlayer=function(objId,fname,controls,autoplay,looping,muted){var sname=ExtractFileName(fname).toLowerCase();if(controls){addcontrols="controls";}else{addcontrols="";}if(autoplay){addautoplay="autoplay";}else{addautoplay="";}if(looping){addloop="loop";}else{addloop="";}if(muted){addmuted="muted";}else{addmuted="";}htmlstring='<video id="'+objId+'Video" width="100%" height="100%" '+addcontrols+' '+addautoplay+' '+addloop+' '+addmuted+'><source src="'+fname+'" type="video/mp4"></video>';$("#"+objId).html(htmlstring);};$scope.OnVideoEvent=function(objId,eventName,subroutine){if($App.NAB[objId+"Video"]){$App.NAB[objId+"Video"].on(eventName,subroutine);return;}$("#"+objId+"Video").on(eventName,subroutine);};$scope.CreateAudioPlayer=function(objId,fname,controls,autoplay,looping){var sname=ExtractFileName(fname).toLowerCase();if(controls){addcontrols="controls";}else{addcontrols="";}if(autoplay){addautoplay="autoplay";}else{addautoplay="";}if(looping){addloop="loop";}else{addloop="";}htmlstring='<audio id="'+objId+'Audio" width="100%" height="100%" '+addcontrols+' '+addautoplay+' '+addloop+'><source src="'+fname+'" type="audio/mp3"></audio>';$("#"+objId).html(htmlstring);};$scope.OnAudioEvent=function(objId,eventName,subroutine){if($App.NAB[objId+"Audio"]){$App.NAB[objId+"Audio"].on(eventName,subroutine);return;}$("#"+objId+"Audio").on(eventName,subroutine);};$scope.SoundBeep=function(){var snd=new Audio("data:audio/wav;base64,//uQRAAAAWMSLwUIYAAsYkXgoQwAEaYLWfkWgAI0wWs/ItAAAGDgYtAgAyN+QWaAAihwMWm4G8QQRDiMcCBcH3Cc+CDv/7xA4Tvh9Rz/y8QADBwMWgQAZG/ILNAARQ4GLTcDeIIIhxGOBAuD7hOfBB3/94gcJ3w+o5/5eIAIAAAVwWgQAVQ2ORaIQwEMAJiDg95G4nQL7mQVWI6GwRcfsZAcsKkJvxgxEjzFUgfHoSQ9Qq7KNwqHwuB13MA4a1q/DmBrHgPcmjiGoh//EwC5nGPEmS4RcfkVKOhJf+WOgoxJclFz3kgn//dBA+ya1GhurNn8zb//9NNutNuhz31f////9vt///z+IdAEAAAK4LQIAKobHItEIYCGAExBwe8jcToF9zIKrEdDYIuP2MgOWFSE34wYiR5iqQPj0JIeoVdlG4VD4XA67mAcNa1fhzA1jwHuTRxDUQ//iYBczjHiTJcIuPyKlHQkv/LHQUYkuSi57yQT//uggfZNajQ3Vmz+Zt//+mm3Wm3Q576v////+32///5/EOgAAADVghQAAAAA//uQZAUAB1WI0PZugAAAAAoQwAAAEk3nRd2qAAAAACiDgAAAAAAABCqEEQRLCgwpBGMlJkIz8jKhGvj4k6jzRnqasNKIeoh5gI7BJaC1A1AoNBjJgbyApVS4IDlZgDU5WUAxEKDNmmALHzZp0Fkz1FMTmGFl1FMEyodIavcCAUHDWrKAIA4aa2oCgILEBupZgHvAhEBcZ6joQBxS76AgccrFlczBvKLC0QI2cBoCFvfTDAo7eoOQInqDPBtvrDEZBNYN5xwNwxQRfw8ZQ5wQVLvO8OYU+mHvFLlDh05Mdg7BT6YrRPpCBznMB2r//xKJjyyOh+cImr2/4doscwD6neZjuZR4AgAABYAAAABy1xcdQtxYBYYZdifkUDgzzXaXn98Z0oi9ILU5mBjFANmRwlVJ3/6jYDAmxaiDG3/6xjQQCCKkRb/6kg/wW+kSJ5//rLobkLSiKmqP/0ikJuDaSaSf/6JiLYLEYnW/+kXg1WRVJL/9EmQ1YZIsv/6Qzwy5qk7/+tEU0nkls3/zIUMPKNX/6yZLf+kFgAfgGyLFAUwY//uQZAUABcd5UiNPVXAAAApAAAAAE0VZQKw9ISAAACgAAAAAVQIygIElVrFkBS+Jhi+EAuu+lKAkYUEIsmEAEoMeDmCETMvfSHTGkF5RWH7kz/ESHWPAq/kcCRhqBtMdokPdM7vil7RG98A2sc7zO6ZvTdM7pmOUAZTnJW+NXxqmd41dqJ6mLTXxrPpnV8avaIf5SvL7pndPvPpndJR9Kuu8fePvuiuhorgWjp7Mf/PRjxcFCPDkW31srioCExivv9lcwKEaHsf/7ow2Fl1T/9RkXgEhYElAoCLFtMArxwivDJJ+bR1HTKJdlEoTELCIqgEwVGSQ+hIm0NbK8WXcTEI0UPoa2NbG4y2K00JEWbZavJXkYaqo9CRHS55FcZTjKEk3NKoCYUnSQ0rWxrZbFKbKIhOKPZe1cJKzZSaQrIyULHDZmV5K4xySsDRKWOruanGtjLJXFEmwaIbDLX0hIPBUQPVFVkQkDoUNfSoDgQGKPekoxeGzA4DUvnn4bxzcZrtJyipKfPNy5w+9lnXwgqsiyHNeSVpemw4bWb9psYeq//uQZBoABQt4yMVxYAIAAAkQoAAAHvYpL5m6AAgAACXDAAAAD59jblTirQe9upFsmZbpMudy7Lz1X1DYsxOOSWpfPqNX2WqktK0DMvuGwlbNj44TleLPQ+Gsfb+GOWOKJoIrWb3cIMeeON6lz2umTqMXV8Mj30yWPpjoSa9ujK8SyeJP5y5mOW1D6hvLepeveEAEDo0mgCRClOEgANv3B9a6fikgUSu/DmAMATrGx7nng5p5iimPNZsfQLYB2sDLIkzRKZOHGAaUyDcpFBSLG9MCQALgAIgQs2YunOszLSAyQYPVC2YdGGeHD2dTdJk1pAHGAWDjnkcLKFymS3RQZTInzySoBwMG0QueC3gMsCEYxUqlrcxK6k1LQQcsmyYeQPdC2YfuGPASCBkcVMQQqpVJshui1tkXQJQV0OXGAZMXSOEEBRirXbVRQW7ugq7IM7rPWSZyDlM3IuNEkxzCOJ0ny2ThNkyRai1b6ev//3dzNGzNb//4uAvHT5sURcZCFcuKLhOFs8mLAAEAt4UWAAIABAAAAAB4qbHo0tIjVkUU//uQZAwABfSFz3ZqQAAAAAngwAAAE1HjMp2qAAAAACZDgAAAD5UkTE1UgZEUExqYynN1qZvqIOREEFmBcJQkwdxiFtw0qEOkGYfRDifBui9MQg4QAHAqWtAWHoCxu1Yf4VfWLPIM2mHDFsbQEVGwyqQoQcwnfHeIkNt9YnkiaS1oizycqJrx4KOQjahZxWbcZgztj2c49nKmkId44S71j0c8eV9yDK6uPRzx5X18eDvjvQ6yKo9ZSS6l//8elePK/Lf//IInrOF/FvDoADYAGBMGb7FtErm5MXMlmPAJQVgWta7Zx2go+8xJ0UiCb8LHHdftWyLJE0QIAIsI+UbXu67dZMjmgDGCGl1H+vpF4NSDckSIkk7Vd+sxEhBQMRU8j/12UIRhzSaUdQ+rQU5kGeFxm+hb1oh6pWWmv3uvmReDl0UnvtapVaIzo1jZbf/pD6ElLqSX+rUmOQNpJFa/r+sa4e/pBlAABoAAAAA3CUgShLdGIxsY7AUABPRrgCABdDuQ5GC7DqPQCgbbJUAoRSUj+NIEig0YfyWUho1VBBBA//uQZB4ABZx5zfMakeAAAAmwAAAAF5F3P0w9GtAAACfAAAAAwLhMDmAYWMgVEG1U0FIGCBgXBXAtfMH10000EEEEEECUBYln03TTTdNBDZopopYvrTTdNa325mImNg3TTPV9q3pmY0xoO6bv3r00y+IDGid/9aaaZTGMuj9mpu9Mpio1dXrr5HERTZSmqU36A3CumzN/9Robv/Xx4v9ijkSRSNLQhAWumap82WRSBUqXStV/YcS+XVLnSS+WLDroqArFkMEsAS+eWmrUzrO0oEmE40RlMZ5+ODIkAyKAGUwZ3mVKmcamcJnMW26MRPgUw6j+LkhyHGVGYjSUUKNpuJUQoOIAyDvEyG8S5yfK6dhZc0Tx1KI/gviKL6qvvFs1+bWtaz58uUNnryq6kt5RzOCkPWlVqVX2a/EEBUdU1KrXLf40GoiiFXK///qpoiDXrOgqDR38JB0bw7SoL+ZB9o1RCkQjQ2CBYZKd/+VJxZRRZlqSkKiws0WFxUyCwsKiMy7hUVFhIaCrNQsKkTIsLivwKKigsj8XYlwt/WKi2N4d//uQRCSAAjURNIHpMZBGYiaQPSYyAAABLAAAAAAAACWAAAAApUF/Mg+0aohSIRobBAsMlO//Kk4soosy1JSFRYWaLC4qZBYWFRGZdwqKiwkNBVmoWFSJkWFxX4FFRQWR+LsS4W/rFRb/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////VEFHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAU291bmRib3kuZGUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMjAwNGh0dHA6Ly93d3cuc291bmRib3kuZGUAAAAAAAAAACU=");snd.play();};var fit=function(){"use strict";function t(t){return t.toUpperCase()}function e(t){return"number"==typeof t&&!isNaN(t)}function n(){return(new Date).getTime()}function i(t,e){for(var n=[],i=0,r=t.length;r>i;i++)n[i]=e(t[i]);return n}function r(t,e){for(var n in e)n in t||(t[n]=e[n]);return t}function o(e){if(!d)for(var n,i=H(C.body),r=w,o=0,a=T.length;a>o&&(d=T[o],n=d+r,!(n in i))&&(d=d.replace(/^(\w)/,t),n=d+r,!(n in i));o++);return d+e}function a(t){var e=H(t),n=e[o(w)].replace(/[a-z()]/gi,"").split(",");if(n.length<6)return[1,0,0,1,0,0];for(var i=0;6>i;i++)n[i]=parseFloat(n[i]);return n}function f(t,e){var n=a(e);n[0]=t.scale,n[3]=t.scale,n[4]+=t.tx,n[5]+=t.ty;var r=i(n,function(t){return t.toFixed(6)});e.style[o(m)]="0 0",e.style[o(w)]="matrix("+r.join(",")+")"}function s(t,e){var n=H(e),i=parseFloat(n.left)||0,r=parseFloat(n.top)||0;"static"===n.position&&(e.style.position="relative"),e.style.left=i+t.tx+b,e.style.top=r+t.ty+b,e.style.height=t.height+b,e.style.width=t.width+b}function l(t,e){var n=H(e),i=parseFloat(n.marginLeft)||0,r=parseFloat(n.marginTop)||0;e.style.marginLeft=i+t.tx+b,e.style.marginTop=r+t.ty+b,e.style.height=t.height+b,e.style.width=t.width+b}function h(t,e){e.height*=t.scale,e.width*=t.scale,e.x+=t.tx,e.y+=t.ty}function u(t){if(t.nodeType&&1==t.nodeType){var n=t.getBoundingClientRect();t={height:t.offsetHeight,width:t.offsetWidth,x:n.left,y:n.top}}return!e(t.x)&&e(t.left)&&(t.x=t.left),!e(t.y)&&e(t.top)&&(t.y=t.top),t}function c(){var t=n(),e=t-y;if(x>=e)clearInterval(v),v=setTimeout(c,x-e);else{for(var i=0,r=M.length;r>i;i++)M[i]();y=t}}function g(t,e,n,i,r){var o=u(t),a=u(e),s=0===o.width?R:o.width,l=0===o.height?P:o.height,c=0===a.width?I:a.width,g=0===a.height?P:a.height;R=s,B=l,I=c,P=g;var p=c/s,d=g/l,y=s/l,v=c/g,x=n.cover?d:p,m=n.cover?p:d,w=y>=v?x:m,T=s*w,O=l*w,F=n.hAlign==E?.5*(T-c):n.hAlign==L?T-c:0,b=n.vAlign==E?.5*(O-g):n.vAlign==A?O-g:0;return r=r||{},r.tx=a.x-F-o.x,r.ty=a.y-b-o.y,r.x=a.x-F-o.x*w,r.y=a.y-b-o.y*w,r.height=o.height*w,r.width=o.width*w,r.scale=w,i?i(r,t):n.apply&&(i="undefined"!=typeof HTMLElement&&t instanceof HTMLElement?f:h)(r,t),r}function p(t,e,n,i){if(!t||!e)throw"You must supply a target and a container";"function"==typeof n&&(i=n,n={}),n=r(n||{},N);var o=g(t,e,n,i);return n.watch&&(M.length||(z.addEventListener?(z.addEventListener("resize",c),z.addEventListener("orientationchange",c)):(z.attachEvent("onresize",c),z.attachEvent("onorientationchange",c))),o.trigger=function(){g(t,e,n,i,o)},o.on=function(t){var e=M.indexOf(o.trigger);~e||M.push(o.trigger),t||o.trigger()},o.off=function(){var t=M.indexOf(o.trigger);~t&&M.splice(t,1)},o.on(!0)),o}var d,y,v,x=50,m="TransformOrigin",w="Transform",T="moz ms o webkit".split(" "),E="center",A="bottom",L="right",O="left",F="top",b="px",z=window||self,C=document,H=z.getComputedStyle,M=[],N={hAlign:E,vAlign:E,watch:!1,cover:!1,apply:!0};Array.prototype.indexOf||(Array.prototype.indexOf=function(t){for(var e=0;e<this.length;++e)if(this[e]==t)return e;return-1});var R,B,I,P;return r(p,{watching:M,defaults:N,cssTransform:f,cssPosition:s,cssMargin:l,CENTER:E,BOTTOM:A,RIGHT:L,LEFT:O,TOP:F})}();"undefined"!=typeof exports&&("undefined"!=typeof module&&module.exports&&(exports=module.exports=fit),exports.fit=fit);(function(factory){if(typeof define==="function"&&define.amd){define(["jquery"],function($){return factory($)})}else if(typeof module==="object"&&typeof module.exports==="object"){exports=factory(require("jquery"))}else{factory(jQuery)}})(function($){$.easing.jswing=$.easing.swing;var pow=Math.pow,sqrt=Math.sqrt,sin=Math.sin,cos=Math.cos,PI=Math.PI,c1=1.70158,c2=c1*1.525,c3=c1+1,c4=2*PI/3,c5=2*PI/4.5;function bounceOut(x){var n1=7.5625,d1=2.75;if(x<1/d1){return n1*x*x}else if(x<2/d1){return n1*(x-=1.5/d1)*x+.75}else if(x<2.5/d1){return n1*(x-=2.25/d1)*x+.9375}else{return n1*(x-=2.625/d1)*x+.984375}}$.extend($.easing,{def:"easeOutQuad",swing:function(x){return $.easing[$.easing.def](x)},easeInQuad:function(x){return x*x},easeOutQuad:function(x){return 1-(1-x)*(1-x)},easeInOutQuad:function(x){return x<.5?2*x*x:1-pow(-2*x+2,2)/2},easeInCubic:function(x){return x*x*x},easeOutCubic:function(x){return 1-pow(1-x,3)},easeInOutCubic:function(x){return x<.5?4*x*x*x:1-pow(-2*x+2,3)/2},easeInQuart:function(x){return x*x*x*x},easeOutQuart:function(x){return 1-pow(1-x,4)},easeInOutQuart:function(x){return x<.5?8*x*x*x*x:1-pow(-2*x+2,4)/2},easeInQuint:function(x){return x*x*x*x*x},easeOutQuint:function(x){return 1-pow(1-x,5)},easeInOutQuint:function(x){return x<.5?16*x*x*x*x*x:1-pow(-2*x+2,5)/2},easeInSine:function(x){return 1-cos(x*PI/2)},easeOutSine:function(x){return sin(x*PI/2)},easeInOutSine:function(x){return-(cos(PI*x)-1)/2},easeInExpo:function(x){return x===0?0:pow(2,10*x-10)},easeOutExpo:function(x){return x===1?1:1-pow(2,-10*x)},easeInOutExpo:function(x){return x===0?0:x===1?1:x<.5?pow(2,20*x-10)/2:(2-pow(2,-20*x+10))/2},easeInCirc:function(x){return 1-sqrt(1-pow(x,2))},easeOutCirc:function(x){return sqrt(1-pow(x-1,2))},easeInOutCirc:function(x){return x<.5?(1-sqrt(1-pow(2*x,2)))/2:(sqrt(1-pow(-2*x+2,2))+1)/2},easeInElastic:function(x){return x===0?0:x===1?1:-pow(2,10*x-10)*sin((x*10-10.75)*c4)},easeOutElastic:function(x){return x===0?0:x===1?1:pow(2,-10*x)*sin((x*10-.75)*c4)+1},easeInOutElastic:function(x){return x===0?0:x===1?1:x<.5?-(pow(2,20*x-10)*sin((20*x-11.125)*c5))/2:pow(2,-20*x+10)*sin((20*x-11.125)*c5)/2+1},easeInBack:function(x){return c3*x*x*x-c1*x*x},easeOutBack:function(x){return 1+c3*pow(x-1,3)+c1*pow(x-1,2)},easeInOutBack:function(x){return x<.5?pow(2*x,2)*((c2+1)*2*x-c2)/2:(pow(2*x-2,2)*((c2+1)*(x*2-2)+c2)+2)/2},easeInBounce:function(x){return 1-bounceOut(1-x)},easeOutBounce:bounceOut,easeInOutBounce:function(x){return x<.5?(1-bounceOut(1-2*x))/2:(1+bounceOut(2*x-1))/2}})});function d(c){var b,a;if(!this.length)return this;b=this[0];b.ownerDocument?a=b.ownerDocument:(a=b,b=a.documentElement);if(null==c){if(!a.exitFullscreen&&!a.webkitExitFullscreen&&!a.webkitCancelFullScreen&&!a.msExitFullscreen&&!a.mozCancelFullScreen)return null;c=!!a.fullscreenElement||!!a.msFullscreenElement||!!a.webkitIsFullScreen||!!a.mozFullScreen;return!c?c:a.fullscreenElement||a.webkitFullscreenElement||a.webkitCurrentFullScreenElement||a.msFullscreenElement||a.mozFullScreenElement||c}c?(c=b.requestFullscreen||b.webkitRequestFullscreen||b.webkitRequestFullScreen||b.msRequestFullscreen||b.mozRequestFullScreen)&&c.call(b):(c=a.exitFullscreen||a.webkitExitFullscreen||a.webkitCancelFullScreen||a.msExitFullscreen||a.mozCancelFullScreen)&&c.call(a);return this}jQuery.fn.fullScreen=d;jQuery.fn.toggleFullScreen=function(){return d.call(this,!d.call(this))};var e,f,g;e=document;e.webkitCancelFullScreen?(f="webkitfullscreenchange",g="webkitfullscreenerror"):e.msExitFullscreen?(f="MSFullscreenChange",g="MSFullscreenError"):e.mozCancelFullScreen?(f="mozfullscreenchange",g="mozfullscreenerror"):(f="fullscreenchange",g="fullscreenerror");jQuery(document).bind(f,function(){jQuery(document).trigger(new jQuery.Event("fullscreenchange"))});jQuery(document).bind(g,function(){jQuery(document).trigger(new jQuery.Event("fullscreenerror"))});$scope.EnterFullScreen=function(){$(document).fullScreen(true);};$scope.ExitFullScreen=function(){$(document).fullScreen(false);};$scope.ObjectEnterFullScreen=function(ObjId){$("#"+ObjId).fullScreen(true);};$scope.ObjectExitFullScreen=function(ObjId){$("#"+ObjId).fullScreen(false);};var neoscript;$scope.AppOnKeyDown=function(callbackFn){$("body").keydown(function(evt){callbackFn(evt.which);});};(function(a,b){if("function"==typeof define&&define.amd)define([],b);else if("undefined"!=typeof exports)b();else{b(),a.FileSaver={exports:{}}.exports}})(this,function(){"use strict";function b(a,b){return"undefined"==typeof b?b={autoBom:!1}:"object"!=typeof b&&(console.warn("Depricated: Expected third argument to be a object"),b={autoBom:!b}),b.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a.type)?new Blob(["\uFEFF",a],{type:a.type}):a}function c(b,c,d){var e=new XMLHttpRequest;e.open("GET",b),e.responseType="blob",e.onload=function(){a(e.response,c,d)},e.onerror=function(){console.error("could not download file")},e.send()}function d(a){var b=new XMLHttpRequest;return b.open("HEAD",a,!1),b.send(),200<=b.status&&299>=b.status}function e(a){try{a.dispatchEvent(new MouseEvent("click"))}catch(c){var b=document.createEvent("MouseEvents");b.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),a.dispatchEvent(b)}}var f="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof global&&global.global===global?global:void 0,a=f.saveAs||"object"!=typeof window||window!==f?function(){}:"download"in HTMLAnchorElement.prototype?function(b,g,h){var i=f.URL||f.webkitURL,j=document.createElement("a");g=g||b.name||"download",j.download=g,j.rel="noopener","string"==typeof b?(j.href=b,j.origin===location.origin?e(j):d(j.href)?c(b,g,h):e(j,j.target="_blank")):(j.href=i.createObjectURL(b),setTimeout(function(){i.revokeObjectURL(j.href)},4E4),setTimeout(function(){e(j)},0))}:"msSaveOrOpenBlob"in navigator?function(f,g,h){if(g=g||f.name||"download","string"!=typeof f)navigator.msSaveOrOpenBlob(b(f,h),g);else if(d(f))c(f,g,h);else{var i=document.createElement("a");i.href=f,i.target="_blank",setTimeout(function(){e(i)})}}:function(a,b,d,e){if(e=e||open("","_blank"),e&&(e.document.title=e.document.body.innerText="downloading..."),"string"==typeof a)return c(a,b,d);var g="application/octet-stream"===a.type,h=/constructor/i.test(f.HTMLElement)||f.safari,i=/CriOS\/[\d]+/.test(navigator.userAgent);if((i||g&&h)&&"object"==typeof FileReader){var j=new FileReader;j.onloadend=function(){var a=j.result;a=i?a:a.replace(/^data:[^;]*;/,"data:attachment/file;"),e?e.location.href=a:location=a,e=null},j.readAsDataURL(a)}else{var k=f.URL||f.webkitURL,l=k.createObjectURL(a);e?e.location=l:location.href=l,e=null,setTimeout(function(){k.revokeObjectURL(l)},4E4)}};f.saveAs=a.saveAs=a,"undefined"!=typeof module&&(module.exports=a)});$scope.VarToFile=function(datavar,filename){var blob=new Blob([datavar],{type:"text/plain;charset=utf-8"});saveAs(blob,filename);};!function(a){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=a();else if("function"==typeof define&&define.amd)define([],a);else{var b;b="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,b.mexp=a()}}(function(){return function a(b,c,d){function e(g,h){if(!c[g]){if(!b[g]){var i="function"==typeof require&&require;if(!h&&i)return i(g,!0);if(f)return f(g,!0);var j=new Error("Cannot find module '"+g+"'");throw j.code="MODULE_NOT_FOUND",j}var k=c[g]={exports:{}};b[g][0].call(k.exports,function(a){var c=b[g][1][a];return e(c?c:a)},k,k.exports,a,b,c,d)}return c[g].exports}for(var f="function"==typeof require&&require,g=0;g<d.length;g++)e(d[g]);return e}({1:[function(a,b,c){var d=a("./postfix_evaluator.js");d.prototype.formulaEval=function(){"use strict";for(var a,b,c,d=[],e=this.value,f=0;f<e.length;f++)1===e[f].type||3===e[f].type?d.push({value:3===e[f].type?e[f].show:e[f].value,type:1}):13===e[f].type?d.push({value:e[f].show,type:1}):0===e[f].type?d[d.length-1]={value:e[f].show+("-"!=e[f].show?"(":"")+d[d.length-1].value+("-"!=e[f].show?")":""),type:0}:7===e[f].type?d[d.length-1]={value:(1!=d[d.length-1].type?"(":"")+d[d.length-1].value+(1!=d[d.length-1].type?")":"")+e[f].show,type:7}:10===e[f].type?(a=d.pop(),b=d.pop(),"P"===e[f].show||"C"===e[f].show?d.push({value:"<sup>"+b.value+"</sup>"+e[f].show+"<sub>"+a.value+"</sub>",type:10}):d.push({value:(1!=b.type?"(":"")+b.value+(1!=b.type?")":"")+"<sup>"+a.value+"</sup>",type:1})):2===e[f].type||9===e[f].type?(a=d.pop(),b=d.pop(),d.push({value:(1!=b.type?"(":"")+b.value+(1!=b.type?")":"")+e[f].show+(1!=a.type?"(":"")+a.value+(1!=a.type?")":""),type:e[f].type})):12===e[f].type&&(a=d.pop(),b=d.pop(),c=d.pop(),d.push({value:e[f].show+"("+c.value+","+b.value+","+a.value+")",type:12}));return d[0].value},b.exports=d},{"./postfix_evaluator.js":5}],2:[function(a,b,c){function d(a,b){for(var c=0;c<a.length;c++)a[c]+=b;return a}function e(a,b,c,d){for(var e=0;e<d;e++)if(a[c+e]!==b[e])return!1;return!0}var f=a("./math_function.js"),g=["sin","cos","tan","pi","(",")","P","C","asin","acos","atan","7","8","9","int","cosh","acosh","ln","^","root","4","5","6","/","!","tanh","atanh","Mod","1","2","3","*","sinh","asinh","e","log","0",".","+","-",",","Sigma","n","Pi","pow"],h=["sin","cos","tan","&pi;","(",")","P","C","asin","acos","atan","7","8","9","Int","cosh","acosh"," ln","^","root","4","5","6","&divide;","!","tanh","atanh"," Mod ","1","2","3","&times;","sinh","asinh","e"," log","0",".","+","-",",","&Sigma;","n","&Pi;","pow"],i=[f.math.sin,f.math.cos,f.math.tan,"PI","(",")",f.math.P,f.math.C,f.math.asin,f.math.acos,f.math.atan,"7","8","9",Math.floor,f.math.cosh,f.math.acosh,Math.log,Math.pow,Math.sqrt,"4","5","6",f.math.div,f.math.fact,f.math.tanh,f.math.atanh,f.math.mod,"1","2","3",f.math.mul,f.math.sinh,f.math.asinh,"E",f.math.log,"0",".",f.math.add,f.math.sub,",",f.math.sigma,"n",f.math.Pi,Math.pow],j={0:11,1:0,2:3,3:0,4:0,5:0,6:0,7:11,8:11,9:1,10:10,11:0,12:11,13:0},k=[0,0,0,3,4,5,10,10,0,0,0,1,1,1,0,0,0,0,10,0,1,1,1,2,7,0,0,2,1,1,1,2,0,0,3,0,1,6,9,9,11,12,13,12,8],l={0:!0,1:!0,3:!0,4:!0,6:!0,8:!0,9:!0,12:!0,13:!0},m={0:!0,1:!0,2:!0,3:!0,4:!0,5:!0,6:!0,7:!0,8:!0,9:!0,10:!0,11:!0,12:!0,13:!0},n={0:!0,3:!0,4:!0,8:!0,12:!0,13:!0},o={},p={0:!0,1:!0,3:!0,4:!0,6:!0,8:!0,12:!0,13:!0},q={1:!0},r=[[],["1","2","3","7","8","9","4","5","6","+","-","*","/","(",")","^","!","P","C","e","0",".",",","n"],["pi","ln","Pi"],["sin","cos","tan","Del","int","Mod","log","pow"],["asin","acos","atan","cosh","root","tanh","sinh"],["acosh","atanh","asinh","Sigma"]];f.addToken=function(a){for(var b=0;b<a.length;b++){var c=a[b].token.length,d=-1;if(c<r.length)for(var e=0;e<r[c].length;e++)if(a[b].token===r[c][e]){d=g.indexOf(r[c][e]);break}d===-1?(g.push(a[b].token),k.push(a[b].type),r.length<=a[b].token.length&&(r[a[b].token.length]=[]),r[a[b].token.length].push(a[b].token),i.push(a[b].value),h.push(a[b].show)):(g[d]=a[b].token,k[d]=a[b].type,i[d]=a[b].value,h[d]=a[b].show)}},f.lex=function(a,b){"use strict";var c,s,t,u,v={value:f.math.changeSign,type:0,pre:21,show:"-"},w={value:")",show:")",type:5,pre:0},x={value:"(",type:4,pre:0,show:"("},y=[x],z=[],A=a,B=0,C=l,D=0,E=o,F="";"undefined"!=typeof b&&f.addToken(b);var G={};for(s=0;s<A.length;s++)if(" "!==A[s]){for(c="",t=A.length-s>r.length-2?r.length-1:A.length-s;t>0;t--)for(u=0;u<r[t].length;u++)e(A,r[t][u],s,t)&&(c=r[t][u],u=r[t].length,t=0);if(s+=c.length-1,""===c)throw new f.Exception("Can't understand after "+A.slice(s));var H,I=g.indexOf(c),J=c,K=k[I],L=i[I],M=j[K],N=h[I],O=y[y.length-1];for(H=z.length;H--&&0===z[H];)if([0,2,3,5,9,11,12,13].indexOf(K)!==-1){if(C[K]!==!0)throw new f.Exception(c+" is not allowed after "+F);y.push(w),C=m,E=p,d(z,-1).pop()}if(C[K]!==!0)throw new f.Exception(c+" is not allowed after "+F);if(E[K]===!0&&(K=2,L=f.math.mul,N="&times;",M=3,s-=c.length),G={value:L,type:K,pre:M,show:N},0===K)C=l,E=o,d(z,2).push(2),y.push(G),y.push(x);else if(1===K)1===O.type?(O.value+=L,d(z,1)):y.push(G),C=m,E=n;else if(2===K)C=l,E=o,d(z,2),y.push(G);else if(3===K)y.push(G),C=m,E=p;else if(4===K)B+=z.length,z=[],D++,C=l,E=o,y.push(G);else if(5===K){if(!D)throw new f.Exception("Closing parenthesis are more than opening one, wait What!!!");for(;B--;)y.push(w);B=0,D--,C=m,E=p,y.push(G)}else if(6===K){if(O.hasDec)throw new f.Exception("Two decimals are not allowed in one number");1!==O.type&&(O={value:0,type:1,pre:0},y.push(O),d(z,-1)),C=q,d(z,1),E=o,O.value+=L,O.hasDec=!0}else 7===K&&(C=m,E=p,d(z,1),y.push(G));8===K?(C=l,E=o,d(z,4).push(4),y.push(G),y.push(x)):9===K?(9===O.type?O.value===f.math.add?(O.value=L,O.show=N,d(z,1)):O.value===f.math.sub&&"-"===N&&(O.value=f.math.add,O.show="+",d(z,1)):5!==O.type&&7!==O.type&&1!==O.type&&3!==O.type&&13!==O.type?"-"===J&&(C=l,E=o,d(z,2).push(2),y.push(v),y.push(x)):(y.push(G),d(z,2)),C=l,E=o):10===K?(C=l,E=o,d(z,2),y.push(G)):11===K?(C=l,E=o,y.push(G)):12===K?(C=l,E=o,d(z,6).push(6),y.push(G),y.push(x)):13===K&&(C=m,E=p,y.push(G)),d(z,-1),F=c}for(H=z.length;H--&&0===z[H];)y.push(w),d(z,-1).pop();if(C[5]!==!0)throw new f.Exception("complete the expression");for(;D--;)y.push(w);return y.push(w),new f(y)},b.exports=f},{"./math_function.js":3}],3:[function(a,b,c){var d=function(a){this.value=a};d.math={isDegree:!0,acos:function(a){return d.math.isDegree?180/Math.PI*Math.acos(a):Math.acos(a)},add:function(a,b){return a+b},asin:function(a){return d.math.isDegree?180/Math.PI*Math.asin(a):Math.asin(a)},atan:function(a){return d.math.isDegree?180/Math.PI*Math.atan(a):Math.atan(a)},acosh:function(a){return Math.log(a+Math.sqrt(a*a-1))},asinh:function(a){return Math.log(a+Math.sqrt(a*a+1))},atanh:function(a){return Math.log((1+a)/(1-a))},C:function(a,b){var c=1,e=a-b,f=b;f<e&&(f=e,e=b);for(var g=f+1;g<=a;g++)c*=g;return c/d.math.fact(e)},changeSign:function(a){return-a},cos:function(a){return d.math.isDegree&&(a=d.math.toRadian(a)),Math.cos(a)},cosh:function(a){return(Math.pow(Math.E,a)+Math.pow(Math.E,-1*a))/2},div:function(a,b){return a/b},fact:function(a){if(a%1!==0)return"NaN";for(var b=1,c=2;c<=a;c++)b*=c;return b},inverse:function(a){return 1/a},log:function(a){return Math.log(a)/Math.log(10)},mod:function(a,b){return a%b},mul:function(a,b){return a*b},P:function(a,b){for(var c=1,d=Math.floor(a)-Math.floor(b)+1;d<=Math.floor(a);d++)c*=d;return c},Pi:function(a,b,c){for(var d=1,e=a;e<=b;e++)d*=Number(c.postfixEval({n:e}));return d},pow10x:function(a){for(var b=1;a--;)b*=10;return b},sigma:function(a,b,c){for(var d=0,e=a;e<=b;e++)d+=Number(c.postfixEval({n:e}));return d},sin:function(a){return d.math.isDegree&&(a=d.math.toRadian(a)),Math.sin(a)},sinh:function(a){return(Math.pow(Math.E,a)-Math.pow(Math.E,-1*a))/2},sub:function(a,b){return a-b},tan:function(a){return d.math.isDegree&&(a=d.math.toRadian(a)),Math.tan(a)},tanh:function(a){return d.sinha(a)/d.cosha(a)},toRadian:function(a){return a*Math.PI/180}},d.Exception=function(a){this.message=a},b.exports=d},{}],4:[function(a,b,c){var d=a("./lexer.js");d.prototype.toPostfix=function(){"use strict";for(var a,b,c,e,f,g=[],h=[{value:"(",type:4,pre:0}],i=this.value,j=1;j<i.length;j++)if(1===i[j].type||3===i[j].type||13===i[j].type)1===i[j].type&&(i[j].value=Number(i[j].value)),g.push(i[j]);else if(4===i[j].type)h.push(i[j]);else if(5===i[j].type)for(;4!==(b=h.pop()).type;)g.push(b);else if(11===i[j].type){for(;4!==(b=h.pop()).type;)g.push(b);h.push(b)}else{a=i[j],e=a.pre,f=h[h.length-1],c=f.pre;var k="Math.pow"==f.value&&"Math.pow"==a.value;if(e>c)h.push(a);else{for(;c>=e&&!k||k&&e<c;)b=h.pop(),f=h[h.length-1],g.push(b),c=f.pre,k="Math.pow"==a.value&&"Math.pow"==f.value;h.push(a)}}return new d(g)},b.exports=d},{"./lexer.js":2}],5:[function(a,b,c){var d=a("./postfix.js");d.prototype.postfixEval=function(a){"use strict";a=a||{},a.PI=Math.PI,a.E=Math.E;for(var b,c,e,f=[],g=this.value,h="undefined"!=typeof a.n,i=0;i<g.length;i++)1===g[i].type?f.push({value:g[i].value,type:1}):3===g[i].type?f.push({value:a[g[i].value],type:1}):0===g[i].type?"undefined"==typeof f[f.length-1].type?f[f.length-1].value.push(g[i]):f[f.length-1].value=g[i].value(f[f.length-1].value):7===g[i].type?"undefined"==typeof f[f.length-1].type?f[f.length-1].value.push(g[i]):f[f.length-1].value=g[i].value(f[f.length-1].value):8===g[i].type?(b=f.pop(),c=f.pop(),f.push({type:1,value:g[i].value(c.value,b.value)})):10===g[i].type?(b=f.pop(),c=f.pop(),"undefined"==typeof c.type?(c.value=c.concat(b),c.value.push(g[i]),f.push(c)):"undefined"==typeof b.type?(b.unshift(c),b.push(g[i]),f.push(b)):f.push({type:1,value:g[i].value(c.value,b.value)})):2===g[i].type||9===g[i].type?(b=f.pop(),c=f.pop(),"undefined"==typeof c.type?(console.log(c),c=c.concat(b),c.push(g[i]),f.push(c)):"undefined"==typeof b.type?(b.unshift(c),b.push(g[i]),f.push(b)):f.push({type:1,value:g[i].value(c.value,b.value)})):12===g[i].type?(b=f.pop(),"undefined"!=typeof b.type&&(b=[b]),c=f.pop(),e=f.pop(),f.push({type:1,value:g[i].value(e.value,c.value,new d(b))})):13===g[i].type&&(h?f.push({value:a[g[i].value],type:3}):f.push([g[i]]));if(f.length>1)throw new d.exception("Uncaught Syntax error");return f[0].value>1e15?"Infinity":parseFloat(f[0].value.toFixed(15))},d.eval=function(a,b,c){return"undefined"==typeof b?this.lex(a).toPostfix().postfixEval():"undefined"==typeof c?"undefined"!=typeof b.length?this.lex(a,b).toPostfix().postfixEval():this.lex(a).toPostfix().postfixEval(b):this.lex(a,b).toPostfix().postfixEval(c)},b.exports=d},{"./postfix.js":4}]},{},[1])(1)});$scope.Calculate=function(formula,decimals){var numero=mexp.eval(formula);if(decimals!=-1){potencia=Math.pow(10,decimals);numero=Math.round(numero*potencia)/potencia;}return numero;};$(document).mousemove(function(evt){if($App.NAB.AppScale==0){$App.NAB.AppScale=1;}var x=((evt.pageX-$('body').offset().left)+$(window).scrollLeft())/$App.NAB.AppScale;var y=((evt.pageY-$('body').offset().top)+$(window).scrollTop())/$App.NAB.AppScale;var sx=((evt.pageX+$(window).scrollLeft())/$App.NAB.AppScale);var sy=((evt.pageY+$(window).scrollTop())/$App.NAB.AppScale);$App.NAB.MouseX=Math.round(x);$App.NAB.MouseY=Math.round(y);$App.NAB.MouseScreenX=Math.round(sx);$App.NAB.MouseScreenY=Math.round(sy);});$(document).on("touchmove",function(evt){if($App.NAB.AppScale==0){$App.NAB.AppScale=1;}var x=((evt.touches[0].clientX-$('body').offset().left)+$(window).scrollLeft())/$App.NAB.AppScale;var y=((evt.touches[0].clientY-$('body').offset().top)+$(window).scrollTop())/$App.NAB.AppScale;$App.NAB.TouchX=Math.round(x);$App.NAB.TouchY=Math.round(y);});$(document).on("touchstart",function(evt){if($App.NAB.AppScale==0){$App.NAB.AppScale=1;}var x=((evt.touches[0].clientX-$('body').offset().left)+$(window).scrollLeft())/$App.NAB.AppScale;var y=((evt.touches[0].clientY-$('body').offset().top)+$(window).scrollTop())/$App.NAB.AppScale;$App.NAB.TouchX=Math.round(x);$App.NAB.TouchY=Math.round(y);});
$App.NAB={PageList:["Home","VesrionHistory","Betanew1","Betanew2","Betanew3","BetaSettings","xxxxxxxxxxxxxxxxxpph","KarboMain","Karbo01","Karbo2","Karbo3","Karbo4","Karbo5","Karbo6","Karbo7","Karbo8","Karbo9","Karbo10","Karbo","xxxxxxxxxxxxxxxKarbooxxx","PhHome","Ph1Main","Ph2Main","Ph3Main","Ph4Main","Ph5Main","Ph6Main","Ph7Main","Ph8Main","Ph9Main","Ph10Main","xxxxxxxxxxxxxxxxxx","ADHDHome","HEADERS","Diary1","HeadersPh","HeadersQuestions","Settings1","ADHDhelper","xxxxxxxxxxxxxxxxxad","q1","q2","Q3","q4","q5","q6","q7","q8","q9","q10","q11","AD1main","x1xxxxxxxxxxxxxxxad","AD2main","xxxpxxxxxxxxxxxxxph","Prayer","xxxxxxxxxxxxprayxxxx","Rep1","xxxxxxxxxxrepxxxxxxx","Projectmanager","H1Main","H1m2","H1m3","xxxxxxxxxxxxxxxx1","H2Main","H2m2","H2m3","xxxxxxxxxxxxxxxx2","H3Main","H3m2","H3m3","xxxxxxxxxxxxxxxx3","H4Main","H4m2","H4M3","xxxxxxxxxxxxxxxx4","H5Main","HV1","HV2","H5M2","H5M3","xxxxxxxxxxxxxxxx5","H6Main","H6M2","H6M3","xxxxxxxxxxxxxxxx6","H7Main","H7M2","H7M3","xxxxxxxxxxxxxxxx7","H8Main","H9main","H10Main","H8M2","H8M3","xxxxxxxxxxxxxxxx8","Rulz","R1more","R2more","R3more","R4more","R5more","R6more","R7more","R8more","R9more","R10more","R11more"],PageEnterEffect:["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],PageCount:108,PageExitEffect:["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],PageNumber:1,AppScale:1,PageID:"",Hour:"",Hour24:"",Minute:"",Second:"",Time:"",Time24:"",DateShort:"",DateLong:"",DateFull:"",Month:"",MonthNum:"",WeekNum:"",Day:"",DayNum:"",Year:"",ClientWidth:$window.innerWidth,ClientHeight:$window.innerHeight,WindowWidth:$window.outerWidth,WindowHeight:$window.outerHeight,Orientation:$scope.GetOrientation(),OperatingSystem:"",$Watches:{},$Timers:{},$Audio:{}};$scope.__doUpdate=function(){var Now=new Date();$App.NAB.Hour=$filter("date")(Now,"h");$App.NAB.Hour24=$filter("date")(Now,"H");$App.NAB.Minute=$filter("date")(Now,"mm");$App.NAB.Second=$filter("date")(Now,"ss");$App.NAB.Time=$filter("date")(Now,"mediumTime");$App.NAB.Time24=$filter("date")(Now,"H:mm:ss");$App.NAB.DateShort=$filter("date")(Now,"shortDate");$App.NAB.DateLong=$filter("date")(Now,"longDate");$App.NAB.DateFull=$filter("date")(Now,"fullDate");$App.NAB.Month=$filter("date")(Now,"MMMM");$App.NAB.MonthNum=$filter("date")(Now,"M");$App.NAB.WeekNum=$filter("date")(Now,"w");$App.NAB.Day=$filter("date")(Now,"EEEE");$App.NAB.DayNum=$filter("date")(Now,"d");$App.NAB.Year=$filter("date")(Now,"yyyy");};$scope.__doOrientationChange=function(){$App.NAB.Orientation=$scope.GetOrientation();};$scope.__doResize=function(){$App.NAB.ClientWidth=$window.innerWidth;$App.NAB.ClientHeight=$window.innerHeight;$App.NAB.WindowWidth=$window.outerWidth;$App.NAB.WindowHeight=$window.outerHeight;};$scope.__init=function(){angular.element($window).bind("orientationchange.app",function(){$timeout($scope.__doOrientationChange);});angular.element($window).bind("resize.app",function(){$timeout($scope.__doResize);});$interval($scope.__doUpdate,1000);$App.NAB.OperatingSystem=GetPlatform();$scope.__doUpdate();};
$scope.Home_pageenter = function() {$App.Prayer1main = localStorage.getItem("Prayer1main");
$App.Rep1main = localStorage.getItem("Rep1main");
$App.diary1 = localStorage.getItem("diary1");
$App.b1h = localStorage.getItem("b1h");
$App.b1 = localStorage.getItem("b1");
$App.b2h = localStorage.getItem("b2h");
$App.b2 = localStorage.getItem("b2");
$App.b3h = localStorage.getItem("b3h");
$App.b3 = localStorage.getItem("b3");
$App.Lmmain = localStorage.getItem("Lmmain");
$App.Lm01 = localStorage.getItem("Lm01");
$App.Lm02 = localStorage.getItem("Lm02");
$App.Lm03 = localStorage.getItem("Lm03");
$App.Lm04 = localStorage.getItem("Lm04");
$App.Lm05 = localStorage.getItem("Lm05");
$App.Lm06 = localStorage.getItem("Lm06");
$App.Lm07 = localStorage.getItem("Lm07");
$App.Lm08 = localStorage.getItem("Lm08");
$App.Lm09 = localStorage.getItem("Lm09");
$App.Lm10 = localStorage.getItem("Lm10");
$App.Hv1 = localStorage.getItem("Hv1");
$App.Hv2 = localStorage.getItem("Hv2");
$App.Hv3 = localStorage.getItem("Hv3");
$App.Hv4 = localStorage.getItem("Hv4");
$App.Hv5 = localStorage.getItem("Hv5");
$App.Hv6 = localStorage.getItem("Hv6");
$App.Hv7 = localStorage.getItem("Hv7");
$App.Hv8 = localStorage.getItem("Hv8");
$App.Hv1d = localStorage.getItem("Hv1d");
$App.Hv2d = localStorage.getItem("Hv2d");
$App.Hv3d = localStorage.getItem("Hv3d");
$App.Hv4d = localStorage.getItem("Hv4d");
$App.Hv5d = localStorage.getItem("Hv5d");
$App.Hv6d = localStorage.getItem("Hv6d");
$App.Hv7d = localStorage.getItem("Hv7d");
$App.Hv8d = localStorage.getItem("Hv8d");
$App.h1 = localStorage.getItem("h1");
$App.h2 = localStorage.getItem("h2");
$App.h3 = localStorage.getItem("h3");
$App.h4 = localStorage.getItem("h4");
$App.h5 = localStorage.getItem("h5");
$App.h6 = localStorage.getItem("h6");
$App.h7 = localStorage.getItem("h7");
$App.h8 = localStorage.getItem("h8");
$App.h9 = localStorage.getItem("h9");
$App.h10 = localStorage.getItem("h10");
$App.h11 = localStorage.getItem("h11");
$App.h12 = localStorage.getItem("h12");
$App.h13 = localStorage.getItem("h13");
$App.h14 = localStorage.getItem("h14");
$App.h15 = localStorage.getItem("h15");
$App.h16 = localStorage.getItem("h16");
$App.h17 = localStorage.getItem("h17");
$App.h18 = localStorage.getItem("h18");
$App.Ph1due = localStorage.getItem("Ph1due");
$App.Ph2due = localStorage.getItem("ph2due");
$App.Ph3due = localStorage.getItem("Ph3due");
$App.Ph4due = localStorage.getItem("Ph4due");
$App.Ph5due = localStorage.getItem("Ph5due");
$App.Ph6due = localStorage.getItem("Ph6due");
$App.Ph7due = localStorage.getItem("Ph7due");
$App.Ph9due = localStorage.getItem("Ph8due");
$App.Ph9due = localStorage.getItem("Ph9due");
$App.Ph10due = localStorage.getItem("Ph10due");
$App.h1link1 = localStorage.getItem("h1link1");
$App.h6link1 = localStorage.getItem("h6link1");
$App.h6link2 = localStorage.getItem("h6link2");
$App.h6link3 = localStorage.getItem("h6link3");
$App.h6link4 = localStorage.getItem("h6link4");
$App.h6link5 = localStorage.getItem("h6link5");
$App.L1 = localStorage.getItem("L1");
$App.L2 = localStorage.getItem("L2");
$App.L3 = localStorage.getItem("L3");
$App.L4 = localStorage.getItem("L4");
$App.L5 = localStorage.getItem("L5");
$App.ad1 = localStorage.getItem("ad1");
$App.ad2 = localStorage.getItem("ad2");
$App.ad3 = localStorage.getItem("ad3");
$App.ad4 = localStorage.getItem("ad4");
$App.ad5 = localStorage.getItem("ad5");
$App.ad6 = localStorage.getItem("ad6");
$App.ad7 = localStorage.getItem("ad7");
$App.ad8 = localStorage.getItem("ad8");
$App.ad9 = localStorage.getItem("ad9");
$App.ad10 = localStorage.getItem("ad10");
$App.ad11 = localStorage.getItem("ad11");
$App.ad12 = localStorage.getItem("ad12");
$App.ad13 = localStorage.getItem("ad13");
$App.ad14 = localStorage.getItem("ad14");
$App.ad15 = localStorage.getItem("ad15");
$App.ad16 = localStorage.getItem("ad16");
$App.ad17 = localStorage.getItem("ad17");
$App.ad18 = localStorage.getItem("ad18");
$App.Q1 = localStorage.getItem("Q1");
$App.Q2 = localStorage.getItem("Q2");
$App.Q3 = localStorage.getItem("Q3");
$App.Q4 = localStorage.getItem("Q4");
$App.Q5 = localStorage.getItem("Q5");
$App.Q6 = localStorage.getItem("Q6");
$App.Q7 = localStorage.getItem("Q7");
$App.Q8 = localStorage.getItem("Q8");
$App.Q9 = localStorage.getItem("Q9");
$App.Q10 = localStorage.getItem("Q10");
$App.Q11 = localStorage.getItem("Q11");
$App.Q12 = localStorage.getItem("Q12");
$App.Q13 = localStorage.getItem("Q13");
$App.Q14 = localStorage.getItem("Q14");
$App.Q15 = localStorage.getItem("Q15");
$App.Q16 = localStorage.getItem("Q16");
$App.Q17 = localStorage.getItem("Q17");
$App.Q18 = localStorage.getItem("Q18");
$App.QA1 = localStorage.getItem("QA1");
$App.QA2 = localStorage.getItem("QA2");
$App.QA3 = localStorage.getItem("QA3");
$App.QA4 = localStorage.getItem("QA4");
$App.QA5 = localStorage.getItem("QA5");
$App.QA6 = localStorage.getItem("QA6");
$App.QA7 = localStorage.getItem("QA7");
$App.QA8 = localStorage.getItem("QA8");
$App.QA9 = localStorage.getItem("QA9");
$App.QA10 = localStorage.getItem("QA10");
$App.QA11 = localStorage.getItem("QA11");
$App.QA12 = localStorage.getItem("QA12");
$App.QA13 = localStorage.getItem("QA13");
$App.QA14 = localStorage.getItem("QA14");
$App.QA15 = localStorage.getItem("QA15");
$App.QA16 = localStorage.getItem("QA16");
$App.QA17 = localStorage.getItem("QA17");
$App.QA18 = localStorage.getItem("QA18");
$App.ph1 = localStorage.getItem("ph1");
$App.ph2 = localStorage.getItem("ph2");
$App.ph3 = localStorage.getItem("ph3");
$App.ph4 = localStorage.getItem("ph4");
$App.ph5 = localStorage.getItem("ph5");
$App.ph6 = localStorage.getItem("ph6");
$App.ph7 = localStorage.getItem("ph7");
$App.ph8 = localStorage.getItem("ph8");
$App.ph9 = localStorage.getItem("ph9");
$App.ph10 = localStorage.getItem("ph10");
$App.ph11 = localStorage.getItem("ph11");
$App.ph12 = localStorage.getItem("ph12");
$App.ph13 = localStorage.getItem("ph13");
$App.ph14 = localStorage.getItem("ph14");
$App.ph15 = localStorage.getItem("ph15");
$App.ph16 = localStorage.getItem("ph16");
$App.ph17 = localStorage.getItem("ph17");
$App.ph18 = localStorage.getItem("ph18");
$App.Q1mainHlight1 = localStorage.getItem("Q1mainHlight1");
$App.Q2mainHlight1 = localStorage.getItem("Q2mainHlight1");
$App.Q3mainHlight1 = localStorage.getItem("Q3mainHlight1");
$App.Q4mainHlight1 = localStorage.getItem("Q4mainHlight1");
$App.Q5mainHlight1 = localStorage.getItem("Q5mainHlight1");
$App.Q6mainHlight1 = localStorage.getItem("Q6mainHlight1");
$App.Q7mainHlight1 = localStorage.getItem("Q7mainHlight1");
$App.Q8mainHlight1 = localStorage.getItem("Q8mainHlight1");
$App.Q9mainHlight1 = localStorage.getItem("Q9mainHlight1");
$App.Q10mainHlight1 = localStorage.getItem("Q10mainHlight1");
$App.Q11mainHlight1 = localStorage.getItem("Q11mainHlight1");
$App.Q12mainHlight1 = localStorage.getItem("Q12mainHlight1");
$App.Q13mainHlight1 = localStorage.getItem("Q13mainHlight1");
$App.Q14mainHlight1 = localStorage.getItem("Q14mainHlight1");
$App.Q15mainHlight1 = localStorage.getItem("Q15mainHlight1");
$App.Q16mainHlight1 = localStorage.getItem("Q16mainHlight1");
$App.Q17mainHlight1 = localStorage.getItem("Q17mainHlight1");
$App.Q18mainHlight1 = localStorage.getItem("Q18mainHlight1");
$App.h1note1 = localStorage.getItem("h1note1");
$App.h2note1 = localStorage.getItem("h2note1");
$App.h3note1 = localStorage.getItem("h3note1");
$App.h4note1 = localStorage.getItem("h4note1");
$App.h5note1 = localStorage.getItem("h5note1");
$App.h6note1 = localStorage.getItem("h6note1");
$App.h7note1 = localStorage.getItem("h7note1");
$App.h8note1 = localStorage.getItem("h8note1");
$App.h1note2 = localStorage.getItem("h1note2");
$App.h2note2 = localStorage.getItem("h2note2");
$App.h3note2 = localStorage.getItem("h3note2");
$App.h4note2 = localStorage.getItem("h4note2");
$App.h5note2 = localStorage.getItem("h5note2");
$App.h6note2 = localStorage.getItem("h6note2");
$App.h7note2 = localStorage.getItem("h7note2");
$App.h8note2 = localStorage.getItem("h8note2");
$App.h1due = localStorage.getItem("h1due");
$App.h2due = localStorage.getItem("h2due");
$App.h3due = localStorage.getItem("h3due");
$App.h4due = localStorage.getItem("h4due");
$App.h5due = localStorage.getItem("h5due");
$App.h6due = localStorage.getItem("h6due");
$App.h7due = localStorage.getItem("h7due");
$App.h9due = localStorage.getItem("h8due");
$App.h9due = localStorage.getItem("h9due");
$App.h10due = localStorage.getItem("h10due");
$App.h1next = localStorage.getItem("h1next");
$App.h2next = localStorage.getItem("h2next");
$App.h3next = localStorage.getItem("h3next");
$App.h4next = localStorage.getItem("h4next");
$App.h5next = localStorage.getItem("h5next");
$App.h6next = localStorage.getItem("h6next");
$App.h7next = localStorage.getItem("h7next");
$App.h9next = localStorage.getItem("h8next");
$App.h9next = localStorage.getItem("h9next");
$App.h10next = localStorage.getItem("h10next");
$App.h1mainHlight1 = localStorage.getItem("h1mainHlight1");
$App.h2mainHlight1 = localStorage.getItem("h2mainHlight1");
$App.h3mainHlight1 = localStorage.getItem("h3mainHlight1");
$App.h4mainHlight1 = localStorage.getItem("h4mainHlight1");
$App.h5mainHlight1 = localStorage.getItem("h5mainHlight1");
$App.h6mainHlight1 = localStorage.getItem("h6mainHlight1");
$App.h7mainHlight1 = localStorage.getItem("h7mainHlight1");
$App.h8mainHlight1 = localStorage.getItem("h8mainHlight1");
$App.h1mainCR = localStorage.getItem("h1mainCR");
$App.h2mainCR = localStorage.getItem("h2mainCR");
$App.h3mainCR = localStorage.getItem("h3mainCR");
$App.h4mainCR = localStorage.getItem("h4mainCR");
$App.h5mainCR = localStorage.getItem("h5mainCR");
$App.h6mainCR = localStorage.getItem("h6mainCR");
$App.h7mainCR = localStorage.getItem("h7mainCR");
$App.h8mainCR = localStorage.getItem("h9mainCR");
$App.h1p = localStorage.getItem("h1p");
$App.h2p = localStorage.getItem("h2p");
$App.h3p = localStorage.getItem("h3p");
$App.h4p = localStorage.getItem("h4p");
$App.h5p = localStorage.getItem("h5p");
$App.h6p = localStorage.getItem("h6p");
$App.h1n = localStorage.getItem("h1n");
$App.h2n = localStorage.getItem("h2n");
$App.h3n = localStorage.getItem("h3n");
$App.h4n = localStorage.getItem("h4n");
$App.h5n = localStorage.getItem("h5n");
$App.h6n = localStorage.getItem("h6n");
$App.h1ps = localStorage.getItem("h1ps");
$App.h2ps = localStorage.getItem("h2ps");
$App.h3ps = localStorage.getItem("h3ps");
$App.h4ps = localStorage.getItem("h4ps");
$App.h5ps = localStorage.getItem("h5ps");
$App.h6ps = localStorage.getItem("h6ps");
$App.h1ns = localStorage.getItem("h1ns");
$App.h2ns = localStorage.getItem("h2ns");
$App.h3ns = localStorage.getItem("h3ns");
$App.h4ns = localStorage.getItem("h4ns");
$App.h5ns = localStorage.getItem("h5ns");
$App.h6ns = localStorage.getItem("h6ns");
$App.h2pb1 = localStorage.getItem("h2pb1");
$App.h1pb2 = localStorage.getItem("h1pb2");
$App.h1pb1 = localStorage.getItem("h1pb1");
$App.h2pb2 = localStorage.getItem("h2pb2");
$App.h1pb3 = localStorage.getItem("h1pb3");
$App.h2pb4 = localStorage.getItem("h2pb4");
$App.h1pb5 = localStorage.getItem("h1pb5");
$App.h1pb6 = localStorage.getItem("h1pb6");
$App.h1main = localStorage.getItem("h1main");
$App.h2main = localStorage.getItem("h2main");
$App.h3main = localStorage.getItem("h3main");
$App.h4main = localStorage.getItem("h4main");
$App.h5main = localStorage.getItem("h5main");
$App.h6main = localStorage.getItem("h6main");
$App.h7main = localStorage.getItem("h7main");
$App.h8main = localStorage.getItem("h8main");
$App.h5d = localStorage.getItem("h5d");
if ($App.h1 == "") {
neoGSheetsLoadCell($App.mccwa,"h1","A",1,null);

} else {
};
if ($App.h2 == "") {
neoGSheetsLoadCell($App.mccwa,"h2","A",2,null);

} else {
};
if ($App.h3 == "") {
neoGSheetsLoadCell($App.mccwa,"h3","A",3,null);

} else {
};
if ($App.h4 == "") {
neoGSheetsLoadCell($App.mccwa,"h4","A",4,null);

} else {
};
if ($App.h5 == "") {
neoGSheetsLoadCell($App.mccwa,"h5","A",5,null);

} else {
};
if ($App.h6 == "") {
neoGSheetsLoadCell($App.mccwa,"h6","A",6,null);

} else {
};
if ($App.h7 == "") {
neoGSheetsLoadCell($App.mccwa,"h7","A",7,null);

} else {
};
if ($App.h8 == "") {
neoGSheetsLoadCell($App.mccwa,"h8","A",8,null);

} else {
};
if ($App.h1main == "") {
neoGSheetsLoadCell($App.mccwa,"h1main","B",1,null);

} else {
};
if ($App.h2main == "") {
neoGSheetsLoadCell($App.mccwa,"h2main","B",2,null);

} else {
};
if ($App.h3main == "") {
neoGSheetsLoadCell($App.mccwa,"h3","B",3,null);

} else {
};
if ($App.h4main == "") {
neoGSheetsLoadCell($App.mccwa,"h4main","B",4,null);

} else {
};
if ($App.h5main == "") {
neoGSheetsLoadCell($App.mccwa,"h5main","B",5,null);

} else {
};
if ($App.h6main == "") {
neoGSheetsLoadCell($App.mccwa,"h6main","6",6,null);

} else {
};
if ($App.h7main == "") {
neoGSheetsLoadCell($App.mccwa,"h7main","7",7,null);

} else {
};
if ($App.h8main == "") {
neoGSheetsLoadCell($App.mccwa,"h8main","B",8,null);

} else {
};};
$scope.VesrionHistory_pageenter = function() {$App.h1 = localStorage.getItem("h1");
$App.h2 = localStorage.getItem("h2");
$App.h3 = localStorage.getItem("h3");
$App.h4 = localStorage.getItem("h4");
$App.h5 = localStorage.getItem("h5");
$App.h6 = localStorage.getItem("h6");
$App.h7 = localStorage.getItem("h7");
$App.h8 = localStorage.getItem("h8");
$App.h9 = localStorage.getItem("h9");
$App.h10 = localStorage.getItem("h10");
$App.h11 = localStorage.getItem("h11");
$App.h12 = localStorage.getItem("h12");
$App.h13 = localStorage.getItem("h13");
$App.h14 = localStorage.getItem("h14");
$App.h15 = localStorage.getItem("h15");
$App.h16 = localStorage.getItem("h16");
$App.h17 = localStorage.getItem("h17");
$App.h18 = localStorage.getItem("h18");
$App.ad1 = localStorage.getItem("ad1");
$App.ad2 = localStorage.getItem("ad2");
$App.ad3 = localStorage.getItem("ad3");
$App.ad4 = localStorage.getItem("ad4");
$App.ad5 = localStorage.getItem("ad5");
$App.ad6 = localStorage.getItem("ad6");
$App.ad7 = localStorage.getItem("ad7");
$App.ad8 = localStorage.getItem("ad8");
$App.ad9 = localStorage.getItem("ad9");
$App.ad10 = localStorage.getItem("ad10");
$App.ad11 = localStorage.getItem("ad11");
$App.ad12 = localStorage.getItem("ad12");
$App.ad13 = localStorage.getItem("ad13");
$App.ad14 = localStorage.getItem("ad14");
$App.ad15 = localStorage.getItem("ad15");
$App.ad16 = localStorage.getItem("ad16");
$App.ad17 = localStorage.getItem("ad17");
$App.ad18 = localStorage.getItem("ad18");
$App.h1note1 = localStorage.getItem("h1note1");
$App.h2note1 = localStorage.getItem("h2note1");
$App.h3note1 = localStorage.getItem("h3note1");
$App.h4note1 = localStorage.getItem("h4note1");
$App.h5note1 = localStorage.getItem("h5note1");
$App.h6note1 = localStorage.getItem("h6note1");
$App.h7note1 = localStorage.getItem("h7note1");
$App.h8note1 = localStorage.getItem("h8note1");
$App.h1note2 = localStorage.getItem("h1note2");
$App.h2note2 = localStorage.getItem("h2note2");
$App.h3note2 = localStorage.getItem("h3note2");
$App.h4note2 = localStorage.getItem("h4note2");
$App.h5note2 = localStorage.getItem("h5note2");
$App.h6note2 = localStorage.getItem("h6note2");
$App.h7note2 = localStorage.getItem("h7note2");
$App.h8note2 = localStorage.getItem("h8note2");
$App.h1due = localStorage.getItem("h1due");
$App.h2due = localStorage.getItem("h2due");
$App.h3due = localStorage.getItem("h3due");
$App.h4due = localStorage.getItem("h4due");
$App.h5due = localStorage.getItem("h5due");
$App.h6due = localStorage.getItem("h6due");
$App.h7due = localStorage.getItem("h7due");
$App.h9due = localStorage.getItem("h8due");
$App.h1next = localStorage.getItem("h1next");
$App.h2next = localStorage.getItem("h2next");
$App.h3next = localStorage.getItem("h3next");
$App.h4next = localStorage.getItem("h4next");
$App.h5next = localStorage.getItem("h5next");
$App.h6next = localStorage.getItem("h6next");
$App.h7next = localStorage.getItem("h7next");
$App.h9next = localStorage.getItem("h8next");
$App.h1mainHlight1 = localStorage.getItem("h1mainHlight1");
$App.h2mainHlight1 = localStorage.getItem("h2mainHlight1");
$App.h3mainHlight1 = localStorage.getItem("h3mainHlight1");
$App.h4mainHlight1 = localStorage.getItem("h4mainHlight1");
$App.h5mainHlight1 = localStorage.getItem("h5mainHlight1");
$App.h6mainHlight1 = localStorage.getItem("h6mainHlight1");
$App.h7mainHlight1 = localStorage.getItem("h7mainHlight1");
$App.h8mainHlight1 = localStorage.getItem("h8mainHlight1");
$App.h1mainCR = localStorage.getItem("h1mainCR");
$App.h2mainCR = localStorage.getItem("h2mainCR");
$App.h3mainCR = localStorage.getItem("h3mainCR");
$App.h4mainCR = localStorage.getItem("h4mainCR");
$App.h5mainCR = localStorage.getItem("h5mainCR");
$App.h6mainCR = localStorage.getItem("h6mainCR");
$App.h7mainCR = localStorage.getItem("h7mainCR");
$App.h8mainCR = localStorage.getItem("h9mainCR");
$App.h1p = localStorage.getItem("h1p");
$App.h2p = localStorage.getItem("h2p");
$App.h3p = localStorage.getItem("h3p");
$App.h4p = localStorage.getItem("h4p");
$App.h5p = localStorage.getItem("h5p");
$App.h6p = localStorage.getItem("h6p");
$App.h1n = localStorage.getItem("h1n");
$App.h2n = localStorage.getItem("h2n");
$App.h3n = localStorage.getItem("h3n");
$App.h4n = localStorage.getItem("h4n");
$App.h5n = localStorage.getItem("h5n");
$App.h6n = localStorage.getItem("h6n");
$App.h1ps = localStorage.getItem("h1ps");
$App.h2ps = localStorage.getItem("h2ps");
$App.h3ps = localStorage.getItem("h3ps");
$App.h4ps = localStorage.getItem("h4ps");
$App.h5ps = localStorage.getItem("h5ps");
$App.h6ps = localStorage.getItem("h6ps");
$App.h1ns = localStorage.getItem("h1ns");
$App.h2ns = localStorage.getItem("h2ns");
$App.h3ns = localStorage.getItem("h3ns");
$App.h4ns = localStorage.getItem("h4ns");
$App.h5ns = localStorage.getItem("h5ns");
$App.h6ns = localStorage.getItem("h6ns");
$App.h2pb1 = localStorage.getItem("h2pb1");
$App.h1pb2 = localStorage.getItem("h1pb2");
$App.h1pb1 = localStorage.getItem("h1pb1");
$App.h2pb2 = localStorage.getItem("h2pb2");
$App.h1pb3 = localStorage.getItem("h1pb3");
$App.h2pb4 = localStorage.getItem("h2pb4");
$App.h1pb5 = localStorage.getItem("h1pb5");
$App.h1pb6 = localStorage.getItem("h1pb6");
$App.h1main = localStorage.getItem("h1main");
$App.h2main = localStorage.getItem("h2main");
$App.h3main = localStorage.getItem("h3main");
$App.h4main = localStorage.getItem("h4main");
$App.h5main = localStorage.getItem("h5main");
$App.h6main = localStorage.getItem("h6main");
$App.h7main = localStorage.getItem("h7main");
$App.h8main = localStorage.getItem("h8main");
$App.h5d = localStorage.getItem("h5d");
$App.mccwa = "https://docs.google.com/spreadsheets/d/1neJsVgixs4Ep2zksqFqkJH1cS-FQrVI2o-DkLBlFPzI/edit?usp=sharing #gid=X";
if ($App.h1 == "") {
neoGSheetsLoadCell($App.mccwa,"h1","A",1,null);

} else {
};
if ($App.h2 == "") {
neoGSheetsLoadCell($App.mccwa,"h2","A",2,null);

} else {
};
if ($App.h3 == "") {
neoGSheetsLoadCell($App.mccwa,"h3","A",3,null);

} else {
};
if ($App.h4 == "") {
neoGSheetsLoadCell($App.mccwa,"h4","A",4,null);

} else {
};
if ($App.h5 == "") {
neoGSheetsLoadCell($App.mccwa,"h5","A",5,null);

} else {
};
if ($App.h6 == "") {
neoGSheetsLoadCell($App.mccwa,"h6","A",6,null);

} else {
};
if ($App.h7 == "") {
neoGSheetsLoadCell($App.mccwa,"h7","A",7,null);

} else {
};
if ($App.h8 == "") {
neoGSheetsLoadCell($App.mccwa,"h8","A",8,null);

} else {
};
if ($App.h1main == "") {
neoGSheetsLoadCell($App.mccwa,"h1main","B",1,null);

} else {
};
if ($App.h2main == "") {
neoGSheetsLoadCell($App.mccwa,"h2main","B",2,null);

} else {
};
if ($App.h3main == "") {
neoGSheetsLoadCell($App.mccwa,"h3","B",3,null);

} else {
};
if ($App.h4main == "") {
neoGSheetsLoadCell($App.mccwa,"h4main","B",4,null);

} else {
};
if ($App.h5main == "") {
neoGSheetsLoadCell($App.mccwa,"h5main","B",5,null);

} else {
};
if ($App.h6main == "") {
neoGSheetsLoadCell($App.mccwa,"h6main","6",6,null);

} else {
};
if ($App.h7main == "") {
neoGSheetsLoadCell($App.mccwa,"h7main","7",7,null);

} else {
};
if ($App.h8main == "") {
neoGSheetsLoadCell($App.mccwa,"h8main","B",8,null);

} else {
};};
$scope.BetaSettings_pageenter = function() {$App.bt1 = localStorage.getItem("bt1");
$App.bt2 = localStorage.getItem("bt2");
$App.bt3 = localStorage.getItem("bt2");
$App.bt4 = localStorage.getItem("bt4");
$App.bt5 = localStorage.getItem("bt5");
$App.bt6 = localStorage.getItem("bt6");};
$scope.xxxxxxxxxxxxxxxxxpph_pageenter = function() {$scope.GotoPrevPage();};
$scope.PhHome_pageenter = function() {$App.h1 = localStorage.getItem("h1");
$App.h2 = localStorage.getItem("h2");
$App.h3 = localStorage.getItem("h3");
$App.h4 = localStorage.getItem("h4");
$App.h5 = localStorage.getItem("h5");
$App.h6 = localStorage.getItem("h6");
$App.h7 = localStorage.getItem("h7");
$App.h8 = localStorage.getItem("h8");
$App.h9 = localStorage.getItem("h9");
$App.h10 = localStorage.getItem("h10");
$App.h11 = localStorage.getItem("h11");
$App.h12 = localStorage.getItem("h12");
$App.h13 = localStorage.getItem("h13");
$App.h14 = localStorage.getItem("h14");
$App.h15 = localStorage.getItem("h15");
$App.h16 = localStorage.getItem("h16");
$App.h17 = localStorage.getItem("h17");
$App.h18 = localStorage.getItem("h18");
$App.ad1 = localStorage.getItem("ad1");
$App.ad2 = localStorage.getItem("ad2");
$App.ad3 = localStorage.getItem("ad3");
$App.ad4 = localStorage.getItem("ad4");
$App.ad5 = localStorage.getItem("ad5");
$App.ad6 = localStorage.getItem("ad6");
$App.ad7 = localStorage.getItem("ad7");
$App.ad8 = localStorage.getItem("ad8");
$App.ad9 = localStorage.getItem("ad9");
$App.ad10 = localStorage.getItem("ad10");
$App.ad11 = localStorage.getItem("ad11");
$App.ad12 = localStorage.getItem("ad12");
$App.ad13 = localStorage.getItem("ad13");
$App.ad14 = localStorage.getItem("ad14");
$App.ad15 = localStorage.getItem("ad15");
$App.ad16 = localStorage.getItem("ad16");
$App.ad17 = localStorage.getItem("ad17");
$App.ad18 = localStorage.getItem("ad18");
$App.h1note1 = localStorage.getItem("h1note1");
$App.h2note1 = localStorage.getItem("h2note1");
$App.h3note1 = localStorage.getItem("h3note1");
$App.h4note1 = localStorage.getItem("h4note1");
$App.h5note1 = localStorage.getItem("h5note1");
$App.h6note1 = localStorage.getItem("h6note1");
$App.h7note1 = localStorage.getItem("h7note1");
$App.h8note1 = localStorage.getItem("h8note1");
$App.h1note2 = localStorage.getItem("h1note2");
$App.h2note2 = localStorage.getItem("h2note2");
$App.h3note2 = localStorage.getItem("h3note2");
$App.h4note2 = localStorage.getItem("h4note2");
$App.h5note2 = localStorage.getItem("h5note2");
$App.h6note2 = localStorage.getItem("h6note2");
$App.h7note2 = localStorage.getItem("h7note2");
$App.h8note2 = localStorage.getItem("h8note2");
$App.h1due = localStorage.getItem("h1due");
$App.h2due = localStorage.getItem("h2due");
$App.h3due = localStorage.getItem("h3due");
$App.h4due = localStorage.getItem("h4due");
$App.h5due = localStorage.getItem("h5due");
$App.h6due = localStorage.getItem("h6due");
$App.h7due = localStorage.getItem("h7due");
$App.h9due = localStorage.getItem("h8due");
$App.h1next = localStorage.getItem("h1next");
$App.h2next = localStorage.getItem("h2next");
$App.h3next = localStorage.getItem("h3next");
$App.h4next = localStorage.getItem("h4next");
$App.h5next = localStorage.getItem("h5next");
$App.h6next = localStorage.getItem("h6next");
$App.h7next = localStorage.getItem("h7next");
$App.h9next = localStorage.getItem("h8next");
$App.h1mainHlight1 = localStorage.getItem("h1mainHlight1");
$App.h2mainHlight1 = localStorage.getItem("h2mainHlight1");
$App.h3mainHlight1 = localStorage.getItem("h3mainHlight1");
$App.h4mainHlight1 = localStorage.getItem("h4mainHlight1");
$App.h5mainHlight1 = localStorage.getItem("h5mainHlight1");
$App.h6mainHlight1 = localStorage.getItem("h6mainHlight1");
$App.h7mainHlight1 = localStorage.getItem("h7mainHlight1");
$App.h8mainHlight1 = localStorage.getItem("h8mainHlight1");
$App.h1mainCR = localStorage.getItem("h1mainCR");
$App.h2mainCR = localStorage.getItem("h2mainCR");
$App.h3mainCR = localStorage.getItem("h3mainCR");
$App.h4mainCR = localStorage.getItem("h4mainCR");
$App.h5mainCR = localStorage.getItem("h5mainCR");
$App.h6mainCR = localStorage.getItem("h6mainCR");
$App.h7mainCR = localStorage.getItem("h7mainCR");
$App.h8mainCR = localStorage.getItem("h9mainCR");
$App.h1p = localStorage.getItem("h1p");
$App.h2p = localStorage.getItem("h2p");
$App.h3p = localStorage.getItem("h3p");
$App.h4p = localStorage.getItem("h4p");
$App.h5p = localStorage.getItem("h5p");
$App.h6p = localStorage.getItem("h6p");
$App.h1n = localStorage.getItem("h1n");
$App.h2n = localStorage.getItem("h2n");
$App.h3n = localStorage.getItem("h3n");
$App.h4n = localStorage.getItem("h4n");
$App.h5n = localStorage.getItem("h5n");
$App.h6n = localStorage.getItem("h6n");
$App.h1ps = localStorage.getItem("h1ps");
$App.h2ps = localStorage.getItem("h2ps");
$App.h3ps = localStorage.getItem("h3ps");
$App.h4ps = localStorage.getItem("h4ps");
$App.h5ps = localStorage.getItem("h5ps");
$App.h6ps = localStorage.getItem("h6ps");
$App.h1ns = localStorage.getItem("h1ns");
$App.h2ns = localStorage.getItem("h2ns");
$App.h3ns = localStorage.getItem("h3ns");
$App.h4ns = localStorage.getItem("h4ns");
$App.h5ns = localStorage.getItem("h5ns");
$App.h6ns = localStorage.getItem("h6ns");
$App.h2pb1 = localStorage.getItem("h2pb1");
$App.h1pb2 = localStorage.getItem("h1pb2");
$App.h1pb1 = localStorage.getItem("h1pb1");
$App.h2pb2 = localStorage.getItem("h2pb2");
$App.h1pb3 = localStorage.getItem("h1pb3");
$App.h2pb4 = localStorage.getItem("h2pb4");
$App.h1pb5 = localStorage.getItem("h1pb5");
$App.h1pb6 = localStorage.getItem("h1pb6");
$App.h1main = localStorage.getItem("h1main");
$App.h2main = localStorage.getItem("h2main");
$App.h3main = localStorage.getItem("h3main");
$App.h4main = localStorage.getItem("h4main");
$App.h5main = localStorage.getItem("h5main");
$App.h6main = localStorage.getItem("h6main");
$App.h7main = localStorage.getItem("h7main");
$App.h8main = localStorage.getItem("h8main");
$App.h5d = localStorage.getItem("h5d");
$App.mccwa = "https://docs.google.com/spreadsheets/d/1neJsVgixs4Ep2zksqFqkJH1cS-FQrVI2o-DkLBlFPzI/edit?usp=sharing #gid=X";
if ($App.h1 == "") {
neoGSheetsLoadCell($App.mccwa,"h1","A",1,null);

} else {
};
if ($App.h2 == "") {
neoGSheetsLoadCell($App.mccwa,"h2","A",2,null);

} else {
};
if ($App.h3 == "") {
neoGSheetsLoadCell($App.mccwa,"h3","A",3,null);

} else {
};
if ($App.h4 == "") {
neoGSheetsLoadCell($App.mccwa,"h4","A",4,null);

} else {
};
if ($App.h5 == "") {
neoGSheetsLoadCell($App.mccwa,"h5","A",5,null);

} else {
};
if ($App.h6 == "") {
neoGSheetsLoadCell($App.mccwa,"h6","A",6,null);

} else {
};
if ($App.h7 == "") {
neoGSheetsLoadCell($App.mccwa,"h7","A",7,null);

} else {
};
if ($App.h8 == "") {
neoGSheetsLoadCell($App.mccwa,"h8","A",8,null);

} else {
};
if ($App.h1main == "") {
neoGSheetsLoadCell($App.mccwa,"h1main","B",1,null);

} else {
};
if ($App.h2main == "") {
neoGSheetsLoadCell($App.mccwa,"h2main","B",2,null);

} else {
};
if ($App.h3main == "") {
neoGSheetsLoadCell($App.mccwa,"h3","B",3,null);

} else {
};
if ($App.h4main == "") {
neoGSheetsLoadCell($App.mccwa,"h4main","B",4,null);

} else {
};
if ($App.h5main == "") {
neoGSheetsLoadCell($App.mccwa,"h5main","B",5,null);

} else {
};
if ($App.h6main == "") {
neoGSheetsLoadCell($App.mccwa,"h6main","6",6,null);

} else {
};
if ($App.h7main == "") {
neoGSheetsLoadCell($App.mccwa,"h7main","7",7,null);

} else {
};
if ($App.h8main == "") {
neoGSheetsLoadCell($App.mccwa,"h8main","B",8,null);

} else {
};};
$scope.ADHDHome_pageenter = function() {$App.h1 = localStorage.getItem("h1");
$App.h2 = localStorage.getItem("h2");
$App.h3 = localStorage.getItem("h3");
$App.h4 = localStorage.getItem("h4");
$App.h5 = localStorage.getItem("h5");
$App.h6 = localStorage.getItem("h6");
$App.h7 = localStorage.getItem("h7");
$App.h8 = localStorage.getItem("h8");
$App.h9 = localStorage.getItem("h9");
$App.h10 = localStorage.getItem("h10");
$App.h11 = localStorage.getItem("h11");
$App.h12 = localStorage.getItem("h12");
$App.h13 = localStorage.getItem("h13");
$App.h14 = localStorage.getItem("h14");
$App.h15 = localStorage.getItem("h15");
$App.h16 = localStorage.getItem("h16");
$App.h17 = localStorage.getItem("h17");
$App.h18 = localStorage.getItem("h18");
$App.ad1 = localStorage.getItem("ad1");
$App.ad2 = localStorage.getItem("ad2");
$App.ad3 = localStorage.getItem("ad3");
$App.ad4 = localStorage.getItem("ad4");
$App.ad5 = localStorage.getItem("ad5");
$App.ad6 = localStorage.getItem("ad6");
$App.ad7 = localStorage.getItem("ad7");
$App.ad8 = localStorage.getItem("ad8");
$App.ad9 = localStorage.getItem("ad9");
$App.ad10 = localStorage.getItem("ad10");
$App.ad11 = localStorage.getItem("ad11");
$App.ad12 = localStorage.getItem("ad12");
$App.ad13 = localStorage.getItem("ad13");
$App.ad14 = localStorage.getItem("ad14");
$App.ad15 = localStorage.getItem("ad15");
$App.ad16 = localStorage.getItem("ad16");
$App.ad17 = localStorage.getItem("ad17");
$App.ad18 = localStorage.getItem("ad18");
$App.h1note1 = localStorage.getItem("h1note1");
$App.h2note1 = localStorage.getItem("h2note1");
$App.h3note1 = localStorage.getItem("h3note1");
$App.h4note1 = localStorage.getItem("h4note1");
$App.h5note1 = localStorage.getItem("h5note1");
$App.h6note1 = localStorage.getItem("h6note1");
$App.h7note1 = localStorage.getItem("h7note1");
$App.h8note1 = localStorage.getItem("h8note1");
$App.h1note2 = localStorage.getItem("h1note2");
$App.h2note2 = localStorage.getItem("h2note2");
$App.h3note2 = localStorage.getItem("h3note2");
$App.h4note2 = localStorage.getItem("h4note2");
$App.h5note2 = localStorage.getItem("h5note2");
$App.h6note2 = localStorage.getItem("h6note2");
$App.h7note2 = localStorage.getItem("h7note2");
$App.h8note2 = localStorage.getItem("h8note2");
$App.h1due = localStorage.getItem("h1due");
$App.h2due = localStorage.getItem("h2due");
$App.h3due = localStorage.getItem("h3due");
$App.h4due = localStorage.getItem("h4due");
$App.h5due = localStorage.getItem("h5due");
$App.h6due = localStorage.getItem("h6due");
$App.h7due = localStorage.getItem("h7due");
$App.h9due = localStorage.getItem("h8due");
$App.h1next = localStorage.getItem("h1next");
$App.h2next = localStorage.getItem("h2next");
$App.h3next = localStorage.getItem("h3next");
$App.h4next = localStorage.getItem("h4next");
$App.h5next = localStorage.getItem("h5next");
$App.h6next = localStorage.getItem("h6next");
$App.h7next = localStorage.getItem("h7next");
$App.h9next = localStorage.getItem("h8next");
$App.h1mainHlight1 = localStorage.getItem("h1mainHlight1");
$App.h2mainHlight1 = localStorage.getItem("h2mainHlight1");
$App.h3mainHlight1 = localStorage.getItem("h3mainHlight1");
$App.h4mainHlight1 = localStorage.getItem("h4mainHlight1");
$App.h5mainHlight1 = localStorage.getItem("h5mainHlight1");
$App.h6mainHlight1 = localStorage.getItem("h6mainHlight1");
$App.h7mainHlight1 = localStorage.getItem("h7mainHlight1");
$App.h8mainHlight1 = localStorage.getItem("h8mainHlight1");
$App.h1mainCR = localStorage.getItem("h1mainCR");
$App.h2mainCR = localStorage.getItem("h2mainCR");
$App.h3mainCR = localStorage.getItem("h3mainCR");
$App.h4mainCR = localStorage.getItem("h4mainCR");
$App.h5mainCR = localStorage.getItem("h5mainCR");
$App.h6mainCR = localStorage.getItem("h6mainCR");
$App.h7mainCR = localStorage.getItem("h7mainCR");
$App.h8mainCR = localStorage.getItem("h9mainCR");
$App.h1p = localStorage.getItem("h1p");
$App.h2p = localStorage.getItem("h2p");
$App.h3p = localStorage.getItem("h3p");
$App.h4p = localStorage.getItem("h4p");
$App.h5p = localStorage.getItem("h5p");
$App.h6p = localStorage.getItem("h6p");
$App.h1n = localStorage.getItem("h1n");
$App.h2n = localStorage.getItem("h2n");
$App.h3n = localStorage.getItem("h3n");
$App.h4n = localStorage.getItem("h4n");
$App.h5n = localStorage.getItem("h5n");
$App.h6n = localStorage.getItem("h6n");
$App.h1ps = localStorage.getItem("h1ps");
$App.h2ps = localStorage.getItem("h2ps");
$App.h3ps = localStorage.getItem("h3ps");
$App.h4ps = localStorage.getItem("h4ps");
$App.h5ps = localStorage.getItem("h5ps");
$App.h6ps = localStorage.getItem("h6ps");
$App.h1ns = localStorage.getItem("h1ns");
$App.h2ns = localStorage.getItem("h2ns");
$App.h3ns = localStorage.getItem("h3ns");
$App.h4ns = localStorage.getItem("h4ns");
$App.h5ns = localStorage.getItem("h5ns");
$App.h6ns = localStorage.getItem("h6ns");
$App.h2pb1 = localStorage.getItem("h2pb1");
$App.h1pb2 = localStorage.getItem("h1pb2");
$App.h1pb1 = localStorage.getItem("h1pb1");
$App.h2pb2 = localStorage.getItem("h2pb2");
$App.h1pb3 = localStorage.getItem("h1pb3");
$App.h2pb4 = localStorage.getItem("h2pb4");
$App.h1pb5 = localStorage.getItem("h1pb5");
$App.h1pb6 = localStorage.getItem("h1pb6");
$App.h1main = localStorage.getItem("h1main");
$App.h2main = localStorage.getItem("h2main");
$App.h3main = localStorage.getItem("h3main");
$App.h4main = localStorage.getItem("h4main");
$App.h5main = localStorage.getItem("h5main");
$App.h6main = localStorage.getItem("h6main");
$App.h7main = localStorage.getItem("h7main");
$App.h8main = localStorage.getItem("h8main");
$App.h5d = localStorage.getItem("h5d");
$App.mccwa = "https://docs.google.com/spreadsheets/d/1neJsVgixs4Ep2zksqFqkJH1cS-FQrVI2o-DkLBlFPzI/edit?usp=sharing #gid=X";
if ($App.h1 == "") {
neoGSheetsLoadCell($App.mccwa,"h1","A",1,null);

} else {
};
if ($App.h2 == "") {
neoGSheetsLoadCell($App.mccwa,"h2","A",2,null);

} else {
};
if ($App.h3 == "") {
neoGSheetsLoadCell($App.mccwa,"h3","A",3,null);

} else {
};
if ($App.h4 == "") {
neoGSheetsLoadCell($App.mccwa,"h4","A",4,null);

} else {
};
if ($App.h5 == "") {
neoGSheetsLoadCell($App.mccwa,"h5","A",5,null);

} else {
};
if ($App.h6 == "") {
neoGSheetsLoadCell($App.mccwa,"h6","A",6,null);

} else {
};
if ($App.h7 == "") {
neoGSheetsLoadCell($App.mccwa,"h7","A",7,null);

} else {
};
if ($App.h8 == "") {
neoGSheetsLoadCell($App.mccwa,"h8","A",8,null);

} else {
};
if ($App.h1main == "") {
neoGSheetsLoadCell($App.mccwa,"h1main","B",1,null);

} else {
};
if ($App.h2main == "") {
neoGSheetsLoadCell($App.mccwa,"h2main","B",2,null);

} else {
};
if ($App.h3main == "") {
neoGSheetsLoadCell($App.mccwa,"h3","B",3,null);

} else {
};
if ($App.h4main == "") {
neoGSheetsLoadCell($App.mccwa,"h4main","B",4,null);

} else {
};
if ($App.h5main == "") {
neoGSheetsLoadCell($App.mccwa,"h5main","B",5,null);

} else {
};
if ($App.h6main == "") {
neoGSheetsLoadCell($App.mccwa,"h6main","6",6,null);

} else {
};
if ($App.h7main == "") {
neoGSheetsLoadCell($App.mccwa,"h7main","7",7,null);

} else {
};
if ($App.h8main == "") {
neoGSheetsLoadCell($App.mccwa,"h8main","B",8,null);

} else {
};};
$scope.xxxxxxxxxxxxxxxxxad_pageenter = function() {$scope.GotoPage( "Home" );};
$scope.Prayer_pageexit = function() {localStorage.setItem("Prayer1mainR",$App.Prayer1main);};
angular.element(document).ready( function(){
$scope.__init();
neo = angular.element(document.getElementById("ng-view")).scope();neo.Refresh();});
});NeoApp.controller("App_DlgCtrl",function($scope,$rootScope,$modalInstance,$filter,$window,$animate){$scope.CloseDialog=function(){$modalInstance.close();};$scope.CloseDialogBtn=function(btnNum){$modalInstance.close(btnNum);};});
function debounce(func,wait,immediate){var timeout;return function(){var context=this,args=arguments;var later=function(){timeout=null;if(!immediate)func.apply(context,args);};var callNow=immediate&&!timeout;clearTimeout(timeout);timeout=setTimeout(later,wait);if(callNow)func.apply(context,args);};};NeoApp.directive('timer',function(){return{restrict:'E',replace:false,transclude:false,link:function(scope,element,attributes){if(attributes.autostop){scope.$on('$destroy',function(){scope.$parent.TimerStop(attributes.id);});};if(attributes.autostart)scope.$parent.TimerStart(attributes.id,attributes.interval);}};});NeoApp.directive('slider',['$window',function($window){return{restrict:'E',replace:true,transclude:true,require:'?ngModel',scope:{value:"=ngModel",min:"=",max:"=",disabled:'=ngDisabled',onChange:"&",onChanging:"&"},compile:function(element,attributes){element.addClass('neoapp-slider');var html='';if(attributes.trackimage){html+='<img class="track-img" src="'+attributes.trackimage+'"';if(attributes.trackheight)html+=' style="height:'+attributes.trackheight+'"';html+='/>';}else{html+='<div class="track"';if(attributes.trackheight)html+=' style="height:'+attributes.trackheight+'"';html+='><div class="track-left';if(attributes.kind)html+=' track-left-'+attributes.kind;html+='"></div>';};html+='</div><button class="thumb';if(attributes.thumbimage)html+=' thumb-img';if(attributes.kind)html+=' thumb-'+attributes.kind;html+='"';if(attributes.thumbwidth||attributes.thumbimage){html+=' style="';if(attributes.thumbwidth)html+='width:'+attributes.thumbwidth;if(attributes.thumbwidth&&attributes.thumbimage)html+=';';if(attributes.thumbimage)html+="background-image:url('"+attributes.thumbimage+"')";html+='"';};html+=' ng-style="NAB.'+attributes.id+'_style"';html+=' ng-transclude></button>';element.html(html);return linkFn;}};function linkFn($scope,element,attributes,ngModel){var mouseDown=false,track=attributes.trackimage?element.find('.track-img'):element.find('.track'),thumb=element.find('.thumb'),trackLeft=element.find('.track-left'),elemLeft,vMin=isNaN(parseFloat($scope.min))?0:parseFloat($scope.min),vMax=isNaN(parseFloat($scope.max))?100:parseFloat($scope.max),xOffs,dbOnChanging=($scope.onChanging)?debounce(function(){$scope.onChanging();},100):null;if(vMax<=vMin)vMax=vMin+1;var value=isNaN(parseFloat($scope.value))?vMin:parseFloat($scope.value);function positionThumb(){var basePos=((value-vMin)/(vMax-vMin))*(track.width()-thumb.innerWidth());thumb.css('left',basePos);if(trackLeft)trackLeft.css('width',basePos);};function updateValue(){if(ngModel&&!isNaN(parseFloat($scope.value))){var v=$scope.value;value=Math.max(vMin,Math.min(Math.floor(v),vMax));$scope.value=value;}else{value=Math.max(vMin,Math.min(Math.floor(value),vMax));};positionThumb();};function mouseCoords(event){if(event.type=='touchstart'||event.type=='touchmove'||event.type=='touchend'||event.type=='touchcancel'){var touch=event.originalEvent.touches[0]||event.originalEvent.changedTouches[0];return{x:touch.pageX,y:touch.pageY};}else{return{x:event.pageX,y:event.pageY};};};thumb.on('mousedown touchstart',function(event){if(!element.attr('disabled')){mouseDown=true;elemLeft=element.position().left;xOffs=mouseCoords(event).x-thumb.position().left-elemLeft;$(document).one('mouseup touchend ontouchcancel',function(event){if($scope.onChange)$scope.onChange();mouseDown=false;return false;});return false;};});element.on('mousemove touchmove',function(event){if(mouseDown){var xPos=mouseCoords(event).x-elemLeft-xOffs;var v=((xPos/(track.width()-thumb.innerWidth()))*(vMax-vMin))+vMin;v=Math.max(vMin,Math.min(Math.floor(v),vMax));if(value!=v){value=v;positionThumb();if(ngModel){$scope.value=value;if($scope.onChanging)$scope.onChanging();$scope.$apply();};if($scope.onChanging)dbOnChanging();};return false;};});angular.element($window).on('resize.'+element.id,function(){positionThumb();});if(ngModel){$scope.$watch('value',function(){if(!mouseDown){updateValue();};});};if(angular.isObject($scope.max)){$scope.$watch('max',function(){vMax=+$scope.max||100;updateValue();});};if(angular.isObject($scope.min)){$scope.$watch('min',function(){vMin=+$scope.min||0;updateValue();});};$scope.$watch('disabled',function(newVal){element.find('*').attr('disabled',newVal||false);});$scope.$on('$destroy',function(){angular.element($window).off('resize.'+element.id);});};}]);
NeoApp.controller("Home_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 1;
$App.NAB.PageID = "Home";
$scope.H8Box_click = function() {$App.HOverview = $App.h8main;
$scope.MoveObject("H9Box","210","247");
$scope.MoveObject("H10Box","211","314");
$scope.MoveObject("H1Box","211","376");
$scope.MoveObject("H2Box","211","438");
$scope.MoveObject("H3Box","112","506");
$scope.MoveObject("H4Box","10","438");
$scope.MoveObject("H5Box","10","376");
$scope.MoveObject("H6Box","10","314");
$scope.MoveObject("H7Box","10","246");
$scope.MoveObject("H8Box","113","181");};
$scope.H8Box_dblclick = function() {$scope.GotoPage( "H8Main" );};
$scope.H4Box_click = function() {$App.HOverview = $App.h4main;
$scope.MoveObject("H5Box","210","247");
$scope.MoveObject("H6Box","211","314");
$scope.MoveObject("H7Box","211","376");
$scope.MoveObject("H8Box","211","438");
$scope.MoveObject("H9Box","112","506");
$scope.MoveObject("H10Box","10","438");
$scope.MoveObject("H1Box","10","376");
$scope.MoveObject("H2Box","10","314");
$scope.MoveObject("H3Box","10","246");
$scope.MoveObject("H4Box","113","181");};
$scope.H4Box_dblclick = function() {$scope.GotoPage( "H4Main" );};
$scope.H2Box_click = function() {$App.HOverview = $App.h2main;
$scope.MoveObject("H3Box","210","247");
$scope.MoveObject("H4Box","211","314");
$scope.MoveObject("H5Box","211","376");
$scope.MoveObject("H6Box","211","438");
$scope.MoveObject("H7Box","112","506");
$scope.MoveObject("H8Box","10","438");
$scope.MoveObject("H9Box","10","376");
$scope.MoveObject("H10Box","10","314");
$scope.MoveObject("H1Box","10","246");
$scope.MoveObject("H2Box","113","181");};
$scope.H2Box_dblclick = function() {$scope.GotoPage( "H2Main" );};
$scope.H1Box_click = function() {$App.HOverview = $App.h1main;
$scope.MoveObject("H2Box","210","247");
$scope.MoveObject("H3Box","211","314");
$scope.MoveObject("H4Box","211","376");
$scope.MoveObject("H5Box","211","438");
$scope.MoveObject("H6Box","112","506");
$scope.MoveObject("H7Box","10","438");
$scope.MoveObject("H8Box","10","376");
$scope.MoveObject("H9Box","10","314");
$scope.MoveObject("H10Box","10","246");
$scope.MoveObject("H1Box","113","181");};
$scope.H1Box_dblclick = function() {$scope.GotoPage( "H1Main" );};
$scope.H7Box_click = function() {$App.HOverview = $App.h7main;
$scope.MoveObject("H8Box","210","247");
$scope.MoveObject("H9Box","211","314");
$scope.MoveObject("H10Box","211","376");
$scope.MoveObject("H1Box","211","438");
$scope.MoveObject("H2Box","112","506");
$scope.MoveObject("H3Box","10","438");
$scope.MoveObject("H4Box","10","376");
$scope.MoveObject("H5Box","10","314");
$scope.MoveObject("H6Box","10","246");
$scope.MoveObject("H7Box","113","181");};
$scope.H7Box_dblclick = function() {$scope.GotoPage( "H7Main" );};
$scope.H5Box_click = function() {$App.HOverview = $App.h5main;
$scope.MoveObject("H6Box","210","247");
$scope.MoveObject("H7Box","211","314");
$scope.MoveObject("H8Box","211","376");
$scope.MoveObject("H9Box","211","438");
$scope.MoveObject("H10Box","112","506");
$scope.MoveObject("H1Box","10","438");
$scope.MoveObject("H2Box","10","376");
$scope.MoveObject("H3Box","10","314");
$scope.MoveObject("H4Box","10","246");
$scope.MoveObject("H5Box","113","181");};
$scope.H5Box_dblclick = function() {$scope.GotoPage( "H5Main" );};
$scope.Headline42_click = function() {$scope.GotoPage( "Settings1" );};
$scope.Headline44_click = function() {$App.vh1 = localStorage.getItem("vh1");
$scope.GotoPage( "VesrionHistory" );};
$scope.Headline45_click = function() {$App.R1 = localStorage.getItem("R1");
$App.R2 = localStorage.getItem("R2");
$App.R3 = localStorage.getItem("R3");
$App.R4 = localStorage.getItem("R4");
$App.R5 = localStorage.getItem("R5");
$App.R6 = localStorage.getItem("R6");
$App.R7 = localStorage.getItem("R7");
$App.R8 = localStorage.getItem("R8");
$App.R9 = localStorage.getItem("R9");
$App.R10 = localStorage.getItem("R10");
$App.R11 = localStorage.getItem("R11");
$scope.GotoPage( "Rulz" );};
$scope.PushButton3_click = function() {window.document.location.reload();};
$scope.H6Box_click = function() {$App.HOverview = $App.h6main;
$scope.MoveObject("H7Box","210","247");
$scope.MoveObject("H8Box","211","314");
$scope.MoveObject("H9Box","211","376");
$scope.MoveObject("H10Box","211","438");
$scope.MoveObject("H1Box","112","506");
$scope.MoveObject("H2Box","10","438");
$scope.MoveObject("H3Box","10","376");
$scope.MoveObject("H4Box","10","314");
$scope.MoveObject("H5Box","10","246");
$scope.MoveObject("H6Box","113","181");};
$scope.H6Box_dblclick = function() {$scope.GotoPage( "H6Main" );};
$scope.H10Box_click = function() {$App.HOverview = $App.h10main;
$scope.MoveObject("H1Box","210","247");
$scope.MoveObject("H2Box","211","314");
$scope.MoveObject("H3Box","211","376");
$scope.MoveObject("H4Box","211","438");
$scope.MoveObject("H5Box","112","506");
$scope.MoveObject("H6Box","10","438");
$scope.MoveObject("H7Box","10","376");
$scope.MoveObject("H7Box","10","376");
$scope.MoveObject("H8Box","10","314");
$scope.MoveObject("H9Box","10","246");
$scope.MoveObject("H10Box","113","181");};
$scope.H10Box_dblclick = function() {$scope.GotoPage( "H10Main" );};
$scope.H9Box_click = function() {$App.HOverview = $App.h9main;
$scope.MoveObject("H10Box","210","247");
$scope.MoveObject("H1Box","211","314");
$scope.MoveObject("H2Box","211","376");
$scope.MoveObject("H3Box","211","438");
$scope.MoveObject("H4Box","112","506");
$scope.MoveObject("H5Box","10","438");
$scope.MoveObject("H6Box","10","376");
$scope.MoveObject("H7Box","10","314");
$scope.MoveObject("H8Box","10","246");
$scope.MoveObject("H9Box","113","181");};
$scope.H9Box_dblclick = function() {$scope.GotoPage( "H9main" );};
$scope.H3Box_click = function() {$App.HOverview = $App.h3main;
$scope.MoveObject("H4Box","210","247");
$scope.MoveObject("H5Box","211","314");
$scope.MoveObject("H6Box","211","376");
$scope.MoveObject("H7Box","211","438");
$scope.MoveObject("H8Box","112","506");
$scope.MoveObject("H9Box","10","438");
$scope.MoveObject("H10Box","10","376");
$scope.MoveObject("H1Box","10","314");
$scope.MoveObject("H2Box","10","246");
$scope.MoveObject("H3Box","113","181");};
$scope.H3Box_dblclick = function() {$scope.GotoPage( "H3Main" );};
$scope.Headline3_click = function() {$scope.GotoPage( "ADHDHome" );};
$scope.Headline166_click = function() {$scope.GotoPage( "PhHome" );};
$scope.PushButton78_click = function() {$scope.GotoPage( "Prayer" );};
$scope.PushButton81_click = function() {$scope.GotoPage( "Rep1" );};
$scope.PushButton84_click = function() {$scope.GotoPage( "q1" );};
$scope.PushButton90_click = function() {$scope.GotoPage( "Diary1" );};
$scope.PushButton171_click = function() {$scope.GotoPage( "KarboMain" );};
$scope.Headline552_click = function() {$scope.GotoPage( "Betanew1" );};
});
NeoApp.controller("VesrionHistory_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 2;
$App.NAB.PageID = "VesrionHistory";
$scope.Headline550_click = function() {$scope.GotoPage( "Settings1" );};
$scope.Headline551_click = function() {$App.R1 = localStorage.getItem("R1");
$App.R2 = localStorage.getItem("R2");
$App.R3 = localStorage.getItem("R3");
$App.R4 = localStorage.getItem("R4");
$App.R5 = localStorage.getItem("R5");
$App.R6 = localStorage.getItem("R6");
$App.R7 = localStorage.getItem("R7");
$App.R8 = localStorage.getItem("R8");
$App.R9 = localStorage.getItem("R9");
$App.R10 = localStorage.getItem("R10");
$App.R11 = localStorage.getItem("R11");
$scope.GotoPage( "Rulz" );};
$scope.PushButton211_click = function() {window.document.location.reload();};
$scope.PushButton212_click = function() {$scope.GotoPage( "Home" );};
$scope.Headline558_click = function() {$scope.GotoPage( "ADHDHome" );};
$scope.TextArea207_change = function() {localStorage.setItem("vh1",$App.vh1);};
});
NeoApp.controller("Betanew1_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 3;
$App.NAB.PageID = "Betanew1";
$scope.TextArea211_change = function() {localStorage.setItem("b1",$App.b1);};
$scope.PushButton213_click = function() {$scope.GotoPage( "PhHome" );};
$scope.TextArea208_change = function() {localStorage.setItem("b1h",$App.b1h);};
$scope.Pager25_prevclick = function() {$scope.GotoPrevPage();};
$scope.Pager25_nextclick = function() {$scope.GotoNextPage();};
});
NeoApp.controller("Betanew2_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 4;
$App.NAB.PageID = "Betanew2";
$scope.TextArea209_change = function() {localStorage.setItem("b2",$App.b2);};
$scope.PushButton214_click = function() {$scope.GotoPage( "PhHome" );};
$scope.TextArea210_change = function() {localStorage.setItem("b2h",$App.b2h);};
$scope.Pager24_prevclick = function() {$scope.GotoPrevPage();};
$scope.Pager24_nextclick = function() {$scope.GotoNextPage();};
});
NeoApp.controller("Betanew3_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 5;
$App.NAB.PageID = "Betanew3";
$scope.TextArea212_change = function() {localStorage.setItem("b3",$App.b3);};
$scope.PushButton215_click = function() {$scope.GotoPage( "PhHome" );};
$scope.TextArea213_change = function() {localStorage.setItem("b3h",$App.b3h);};
$scope.Pager23_prevclick = function() {$scope.GotoPrevPage();};
$scope.Pager23_nextclick = function() {$scope.GotoNextPage();};
});
NeoApp.controller("BetaSettings_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 6;
$App.NAB.PageID = "BetaSettings";
$scope.Pager26_prevclick = function() {$scope.GotoPrevPage();};
$scope.Pager26_nextclick = function() {$scope.GotoNextPage();};
$scope.TextArea214_change = function() {localStorage.setItem("b3",$App.b3);};
$scope.PushButton216_click = function() {$scope.GotoPage( "PhHome" );};
$scope.TextArea215_change = function() {localStorage.setItem("bt1",$App.bt1);};
$scope.TextArea216_change = function() {localStorage.setItem("bt2",$App.bt2);};
$scope.TextArea217_change = function() {localStorage.setItem("bt3",$App.bt3);};
$scope.TextArea218_change = function() {localStorage.setItem("bt4",$App.bt4);};
$scope.TextArea219_change = function() {localStorage.setItem("bt5",$App.bt5);};
$scope.TextArea220_change = function() {localStorage.setItem("bt6",$App.bt6);};
$scope.PushButton217_click = function() {$App.bt1 = localStorage.getItem("bt1");
$App.bt2 = localStorage.getItem("bt2");
$App.bt3 = localStorage.getItem("bt2");
$App.bt4 = localStorage.getItem("bt4");
$App.bt5 = localStorage.getItem("bt5");
$App.bt6 = localStorage.getItem("bt6");};
$scope.Combobox2_change = function() {if ($App.type == "1") {
$App.typeselect = $App.bt1;
} else {
};
if ($App.type == "2") {
$App.typeselect = $App.bt2;
} else {
};};
});
NeoApp.controller("xxxxxxxxxxxxxxxxxpph_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 7;
$App.NAB.PageID = "xxxxxxxxxxxxxxxxxpph";
$scope.PushButton180_click = function() {localStorage.setItem("w15font","15pt");
$App.w15font = localStorage.getItem("w15font");
$scope.SetObjectStyle("w15","font-size",$App.w15font);};
$scope.PushButton181_click = function() {localStorage.setItem("w15font","11pt");
$App.w15font = localStorage.getItem("w15font");
$scope.SetObjectStyle("w15","font-size",$App.w15font);};
$scope.PushButton182_click = function() {localStorage.setItem("w15font","25pt");
$App.w15font = localStorage.getItem("w15font");
$scope.SetObjectStyle("w15","font-size",$App.w15font);};
$scope.PushButton183_click = function() {localStorage.setItem("w15font","21pt");
$App.w15font = localStorage.getItem("w15font");
$scope.SetObjectStyle("w15","font-size",$App.w15font);};
$scope.PushButton184_click = function() {localStorage.setItem("w15c","#2F4F4F");
$App.w15c = localStorage.getItem("w15c");
$scope.SetObjectStyle("w15","color",$App.w15c);};
$scope.PushButton185_click = function() {localStorage.setItem("w15c","Red");
$App.w15c = localStorage.getItem("w15c");
$scope.SetObjectStyle("w15","color",$App.w15c);};
$scope.PushButton186_click = function() {neoTalkSpeak($App.Lm01, "uk", 1, .9);};
$scope.PushButton187_click = function() {neoTalkPauseSpeech();};
$scope.PushButton188_click = function() {neoTalkResumeSpeech();};
});
NeoApp.controller("KarboMain_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 8;
$App.NAB.PageID = "KarboMain";
$scope.TextArea187_change = function() {localStorage.setItem("Lmmain",$App.Lmmain);};
$scope.PushButton172_click = function() {$scope.GotoPage( "PhHome" );};
$scope.PushButton246_click = function() {neoTalkSpeak($App.Lmmain, "uk", 1, .9);};
$scope.Pager9_nextclick = function() {$scope.GotoNextPage();};
});
NeoApp.controller("Karbo01_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 9;
$App.NAB.PageID = "Karbo01";
$scope.TextArea188_change = function() {localStorage.setItem("Lm01",$App.Lm01);};
$scope.PushButton173_click = function() {$scope.GotoPage( "PhHome" );};
$scope.PushButton174_click = function() {neoTalkSpeak($App.Lm01, "uk", 1, .9);};
$scope.Pager10_prevclick = function() {$scope.GotoPrevPage();};
$scope.Pager10_nextclick = function() {$scope.GotoNextPage();};
});
NeoApp.controller("Karbo2_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 10;
$App.NAB.PageID = "Karbo2";
$scope.TextArea189_change = function() {localStorage.setItem("Lm02",$App.Lm02);};
$scope.PushButton176_click = function() {$scope.GotoPage( "PhHome" );};
$scope.PushButton177_click = function() {neoTalkSpeak($App.Lm02, "uk", 1, .9);};
$scope.Pager11_prevclick = function() {$scope.GotoPrevPage();};
$scope.Pager11_nextclick = function() {$scope.GotoNextPage();};
});
NeoApp.controller("Karbo3_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 11;
$App.NAB.PageID = "Karbo3";
$scope.TextArea190_change = function() {localStorage.setItem("Lm03",$App.Lm03);};
$scope.PushButton178_click = function() {$scope.GotoPage( "PhHome" );};
$scope.PushButton179_click = function() {neoTalkSpeak($App.Lm03, "uk", 1, .9);};
$scope.Pager12_prevclick = function() {$scope.GotoPrevPage();};
$scope.Pager12_nextclick = function() {$scope.GotoNextPage();};
});
NeoApp.controller("Karbo4_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 12;
$App.NAB.PageID = "Karbo4";
$scope.TextArea191_change = function() {localStorage.setItem("Lm04",$App.Lm04);};
$scope.PushButton190_click = function() {$scope.GotoPage( "PhHome" );};
$scope.PushButton191_click = function() {neoTalkSpeak($App.Lm04, "uk", 1, .9);};
$scope.Pager13_prevclick = function() {$scope.GotoPrevPage();};
$scope.Pager13_nextclick = function() {$scope.GotoNextPage();};
});
NeoApp.controller("Karbo5_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 13;
$App.NAB.PageID = "Karbo5";
$scope.TextArea192_change = function() {localStorage.setItem("Lm05",$App.Lm05);};
$scope.PushButton192_click = function() {$scope.GotoPage( "PhHome" );};
$scope.PushButton193_click = function() {neoTalkSpeak($App.Lm05, "uk", 1, .9);};
$scope.Pager14_prevclick = function() {$scope.GotoPrevPage();};
$scope.Pager14_nextclick = function() {$scope.GotoNextPage();};
});
NeoApp.controller("Karbo6_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 14;
$App.NAB.PageID = "Karbo6";
$scope.TextArea193_change = function() {localStorage.setItem("Lm06",$App.Lm06);};
$scope.PushButton194_click = function() {$scope.GotoPage( "PhHome" );};
$scope.PushButton195_click = function() {neoTalkSpeak($App.Lm06, "uk", 1, .9);};
$scope.Pager15_prevclick = function() {$scope.GotoPrevPage();};
$scope.Pager15_nextclick = function() {$scope.GotoNextPage();};
});
NeoApp.controller("Karbo7_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 15;
$App.NAB.PageID = "Karbo7";
$scope.TextArea194_change = function() {localStorage.setItem("Lm07",$App.Lm07);};
$scope.PushButton196_click = function() {$scope.GotoPage( "PhHome" );};
$scope.PushButton197_click = function() {neoTalkSpeak($App.Lm07, "uk", 1, .9);};
$scope.Pager16_prevclick = function() {$scope.GotoPrevPage();};
$scope.Pager16_nextclick = function() {$scope.GotoNextPage();};
});
NeoApp.controller("Karbo8_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 16;
$App.NAB.PageID = "Karbo8";
$scope.TextArea195_change = function() {localStorage.setItem("Lm08",$App.Lm08);};
$scope.PushButton198_click = function() {$scope.GotoPage( "PhHome" );};
$scope.PushButton199_click = function() {neoTalkSpeak($App.Lm08, "uk", 1, .9);};
$scope.Pager17_prevclick = function() {$scope.GotoPrevPage();};
$scope.Pager17_nextclick = function() {$scope.GotoNextPage();};
});
NeoApp.controller("Karbo9_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 17;
$App.NAB.PageID = "Karbo9";
$scope.TextArea196_change = function() {localStorage.setItem("Lm09",$App.Lm09);};
$scope.PushButton200_click = function() {$scope.GotoPage( "PhHome" );};
$scope.PushButton201_click = function() {neoTalkSpeak($App.Lm09, "uk", 1, .9);};
$scope.Pager18_prevclick = function() {$scope.GotoPrevPage();};
$scope.Pager18_nextclick = function() {$scope.GotoNextPage();};
});
NeoApp.controller("Karbo10_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 18;
$App.NAB.PageID = "Karbo10";
$scope.TextArea197_change = function() {localStorage.setItem("Lm10",$App.Lm10);};
$scope.PushButton202_click = function() {$scope.GotoPage( "PhHome" );};
$scope.PushButton203_click = function() {neoTalkSpeak($App.Lm10, "uk", 1, .9);};
$scope.Pager19_prevclick = function() {$scope.GotoPrevPage();};
});
NeoApp.controller("Karbo_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 19;
$App.NAB.PageID = "Karbo";
});
NeoApp.controller("xxxxxxxxxxxxxxxKarbooxxx_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 20;
$App.NAB.PageID = "xxxxxxxxxxxxxxxKarbooxxx";
});
NeoApp.controller("PhHome_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 21;
$App.NAB.PageID = "PhHome";
$scope.Headline300_click = function() {$App.PhOverview = $App.ph6;};
$scope.Headline300_dblclick = function() {$scope.GotoPage( "Ph6Main" );};
$scope.Headline301_click = function() {$App.PhOverview = $App.ph7;};
$scope.Headline301_dblclick = function() {$scope.GotoPage( "Ph7Main" );};
$scope.Headline302_click = function() {$App.PhOverview = $App.ph3;};
$scope.Headline302_dblclick = function() {$scope.GotoPage( "Ph3Main" );};
$scope.Headline304_click = function() {$App.PhOverview = $App.ph1;};
$scope.Headline304_dblclick = function() {$scope.GotoPage( "Ph1Main" );};
$scope.Headline305_click = function() {$App.PhOverview = $App.ph8;};
$scope.Headline305_dblclick = function() {$scope.GotoPage( "Ph8Main" );};
$scope.Headline306_click = function() {$App.PhOverview = $App.ph9;};
$scope.Headline306_dblclick = function() {$scope.GotoPage( "Ph9Main" );};
$scope.Headline307_click = function() {$scope.GotoPage( "Settings1" );};
$scope.Headline308_click = function() {$App.R1 = localStorage.getItem("R1");
$App.R2 = localStorage.getItem("R2");
$App.R3 = localStorage.getItem("R3");
$App.R4 = localStorage.getItem("R4");
$App.R5 = localStorage.getItem("R5");
$App.R6 = localStorage.getItem("R6");
$App.R7 = localStorage.getItem("R7");
$App.R8 = localStorage.getItem("R8");
$App.R9 = localStorage.getItem("R9");
$App.R10 = localStorage.getItem("R10");
$App.R11 = localStorage.getItem("R11");
$scope.GotoPage( "Rulz" );};
$scope.PushButton74_click = function() {window.document.location.reload();};
$scope.Headline309_click = function() {$App.PhOverview = $App.ph10;};
$scope.Headline309_dblclick = function() {$scope.GotoPage( "Ph10Main" );};
$scope.Headline310_click = function() {$App.PhOverview = $App.ph2;};
$scope.Headline310_dblclick = function() {$scope.GotoPage( "Ph2Main" );};
$scope.Headline311_click = function() {$App.PhOverview = $App.ph4;};
$scope.Headline311_dblclick = function() {$scope.GotoPage( "Ph4Main" );};
$scope.Headline312_click = function() {$App.PhOverview = $App.ph5;};
$scope.Headline312_dblclick = function() {$scope.GotoPage( "Ph5Main" );};
$scope.PushButton75_click = function() {$scope.GotoPage( "Home" );};
$scope.Headline318_click = function() {$scope.GotoPage( "ADHDHome" );};
});
NeoApp.controller("Ph1Main_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 22;
$App.NAB.PageID = "Ph1Main";
$scope.TextArea135_change = function() {localStorage.setItem("ph1main",$App.ph1main);};
$scope.TextArea136_change = function() {localStorage.setItem("ph1mainCR",$App.ph1mainCR);};
$scope.TextArea137_change = function() {localStorage.setItem("ph1mainHlight1",$App.ph1mainHlight1);};
$scope.TextArea138_change = function() {localStorage.setItem("Ph1due",$App.Ph1due);};
$scope.PushButton105_click = function() {$scope.GotoPage( "PhHome" );};
});
NeoApp.controller("Ph2Main_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 23;
$App.NAB.PageID = "Ph2Main";
$scope.TextArea91_change = function() {localStorage.setItem("ph2main",$App.ph2main);};
$scope.TextArea92_change = function() {localStorage.setItem("ph2mainCR",$App.ph2mainCR);};
$scope.TextArea93_change = function() {localStorage.setItem("ph2mainHlight1",$App.ph2mainHlight1);};
$scope.TextArea134_change = function() {localStorage.setItem("ph2due",$App.Ph2due);};
$scope.PushButton72_click = function() {$scope.GotoPage( "PhHome" );};
});
NeoApp.controller("Ph3Main_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 24;
$App.NAB.PageID = "Ph3Main";
$scope.TextArea139_change = function() {localStorage.setItem("ph3main",$App.ph3main);};
$scope.TextArea140_change = function() {localStorage.setItem("ph3mainCR",$App.ph3mainCR);};
$scope.TextArea141_change = function() {localStorage.setItem("ph3mainHlight1",$App.ph3mainHlight1);};
$scope.TextArea142_change = function() {localStorage.setItem("Ph3due",$App.Ph3due);};
$scope.PushButton161_click = function() {$scope.GotoPage( "PhHome" );};
});
NeoApp.controller("Ph4Main_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 25;
$App.NAB.PageID = "Ph4Main";
$scope.TextArea143_change = function() {localStorage.setItem("ph4main",$App.ph4main);};
$scope.TextArea144_change = function() {localStorage.setItem("ph4mainCR",$App.ph4mainCR);};
$scope.TextArea145_change = function() {localStorage.setItem("ph4mainHlight1",$App.ph4mainHlight1);};
$scope.TextArea146_change = function() {localStorage.setItem("Ph4due",$App.Ph4due);};
$scope.PushButton163_click = function() {$scope.GotoPage( "PhHome" );};
});
NeoApp.controller("Ph5Main_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 26;
$App.NAB.PageID = "Ph5Main";
$scope.TextArea147_change = function() {localStorage.setItem("ph5main",$App.ph5main);};
$scope.TextArea148_change = function() {localStorage.setItem("ph5mainCR",$App.ph5mainCR);};
$scope.TextArea149_change = function() {localStorage.setItem("ph5mainHlight1",$App.ph5mainHlight1);};
$scope.TextArea150_change = function() {localStorage.setItem("Ph5due",$App.Ph5due);};
$scope.PushButton165_click = function() {$scope.GotoPage( "PhHome" );};
});
NeoApp.controller("Ph6Main_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 27;
$App.NAB.PageID = "Ph6Main";
$scope.TextArea151_change = function() {localStorage.setItem("ph6main",$App.ph6main);};
$scope.TextArea152_change = function() {localStorage.setItem("ph6mainCR",$App.ph6mainCR);};
$scope.TextArea153_change = function() {localStorage.setItem("ph6mainHlight1",$App.ph6mainHlight1);};
$scope.TextArea154_change = function() {localStorage.setItem("Ph6due",$App.Ph6due);};
$scope.PushButton164_click = function() {$scope.GotoPage( "PhHome" );};
});
NeoApp.controller("Ph7Main_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 28;
$App.NAB.PageID = "Ph7Main";
$scope.TextArea155_change = function() {localStorage.setItem("ph7main",$App.ph7main);};
$scope.TextArea156_change = function() {localStorage.setItem("ph7mainCR",$App.ph7mainCR);};
$scope.TextArea157_change = function() {localStorage.setItem("ph7mainHlight1",$App.ph7mainHlight1);};
$scope.TextArea158_change = function() {localStorage.setItem("Ph7due",$App.Ph7due);};
$scope.PushButton162_click = function() {$scope.GotoPage( "PhHome" );};
});
NeoApp.controller("Ph8Main_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 29;
$App.NAB.PageID = "Ph8Main";
$scope.TextArea159_change = function() {localStorage.setItem("ph8main",$App.ph8main);};
$scope.TextArea160_change = function() {localStorage.setItem("ph8mainCR",$App.ph8mainCR);};
$scope.TextArea161_change = function() {localStorage.setItem("ph8mainHlight1",$App.ph8mainHlight1);};
$scope.TextArea162_change = function() {localStorage.setItem("Ph8due",$App.ph8due);};
$scope.PushButton160_click = function() {$scope.GotoPage( "PhHome" );};
});
NeoApp.controller("Ph9Main_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 30;
$App.NAB.PageID = "Ph9Main";
$scope.TextArea163_change = function() {localStorage.setItem("ph9main",$App.ph9main);};
$scope.TextArea164_change = function() {localStorage.setItem("ph9mainCR",$App.ph9mainCR);};
$scope.TextArea165_change = function() {localStorage.setItem("ph9mainHlight1",$App.ph9mainHlight1);};
$scope.TextArea166_change = function() {localStorage.setItem("Ph9due",$App.Ph9due);};
$scope.PushButton73_click = function() {$scope.GotoPage( "PhHome" );};
});
NeoApp.controller("Ph10Main_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 31;
$App.NAB.PageID = "Ph10Main";
$scope.TextArea167_change = function() {localStorage.setItem("ph10main",$App.ph10main);};
$scope.TextArea168_change = function() {localStorage.setItem("ph10mainCR",$App.ph10mainCR);};
$scope.TextArea169_change = function() {localStorage.setItem("ph10mainHlight1",$App.ph10mainHlight1);};
$scope.PushButton175_click = function() {$scope.GotoPage( "PhHome" );};
$scope.TextArea170_change = function() {localStorage.setItem("Ph10due",$App.Ph10due);};
});
NeoApp.controller("xxxxxxxxxxxxxxxxxx_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 32;
$App.NAB.PageID = "xxxxxxxxxxxxxxxxxx";
});
NeoApp.controller("ADHDHome_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 33;
$App.NAB.PageID = "ADHDHome";
$scope.Headline12_dblclick = function() {$scope.GotoPage( "H8Main" );};
$scope.Headline19_dblclick = function() {$scope.GotoPage( "H4Main" );};
$scope.Headline28_dblclick = function() {$scope.GotoPage( "H2Main" );};
$scope.Headline63_click = function() {$App.AdOverview = $App.ad1;};
$scope.Headline63_dblclick = function() {$scope.GotoPage( "AD1main" );};
$scope.Headline78_dblclick = function() {$scope.GotoPage( "H7Main" );};
$scope.Headline164_dblclick = function() {$scope.GotoPage( "H5Main" );};
$scope.Headline165_click = function() {$scope.GotoPage( "Settings1" );};
$scope.Headline168_click = function() {$App.R1 = localStorage.getItem("R1");
$App.R2 = localStorage.getItem("R2");
$App.R3 = localStorage.getItem("R3");
$App.R4 = localStorage.getItem("R4");
$App.R5 = localStorage.getItem("R5");
$App.R6 = localStorage.getItem("R6");
$App.R7 = localStorage.getItem("R7");
$App.R8 = localStorage.getItem("R8");
$App.R9 = localStorage.getItem("R9");
$App.R10 = localStorage.getItem("R10");
$App.R11 = localStorage.getItem("R11");
$scope.GotoPage( "Rulz" );};
$scope.PushButton68_click = function() {window.document.location.reload();};
$scope.Headline170_dblclick = function() {$scope.GotoPage( "H6Main" );};
$scope.Headline171_dblclick = function() {$scope.GotoPage( "H10Main" );};
$scope.Headline182_dblclick = function() {$scope.GotoPage( "H9Main" );};
$scope.Headline184_dblclick = function() {$scope.GotoPage( "H3Main" );};
$scope.PushButton69_click = function() {$scope.GotoPage( "Home" );};
$scope.Headline186_click = function() {$scope.GotoPage( "PhHome" );};
});
NeoApp.controller("HEADERS_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 34;
$App.NAB.PageID = "HEADERS";
$scope.TextInput9_change = function() {localStorage.setItem("h1",$App.h1);};
$scope.TextInput10_change = function() {localStorage.setItem("h2",$App.h2);};
$scope.TextInput11_change = function() {localStorage.setItem("h3",$App.h3);};
$scope.TextInput12_change = function() {localStorage.setItem("h4",$App.h4);};
$scope.TextInput13_change = function() {localStorage.setItem("h5",$App.h5);};
$scope.TextInput14_change = function() {localStorage.setItem("h6",$App.h6);};
$scope.TextInput15_change = function() {localStorage.setItem("h7",$App.h7);};
$scope.TextInput16_change = function() {localStorage.setItem("h8",$App.h8);};
$scope.PushButton31_click = function() {$scope.GotoPage( "Home" );};
$scope.TextInput1_change = function() {localStorage.setItem("h11",$App.h11);};
$scope.TextInput2_change = function() {localStorage.setItem("h12",$App.h12);};
$scope.TextInput3_change = function() {localStorage.setItem("h13",$App.h13);};
$scope.TextInput4_change = function() {localStorage.setItem("h14",$App.h14);};
$scope.TextInput5_change = function() {localStorage.setItem("h15",$App.h15);};
$scope.TextInput6_change = function() {localStorage.setItem("h16",$App.h16);};
$scope.TextInput7_change = function() {localStorage.setItem("h17",$App.h17);};
$scope.TextInput8_change = function() {localStorage.setItem("h18",$App.h18);};
$scope.TextInput17_change = function() {localStorage.setItem("h9",$App.h9);};
$scope.TextInput18_change = function() {localStorage.setItem("h10",$App.h10);};
$scope.PushButton18_click = function() {$scope.GotoPage( "HeadersADHDHelper" );};
$scope.PushButton77_click = function() {$scope.GotoPage( "HeadersPh" );};
$scope.PushButton86_click = function() {$scope.GotoPage( "HeadersPh" );};
$scope.PushButton87_click = function() {$scope.GotoPage( "HeadersQuestions" );};
});
NeoApp.controller("Diary1_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 35;
$App.NAB.PageID = "Diary1";
$scope.PushButton17_click = function() {$scope.GotoPage( "Home" );};
$scope.TextArea130_change = function() {$App.diary1v = $App.diary1;};
$scope.PushButton108_click = function() {$App.diary1 = localStorage.getItem("301224");};
$scope.PushButton109_click = function() {$App.diary1 = localStorage.getItem("311224");};
$scope.PushButton110_click = function() {localStorage.setItem("301224",$App.diary1);};
$scope.PushButton111_click = function() {localStorage.setItem("311224",$App.diary1);};
$scope.PushButton106_click = function() {$App.diary1 = localStorage.getItem("010125");};
$scope.PushButton107_click = function() {localStorage.setItem("010125",$App.diary1);};
$scope.PushButton103_click = function() {$App.diary1 = localStorage.getItem("020125");};
$scope.PushButton104_click = function() {localStorage.setItem("020125",$App.diary1);};
$scope.PushButton112_click = function() {$App.diary1 = localStorage.getItem("030125");};
$scope.PushButton113_click = function() {$App.diary1 = localStorage.getItem("040125");};
$scope.PushButton114_click = function() {localStorage.setItem("030125",$App.diary1);};
$scope.PushButton115_click = function() {localStorage.setItem("040125",$App.diary1);};
$scope.PushButton116_click = function() {$App.diary1 = localStorage.getItem("050125");};
$scope.PushButton117_click = function() {localStorage.setItem("050125",$App.diary1);};
$scope.PushButton118_click = function() {$App.diary1 = localStorage.getItem("060125");};
$scope.PushButton119_click = function() {$App.diary1 = localStorage.getItem("070125");};
$scope.PushButton120_click = function() {localStorage.setItem("060125",$App.diary1);};
$scope.PushButton121_click = function() {localStorage.setItem("070125",$App.diary1);};
$scope.PushButton122_click = function() {$App.diary1 = localStorage.getItem("080125");};
$scope.PushButton123_click = function() {localStorage.setItem("080125",$App.diary1);};
$scope.PushButton124_click = function() {$App.diary1 = localStorage.getItem("090125");};
$scope.PushButton125_click = function() {localStorage.setItem("090125",$App.diary1);};
$scope.PushButton126_click = function() {$App.diary1 = localStorage.getItem("100125");};
$scope.PushButton127_click = function() {$App.diary1 = localStorage.getItem("110125");};
$scope.PushButton128_click = function() {localStorage.setItem("100125",$App.diary1);};
$scope.PushButton129_click = function() {localStorage.setItem("110125",$App.diary1);};
$scope.PushButton130_click = function() {$App.diary1 = localStorage.getItem("120125");};
$scope.PushButton131_click = function() {localStorage.setItem("120125",$App.diary1);};
$scope.PushButton132_click = function() {$App.diary1 = localStorage.getItem("130125");};
$scope.PushButton133_click = function() {$App.diary1 = localStorage.getItem("140125");};
$scope.PushButton134_click = function() {localStorage.setItem("130125",$App.diary1);};
$scope.PushButton135_click = function() {localStorage.setItem("140125",$App.diary1);};
$scope.PushButton136_click = function() {$App.diary1 = localStorage.getItem("150125");};
$scope.PushButton137_click = function() {localStorage.setItem("150125",$App.diary1);};
$scope.PushButton138_click = function() {$App.diary1 = localStorage.getItem("160125");};
$scope.PushButton139_click = function() {localStorage.setItem("160125",$App.diary1);};
$scope.PushButton140_click = function() {$App.diary1 = localStorage.getItem("170125");};
$scope.PushButton141_click = function() {$App.diary1 = localStorage.getItem("180125");};
$scope.PushButton142_click = function() {localStorage.setItem("170125",$App.diary1);};
$scope.PushButton143_click = function() {localStorage.setItem("180125",$App.diary1);};
$scope.PushButton144_click = function() {$App.diary1 = localStorage.getItem("190125");};
$scope.PushButton145_click = function() {localStorage.setItem("190125",$App.diary1);};
$scope.PushButton146_click = function() {$App.diary1 = localStorage.getItem("200125");};
$scope.PushButton147_click = function() {$App.diary1 = localStorage.getItem("210125");};
$scope.PushButton148_click = function() {localStorage.setItem("200125",$App.diary1);};
$scope.PushButton149_click = function() {localStorage.setItem("210125",$App.diary1);};
$scope.PushButton150_click = function() {$App.diary1 = localStorage.getItem("220125");};
$scope.PushButton151_click = function() {localStorage.setItem("220125",$App.diary1);};
$scope.PushButton152_click = function() {$App.diary1 = localStorage.getItem("230125");};
$scope.PushButton153_click = function() {localStorage.setItem("230125",$App.diary1);};
$scope.PushButton154_click = function() {$App.diary1 = localStorage.getItem("240125");};
$scope.PushButton155_click = function() {$App.diary1 = localStorage.getItem("250125");};
$scope.PushButton156_click = function() {localStorage.setItem("240125",$App.diary1);};
$scope.PushButton157_click = function() {localStorage.setItem("250125",$App.diary1);};
$scope.PushButton158_click = function() {$App.diary1 = localStorage.getItem("260125");};
$scope.PushButton159_click = function() {localStorage.setItem("260125",$App.diary1);};
});
NeoApp.controller("HeadersPh_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 36;
$App.NAB.PageID = "HeadersPh";
$scope.TextInput37_change = function() {localStorage.setItem("ph1",$App.ph1);};
$scope.TextInput38_change = function() {localStorage.setItem("ph2",$App.ph2);};
$scope.TextInput39_change = function() {localStorage.setItem("ph3",$App.ph3);};
$scope.TextInput40_change = function() {localStorage.setItem("ph4",$App.ph4);};
$scope.TextInput41_change = function() {localStorage.setItem("ph5",$App.ph5);};
$scope.TextInput42_change = function() {localStorage.setItem("ph6",$App.ph6);};
$scope.TextInput43_change = function() {localStorage.setItem("ph7",$App.ph7);};
$scope.TextInput44_change = function() {localStorage.setItem("ph8",$App.ph8);};
$scope.PushButton76_click = function() {$scope.GotoPage( "Home" );};
$scope.TextInput45_change = function() {localStorage.setItem("ph11",$App.ph11);};
$scope.TextInput46_change = function() {localStorage.setItem("ph12",$App.ph12);};
$scope.TextInput47_change = function() {localStorage.setItem("ph13",$App.ph13);};
$scope.TextInput48_change = function() {localStorage.setItem("ph14",$App.ph14);};
$scope.TextInput49_change = function() {localStorage.setItem("ph15",$App.ph15);};
$scope.TextInput50_change = function() {localStorage.setItem("ph16",$App.ph16);};
$scope.TextInput51_change = function() {localStorage.setItem("ph17",$App.ph17);};
$scope.TextInput52_change = function() {localStorage.setItem("ph18",$App.ph18);};
$scope.TextInput53_change = function() {localStorage.setItem("ph9",$App.ph9);};
$scope.TextInput54_change = function() {localStorage.setItem("ph10",$App.ph10);};
});
NeoApp.controller("HeadersQuestions_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 37;
$App.NAB.PageID = "HeadersQuestions";
$scope.TextInput55_change = function() {localStorage.setItem("Q1",$App.Q1);};
$scope.TextInput56_change = function() {localStorage.setItem("Q2",$App.Q2);};
$scope.TextInput57_change = function() {localStorage.setItem("Q3",$App.Q3);};
$scope.TextInput58_change = function() {localStorage.setItem("Q4",$App.Q4);};
$scope.TextInput59_change = function() {localStorage.setItem("Q5",$App.Q5);};
$scope.TextInput60_change = function() {localStorage.setItem("Q6",$App.Q6);};
$scope.TextInput61_change = function() {localStorage.setItem("Q7",$App.Q7);};
$scope.TextInput62_change = function() {localStorage.setItem("Q8",$App.Q8);};
$scope.PushButton85_click = function() {$scope.GotoPage( "Home" );};
$scope.TextInput63_change = function() {localStorage.setItem("Q11",$App.Q11);};
$scope.TextInput64_change = function() {localStorage.setItem("Q12",$App.Q12);};
$scope.TextInput65_change = function() {localStorage.setItem("Q13",$App.Q13);};
$scope.TextInput66_change = function() {localStorage.setItem("Q14",$App.Q14);};
$scope.TextInput67_change = function() {localStorage.setItem("Q15",$App.Q15);};
$scope.TextInput68_change = function() {localStorage.setItem("Q16",$App.Q16);};
$scope.TextInput69_change = function() {localStorage.setItem("Q17",$App.Q17);};
$scope.TextInput70_change = function() {localStorage.setItem("Q18",$App.Q18);};
$scope.TextInput71_change = function() {localStorage.setItem("Q9",$App.Q9);};
$scope.TextInput72_change = function() {localStorage.setItem("Q10",$App.Q10);};
});
NeoApp.controller("Settings1_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 38;
$App.NAB.PageID = "Settings1";
$scope.PushButton2_click = function() {$scope.GotoPage( "HEADERS" );};
$scope.PushButton30_click = function() {$scope.GotoPage( "Home" );};
$scope.PushButton44_click = function() {$App.mccwa = "https://docs.google.com/spreadsheets/d/1neJsVgixs4Ep2zksqFqkJH1cS-FQrVI2o-DkLBlFPzI/edit?usp=sharing #gid=X";
if ($App.h1 == "") {
neoGSheetsLoadCell($App.mccwa,"h1","A",1,null);

} else {
};
if ($App.h2 == "") {
neoGSheetsLoadCell($App.mccwa,"h2","A",2,null);

} else {
};
if ($App.h3 == "") {
neoGSheetsLoadCell($App.mccwa,"h3","A",3,null);

} else {
};
if ($App.h4 == "") {
neoGSheetsLoadCell($App.mccwa,"h4","A",4,null);

} else {
};
if ($App.h5 == "") {
neoGSheetsLoadCell($App.mccwa,"h5","A",5,null);

} else {
};
if ($App.h6 == "") {
neoGSheetsLoadCell($App.mccwa,"h6","A",6,null);

} else {
};
if ($App.h7 == "") {
neoGSheetsLoadCell($App.mccwa,"h7","A",7,null);

} else {
};
if ($App.h8 == "") {
neoGSheetsLoadCell($App.mccwa,"h8","A",8,null);

} else {
};};
$scope.TextArea125_change = function() {localStorage.setItem("L1",$App.L2);};
$scope.TextArea126_change = function() {localStorage.setItem("L2",$App.L2);};
$scope.TextArea127_change = function() {localStorage.setItem("L3",$App.L3);};
$scope.TextArea128_change = function() {localStorage.setItem("L4",$App.L4);};
$scope.TextArea129_change = function() {localStorage.setItem("L5",$App.L5);};
});
NeoApp.controller("ADHDhelper_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 39;
$App.NAB.PageID = "ADHDhelper";
});
NeoApp.controller("xxxxxxxxxxxxxxxxxad_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 40;
$App.NAB.PageID = "xxxxxxxxxxxxxxxxxad";
});
NeoApp.controller("q1_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 41;
$App.NAB.PageID = "q1";
$scope.TextArea96_change = function() {localStorage.setItem("q1",$App.Q1);};
$scope.TextArea97_change = function() {localStorage.setItem("QA1",$App.QA1);};
$scope.TextArea98_change = function() {localStorage.setItem("q1mainHlight1",$App.Q1mainHlight1);};
$scope.PushButton88_click = function() {$scope.GotoPage( "Home" );};
$scope.Pager3_prevclick = function() {$scope.GotoPrevPage();};
$scope.Pager3_nextclick = function() {$scope.GotoNextPage();};
});
NeoApp.controller("q2_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 42;
$App.NAB.PageID = "q2";
$scope.TextArea99_change = function() {localStorage.setItem("Q2",$App.Q2);};
$scope.TextArea100_change = function() {localStorage.setItem("QA2",$App.QA2);};
$scope.TextArea101_change = function() {localStorage.setItem("q2mainHlight1",$App.Q2mainHlight1);};
$scope.PushButton91_click = function() {$scope.GotoPage( "Home" );};
$scope.Pager4_prevclick = function() {$scope.GotoPrevPage();};
$scope.Pager4_nextclick = function() {$scope.GotoNextPage();};
});
NeoApp.controller("Q3_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 43;
$App.NAB.PageID = "Q3";
$scope.TextArea102_change = function() {localStorage.setItem("Q3",$App.Q3);};
$scope.TextArea103_change = function() {localStorage.setItem("QA3",$App.QA3);};
$scope.TextArea104_change = function() {localStorage.setItem("q3mainHlight1",$App.Q3mainHlight1);};
$scope.PushButton93_click = function() {$scope.GotoPage( "Home" );};
$scope.Pager5_prevclick = function() {$scope.GotoPrevPage();};
$scope.Pager5_nextclick = function() {$scope.GotoNextPage();};
});
NeoApp.controller("q4_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 44;
$App.NAB.PageID = "q4";
$scope.TextArea105_change = function() {localStorage.setItem("Q4",$App.Q4);};
$scope.TextArea106_change = function() {localStorage.setItem("QA4",$App.QA4);};
$scope.TextArea107_change = function() {localStorage.setItem("q4mainHlight1",$App.Q4mainHlight1);};
$scope.PushButton95_click = function() {$scope.GotoPage( "Home" );};
$scope.Pager6_prevclick = function() {$scope.GotoPrevPage();};
$scope.Pager6_nextclick = function() {$scope.GotoNextPage();};
});
NeoApp.controller("q5_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 45;
$App.NAB.PageID = "q5";
$scope.TextArea108_change = function() {localStorage.setItem("Q5",$App.Q5);};
$scope.TextArea109_change = function() {localStorage.setItem("QA5",$App.QA5);};
$scope.TextArea110_change = function() {localStorage.setItem("q5mainHlight1",$App.Q5mainHlight1);};
$scope.PushButton97_click = function() {$scope.GotoPage( "Home" );};
$scope.Pager2_prevclick = function() {$scope.GotoPrevPage();};
$scope.Pager2_nextclick = function() {$scope.GotoNextPage();};
});
NeoApp.controller("q6_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 46;
$App.NAB.PageID = "q6";
$scope.TextArea111_change = function() {localStorage.setItem("Q6",$App.Q6);};
$scope.TextArea112_change = function() {localStorage.setItem("QA6",$App.QA6);};
$scope.TextArea113_change = function() {localStorage.setItem("q6mainHlight1",$App.Q6mainHlight1);};
$scope.PushButton99_click = function() {$scope.GotoPage( "Home" );};
$scope.Pager1_prevclick = function() {$scope.GotoPrevPage();};
$scope.Pager1_nextclick = function() {$scope.GotoNextPage();};
});
NeoApp.controller("q7_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 47;
$App.NAB.PageID = "q7";
$scope.TextArea114_change = function() {localStorage.setItem("Q7",$App.Q7);};
$scope.TextArea115_change = function() {localStorage.setItem("QA7",$App.QA7);};
$scope.TextArea116_change = function() {localStorage.setItem("q7mainHlight1",$App.Q7mainHlight1);};
$scope.PushButton89_click = function() {$scope.GotoPage( "Home" );};
$scope.Pager7_prevclick = function() {$scope.GotoPrevPage();};
$scope.Pager7_nextclick = function() {$scope.GotoNextPage();};
});
NeoApp.controller("q8_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 48;
$App.NAB.PageID = "q8";
$scope.TextArea117_change = function() {localStorage.setItem("Q8",$App.Q8);};
$scope.TextArea118_change = function() {localStorage.setItem("QA8",$App.QA8);};
$scope.TextArea119_change = function() {localStorage.setItem("q8mainHlight1",$App.Q8mainHlight1);};
$scope.PushButton92_click = function() {$scope.GotoPage( "Home" );};
$scope.Pager8_prevclick = function() {$scope.GotoPrevPage();};
$scope.Pager8_nextclick = function() {$scope.GotoNextPage();};
});
NeoApp.controller("q9_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 49;
$App.NAB.PageID = "q9";
$scope.TextArea198_change = function() {localStorage.setItem("Q9",$App.Q9);};
$scope.TextArea199_change = function() {localStorage.setItem("QA9",$App.QA9);};
$scope.TextArea200_change = function() {localStorage.setItem("q9mainHlight1",$App.Q9mainHlight1);};
$scope.PushButton204_click = function() {$scope.GotoPage( "Home" );};
$scope.Pager20_prevclick = function() {$scope.GotoPrevPage();};
$scope.Pager20_nextclick = function() {$scope.GotoNextPage();};
});
NeoApp.controller("q10_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 50;
$App.NAB.PageID = "q10";
$scope.TextArea201_change = function() {localStorage.setItem("Q10",$App.Q10);};
$scope.TextArea202_change = function() {localStorage.setItem("QA10",$App.QA10);};
$scope.TextArea203_change = function() {localStorage.setItem("q10mainHlight1",$App.Q10mainHlight1);};
$scope.PushButton205_click = function() {$scope.GotoPage( "Home" );};
$scope.Pager21_prevclick = function() {$scope.GotoPrevPage();};
$scope.Pager21_nextclick = function() {$scope.GotoNextPage();};
});
NeoApp.controller("q11_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 51;
$App.NAB.PageID = "q11";
$scope.TextArea205_change = function() {localStorage.setItem("QA8",$App.QA8);};
$scope.TextArea206_change = function() {localStorage.setItem("q8mainHlight1",$App.Q8mainHlight1);};
$scope.PushButton206_click = function() {$scope.GotoPage( "Home" );};
$scope.Pager22_prevclick = function() {$scope.GotoPrevPage();};
$scope.Pager22_nextclick = function() {$scope.GotoNextPage();};
});
NeoApp.controller("AD1main_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 52;
$App.NAB.PageID = "AD1main";
$scope.TextArea9_change = function() {localStorage.setItem("h1main",$App.h1main);};
$scope.TextArea86_change = function() {localStorage.setItem("h1mainCR",$App.h1mainCR);};
$scope.TextArea87_change = function() {localStorage.setItem("h1mainHlight1",$App.h1mainHlight1);};
$scope.PushButton20_click = function() {$scope.GotoPage( "Home" );};
});
NeoApp.controller("x1xxxxxxxxxxxxxxxad_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 53;
$App.NAB.PageID = "x1xxxxxxxxxxxxxxxad";
});
NeoApp.controller("AD2main_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 54;
$App.NAB.PageID = "AD2main";
$scope.TextArea88_change = function() {localStorage.setItem("ad2main",$App.ad2main);};
$scope.TextArea89_change = function() {localStorage.setItem("ad2mainCR",$App.ad2mainCR);};
$scope.TextArea90_change = function() {localStorage.setItem("ad2mainHlight1",$App.ad2mainHlight1);};
$scope.PushButton70_click = function() {$scope.GotoPage( "Home" );};
});
NeoApp.controller("xxxpxxxxxxxxxxxxxph_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 55;
$App.NAB.PageID = "xxxpxxxxxxxxxxxxxph";
});
NeoApp.controller("Prayer_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 56;
$App.NAB.PageID = "Prayer";
$scope.PushButton209_click = function() {neoTalkResumeSpeech();
$scope.ObjectToFront("PushButton208");};
$scope.PushButton208_click = function() {neoTalkPauseSpeech();
$scope.ObjectToBack("PushButton208");};
$scope.TextArea94_change = function() {localStorage.setItem("Prayer1main",$App.Prayer1main);};
$scope.PushButton79_click = function() {$scope.GotoPage( "Home" );};
$scope.PushButton80_click = function() {$App.Prayer1main = localStorage.getItem("Prayer1mainR");};
$scope.PushButton207_click = function() {neoTalkSpeak($App.Prayer1main, "uk", 1, .9);};
$scope.PushButton210_click = function() {neoTalkCancelSpeech();};
});
NeoApp.controller("xxxxxxxxxxxxprayxxxx_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 57;
$App.NAB.PageID = "xxxxxxxxxxxxprayxxxx";
});
NeoApp.controller("Rep1_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 58;
$App.NAB.PageID = "Rep1";
$scope.TextArea95_change = function() {localStorage.setItem("Rep1main",$App.Rep1main);};
$scope.PushButton82_click = function() {$scope.GotoPage( "Home" );};
});
NeoApp.controller("xxxxxxxxxxrepxxxxxxx_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 59;
$App.NAB.PageID = "xxxxxxxxxxrepxxxxxxx";
});
NeoApp.controller("Projectmanager_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 60;
$App.NAB.PageID = "Projectmanager";
});
NeoApp.controller("H1Main_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 61;
$App.NAB.PageID = "H1Main";
$scope.TextArea20_change = function() {localStorage.setItem("h1main",$App.h1main);};
$scope.TextArea49_change = function() {localStorage.setItem("h1mainCR",$App.h1mainCR);};
$scope.TextArea57_change = function() {localStorage.setItem("h1mainHlight1",$App.h1mainHlight1);};
$scope.PushButton7_click = function() {$scope.GotoPage( "Home" );};
$scope.PushButton9_click = function() {$scope.GotoPage( "H1m2" );};
$scope.TextArea131_change = function() {localStorage.setItem("h1link1",$App.h1link1);};
$scope.PushButton102_click = function() {window.open($App.h1link1, "_blank");};
$scope.PushButton169_click = function() {$scope.GotoPage( "HV1" );};
});
NeoApp.controller("H1m2_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 62;
$App.NAB.PageID = "H1m2";
$scope.TextArea65_change = function() {localStorage.setItem("h1next",$App.h1next);};
$scope.TextArea67_change = function() {localStorage.setItem("h1due",$App.h1due);};
$scope.PushButton1_click = function() {$scope.GotoPage( "Home" );};
$scope.PushButton8_click = function() {$scope.GotoPage( "H1m3" );};
});
NeoApp.controller("H1m3_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 63;
$App.NAB.PageID = "H1m3";
$scope.TextArea81_change = function() {localStorage.setItem("h1note1",$App.h1note1);};
$scope.TextArea82_change = function() {localStorage.setItem("h1note2",$App.h1note2);};
$scope.Headline180_click = function() {$scope.GotoPage( "H1Main" );};
$scope.PushButton12_click = function() {$scope.GotoPage( "Home" );};
$scope.PushButton13_click = function() {$scope.GotoPage( "H1m3" );};
});
NeoApp.controller("xxxxxxxxxxxxxxxx1_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 64;
$App.NAB.PageID = "xxxxxxxxxxxxxxxx1";
});
NeoApp.controller("H2Main_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 65;
$App.NAB.PageID = "H2Main";
$scope.TextArea2_change = function() {localStorage.setItem("h2main",$App.h2main);};
$scope.TextArea4_change = function() {localStorage.setItem("h2mainCR",$App.h2mainCR);};
$scope.TextArea10_change = function() {localStorage.setItem("h2mainHlight1",$App.h2mainHlight1);};
$scope.PushButton10_click = function() {$scope.GotoPage( "Home" );};
$scope.PushButton14_click = function() {$scope.GotoPage( "H2m2" );};
});
NeoApp.controller("H2m2_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 66;
$App.NAB.PageID = "H2m2";
$scope.TextArea11_change = function() {localStorage.setItem("h2next",$App.h2next);};
$scope.TextArea12_change = function() {localStorage.setItem("h2due",$App.h2due);};
$scope.PushButton15_click = function() {$scope.GotoPage( "Home" );};
$scope.PushButton16_click = function() {$scope.GotoPage( "H2m3" );};
});
NeoApp.controller("H2m3_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 67;
$App.NAB.PageID = "H2m3";
$scope.TextArea21_change = function() {localStorage.setItem("h2note1",$App.h2note1);};
$scope.TextArea50_change = function() {localStorage.setItem("h2note2",$App.h2note2);};
$scope.PushButton19_click = function() {$scope.GotoPage( "Home" );};
});
NeoApp.controller("xxxxxxxxxxxxxxxx2_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 68;
$App.NAB.PageID = "xxxxxxxxxxxxxxxx2";
});
NeoApp.controller("H3Main_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 69;
$App.NAB.PageID = "H3Main";
$scope.TextArea18_change = function() {localStorage.setItem("h3main",$App.h3main);};
$scope.TextArea51_change = function() {localStorage.setItem("h3mainCR",$App.h3mainCR);};
$scope.TextArea58_change = function() {localStorage.setItem("h3mainHlight1",$App.h3mainHlight1);};
$scope.Headline91_click = function() {$scope.GotoPage( "H1Main" );};
$scope.PushButton21_click = function() {$scope.GotoPage( "Home" );};
$scope.PushButton23_click = function() {$scope.GotoPage( "H3m2" );};
});
NeoApp.controller("H3m2_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 70;
$App.NAB.PageID = "H3m2";
$scope.TextArea59_change = function() {localStorage.setItem("h3next",$App.h3next);};
$scope.TextArea66_change = function() {localStorage.setItem("h3due",$App.h3due);};
$scope.Headline233_click = function() {$scope.GotoPage( "H1Main" );};
$scope.PushButton29_click = function() {$scope.GotoPage( "Home" );};
$scope.PushButton58_click = function() {$scope.GotoPage( "H3m3" );};
});
NeoApp.controller("H3m3_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 71;
$App.NAB.PageID = "H3m3";
$scope.TextArea68_change = function() {localStorage.setItem("h3note1",$App.h3note1);};
$scope.TextArea69_change = function() {localStorage.setItem("h3note2",$App.h3note2);};
$scope.Headline256_click = function() {$scope.GotoPage( "H1Main" );};
$scope.PushButton59_click = function() {$scope.GotoPage( "Home" );};
});
NeoApp.controller("xxxxxxxxxxxxxxxx3_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 72;
$App.NAB.PageID = "xxxxxxxxxxxxxxxx3";
});
NeoApp.controller("H4Main_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 73;
$App.NAB.PageID = "H4Main";
$scope.TextArea23_change = function() {localStorage.setItem("h4main",$App.h4main);};
$scope.TextArea52_change = function() {localStorage.setItem("h4mainCR",$App.h4mainCR);};
$scope.TextArea60_change = function() {localStorage.setItem("h4mainHlight1",$App.h4mainHlight1);};
$scope.Headline93_click = function() {$scope.GotoPage( "H1Main" );};
$scope.PushButton35_click = function() {$scope.GotoPage( "Home" );};
$scope.PushButton36_click = function() {$scope.GotoPage( "H4m2" );};
});
NeoApp.controller("H4m2_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 74;
$App.NAB.PageID = "H4m2";
$scope.TextArea70_change = function() {localStorage.setItem("h4next",$App.h4next);};
$scope.TextArea71_change = function() {localStorage.setItem("h4due",$App.h4due);};
$scope.Headline238_click = function() {$scope.GotoPage( "H1Main" );};
$scope.PushButton60_click = function() {$scope.GotoPage( "Home" );};
$scope.PushButton61_click = function() {$scope.GotoPage( "H4M3" );};
});
NeoApp.controller("H4M3_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 75;
$App.NAB.PageID = "H4M3";
$scope.TextArea72_change = function() {localStorage.setItem("h4note1",$App.h4note1);};
$scope.TextArea83_change = function() {localStorage.setItem("h4note2",$App.h4note2);};
$scope.Headline263_click = function() {$scope.GotoPage( "H1Main" );};
$scope.PushButton62_click = function() {$scope.GotoPage( "Home" );};
});
NeoApp.controller("xxxxxxxxxxxxxxxx4_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 76;
$App.NAB.PageID = "xxxxxxxxxxxxxxxx4";
});
NeoApp.controller("H5Main_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 77;
$App.NAB.PageID = "H5Main";
$scope.TextArea13_change = function() {localStorage.setItem("h5main",$App.h5main);};
$scope.TextArea14_change = function() {localStorage.setItem("h5mainCR",$App.h5mainCR);};
$scope.TextArea15_change = function() {localStorage.setItem("h5mainHlight1",$App.h5mainHlight1);};
$scope.Headline48_click = function() {$scope.GotoPage( "H1Main" );};
$scope.PushButton22_click = function() {$scope.GotoPage( "Home" );};
$scope.PushButton24_click = function() {$scope.GotoPage( "H5M2" );};
$scope.PushButton167_click = function() {$scope.GotoPage( "HV1" );};
});
NeoApp.controller("HV1_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 78;
$App.NAB.PageID = "HV1";
$scope.TextArea171_change = function() {localStorage.setItem("Hv1",$App.Hv1);};
$scope.PushButton166_click = function() {$scope.GotoPage( "Home" );};
$scope.TextArea175_change = function() {localStorage.setItem("Hv1d",$App.Hv1d);};
$scope.TextArea172_change = function() {localStorage.setItem("Hv2",$App.Hv2);};
$scope.TextArea173_change = function() {localStorage.setItem("Hv2d",$App.Hv2d);};
$scope.TextArea174_change = function() {localStorage.setItem("Hv3",$App.Hv3);};
$scope.TextArea176_change = function() {localStorage.setItem("Hv3d",$App.Hv3d);};
$scope.TextArea177_change = function() {localStorage.setItem("Hv4",$App.Hv4);};
$scope.TextArea178_change = function() {localStorage.setItem("Hv4d",$App.Hv4d);};
$scope.PushButton170_click = function() {$scope.GotoPage( "HV2" );};
});
NeoApp.controller("HV2_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 79;
$App.NAB.PageID = "HV2";
$scope.TextArea179_change = function() {localStorage.setItem("Hv5",$App.Hv5);};
$scope.PushButton168_click = function() {$scope.GotoPage( "Home" );};
$scope.TextArea180_change = function() {localStorage.setItem("Hv5d",$App.Hv5d);};
$scope.TextArea181_change = function() {localStorage.setItem("Hv6",$App.Hv6);};
$scope.TextArea182_change = function() {localStorage.setItem("Hv6d",$App.Hv6d);};
$scope.TextArea183_change = function() {localStorage.setItem("Hv7",$App.Hv7);};
$scope.TextArea184_change = function() {localStorage.setItem("Hv7d",$App.Hv7d);};
$scope.TextArea185_change = function() {localStorage.setItem("Hv8",$App.Hv8);};
$scope.TextArea186_change = function() {localStorage.setItem("Hv8d",$App.Hv8d);};
});
NeoApp.controller("H5M2_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 80;
$App.NAB.PageID = "H5M2";
$scope.TextArea16_change = function() {localStorage.setItem("h5next",$App.h5next);};
$scope.TextArea17_change = function() {localStorage.setItem("h5due",$App.h5due);};
$scope.Headline56_click = function() {$scope.GotoPage( "H1Main" );};
$scope.PushButton25_click = function() {$scope.GotoPage( "Home" );};
$scope.PushButton26_click = function() {$scope.GotoPage( "H5M3" );};
});
NeoApp.controller("H5M3_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 81;
$App.NAB.PageID = "H5M3";
$scope.TextArea19_change = function() {localStorage.setItem("h5note1",$App.h5note1);};
$scope.TextArea22_change = function() {localStorage.setItem("h5note2",$App.h5note2);};
$scope.Headline62_click = function() {$scope.GotoPage( "H1Main" );};
$scope.PushButton27_click = function() {$scope.GotoPage( "Home" );};
});
NeoApp.controller("xxxxxxxxxxxxxxxx5_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 82;
$App.NAB.PageID = "xxxxxxxxxxxxxxxx5";
});
NeoApp.controller("H6Main_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 83;
$App.NAB.PageID = "H6Main";
$scope.TextArea24_change = function() {localStorage.setItem("h6main",$App.h6main);};
$scope.TextArea25_change = function() {localStorage.setItem("h6mainCR",$App.h6mainCR);};
$scope.Headline84_click = function() {$scope.GotoPage( "H1Main" );};
$scope.PushButton28_click = function() {$scope.GotoPage( "Home" );};
$scope.PushButton32_click = function() {$scope.GotoPage( "H6M2" );};
$scope.TextArea120_change = function() {localStorage.setItem("h6link2",$App.h6link2);};
$scope.TextArea121_change = function() {localStorage.setItem("h6link1",$App.h6link1);};
$scope.TextArea122_change = function() {localStorage.setItem("h6link4",$App.h6link4);};
$scope.TextArea123_change = function() {localStorage.setItem("h6link3",$App.h6link3);};
$scope.PushButton94_click = function() {window.open($App.h6link1, "_blank");};
$scope.PushButton96_click = function() {window.open($App.h6link2, "_blank");};
$scope.PushButton98_click = function() {window.open($App.h6link3, "_blank");};
$scope.PushButton100_click = function() {window.open($App.h6link4, "_blank");};
$scope.TextArea124_change = function() {localStorage.setItem("h6link5",$App.h6link5);};
$scope.PushButton101_click = function() {window.open($App.h6link5, "_blank");};
});
NeoApp.controller("H6M2_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 84;
$App.NAB.PageID = "H6M2";
$scope.TextArea53_change = function() {localStorage.setItem("h6next",$App.h6next);};
$scope.TextArea54_change = function() {localStorage.setItem("h6due",$App.h6due);};
$scope.Headline101_click = function() {$scope.GotoPage( "H1Main" );};
$scope.PushButton33_click = function() {$scope.GotoPage( "Home" );};
$scope.PushButton34_click = function() {$scope.GotoPage( "H6M3" );};
$scope.TextArea26_change = function() {localStorage.setItem("h6mainHlight1",$App.h6mainHlight1);};
});
NeoApp.controller("H6M3_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 85;
$App.NAB.PageID = "H6M3";
$scope.TextArea55_change = function() {localStorage.setItem("h6note1",$App.h6note1);};
$scope.TextArea56_change = function() {localStorage.setItem("h6note2",$App.h6note2);};
$scope.Headline175_click = function() {$scope.GotoPage( "H1Main" );};
$scope.PushButton37_click = function() {$scope.GotoPage( "Home" );};
});
NeoApp.controller("xxxxxxxxxxxxxxxx6_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 86;
$App.NAB.PageID = "xxxxxxxxxxxxxxxx6";
});
NeoApp.controller("H7Main_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 87;
$App.NAB.PageID = "H7Main";
$scope.TextArea61_change = function() {localStorage.setItem("h7main",$App.h7main);};
$scope.TextArea62_change = function() {localStorage.setItem("h7mainCR",$App.h7mainCR);};
$scope.TextArea63_change = function() {localStorage.setItem("h7mainHlight1",$App.h7mainHlight1);};
$scope.Headline208_click = function() {$scope.GotoPage( "H7Main" );};
$scope.PushButton38_click = function() {$scope.GotoPage( "Home" );};
$scope.PushButton39_click = function() {$scope.GotoPage( "H7M2" );};
});
NeoApp.controller("H7M2_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 88;
$App.NAB.PageID = "H7M2";
$scope.TextArea64_change = function() {localStorage.setItem("h7next",$App.h7next);};
$scope.TextArea73_change = function() {localStorage.setItem("h7due",$App.h7due);};
$scope.PushButton40_click = function() {$scope.GotoPage( "Home" );};
$scope.PushButton41_click = function() {$scope.GotoPage( "H7M3" );};
});
NeoApp.controller("H7M3_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 89;
$App.NAB.PageID = "H7M3";
$scope.TextArea74_change = function() {localStorage.setItem("h7note1",$App.h7note1);};
$scope.TextArea75_change = function() {localStorage.setItem("h7note2",$App.h7note2);};
$scope.PushButton42_click = function() {$scope.GotoPage( "Home" );};
});
NeoApp.controller("xxxxxxxxxxxxxxxx7_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 90;
$App.NAB.PageID = "xxxxxxxxxxxxxxxx7";
});
NeoApp.controller("H8Main_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 91;
$App.NAB.PageID = "H8Main";
$scope.TextArea76_change = function() {localStorage.setItem("h8main",$App.h8main);};
$scope.TextArea77_change = function() {localStorage.setItem("h8mainCR",$App.h8mainCR);};
$scope.TextArea78_change = function() {localStorage.setItem("h8mainHlight1",$App.h8mainHlight1);};
$scope.Headline279_click = function() {$scope.GotoPage( "H1Main" );};
$scope.PushButton63_click = function() {$scope.GotoPage( "Home" );};
$scope.PushButton64_click = function() {$scope.GotoPage( "H8M2" );};
});
NeoApp.controller("H9main_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 92;
$App.NAB.PageID = "H9main";
$scope.TextArea1_change = function() {localStorage.setItem("h9main",$App.h9main);};
$scope.TextArea3_change = function() {localStorage.setItem("h9mainCR",$App.h9mainCR);};
$scope.TextArea5_change = function() {localStorage.setItem("h9mainHlight1",$App.h9mainHlight1);};
$scope.Headline18_click = function() {$scope.GotoPage( "H1Main" );};
$scope.PushButton4_click = function() {$scope.GotoPage( "Home" );};
$scope.PushButton5_click = function() {$scope.GotoPage( "H9M2" );};
$scope.TextArea133_change = function() {localStorage.setItem("h9due",$App.h9due);};
});
NeoApp.controller("H10Main_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 93;
$App.NAB.PageID = "H10Main";
$scope.TextArea6_change = function() {localStorage.setItem("h10main",$App.h10main);};
$scope.TextArea7_change = function() {localStorage.setItem("h10mainCR",$App.h10mainCR);};
$scope.TextArea8_change = function() {localStorage.setItem("h10mainHlight1",$App.h10mainHlight1);};
$scope.Headline76_click = function() {$scope.GotoPage( "H1Main" );};
$scope.PushButton6_click = function() {$scope.GotoPage( "Home" );};
$scope.PushButton11_click = function() {$scope.GotoPage( "H9M2" );};
$scope.TextArea132_change = function() {localStorage.setItem("h10due",$App.h10due);};
});
NeoApp.controller("H8M2_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 94;
$App.NAB.PageID = "H8M2";
$scope.TextArea79_change = function() {localStorage.setItem("h8next",$App.h8next);};
$scope.TextArea80_change = function() {localStorage.setItem("h8due",$App.H8DUE);};
$scope.PushButton65_click = function() {$scope.GotoPage( "Home" );};
$scope.PushButton66_click = function() {$scope.GotoPage( "H8M3" );};
});
NeoApp.controller("H8M3_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 95;
$App.NAB.PageID = "H8M3";
$scope.TextArea84_change = function() {localStorage.setItem("h8note1",$App.h8note1);};
$scope.TextArea85_change = function() {localStorage.setItem("h8note2",$App.h8note2);};
$scope.PushButton67_click = function() {$scope.GotoPage( "Home" );};
});
NeoApp.controller("xxxxxxxxxxxxxxxx8_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 96;
$App.NAB.PageID = "xxxxxxxxxxxxxxxx8";
});
NeoApp.controller("Rulz_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 97;
$App.NAB.PageID = "Rulz";
$scope.TextArea27_change = function() {localStorage.setItem("R1",$App.R1);};
$scope.PushButton43_click = function() {$scope.GotoPage( "Home" );};
$scope.Headline108_click = function() {$scope.GotoPage( "R1more" );
$App.R1m = localStorage.getItem("R1m");};
$scope.TextArea28_change = function() {localStorage.setItem("R2",$App.R2);};
$scope.Headline109_click = function() {$scope.GotoPage( "R2more" );
$App.R2m = localStorage.getItem("R2m");};
$scope.TextArea29_change = function() {localStorage.setItem("R3",$App.R3);};
$scope.Headline110_click = function() {$scope.GotoPage( "R3more" );
$App.R3m = localStorage.getItem("R3m");};
$scope.TextArea30_change = function() {localStorage.setItem("R4",$App.R4);};
$scope.Headline111_click = function() {$scope.GotoPage( "R4more" );
$App.R4m = localStorage.getItem("R4m");};
$scope.TextArea31_change = function() {localStorage.setItem("R5",$App.R5);};
$scope.Headline112_click = function() {$scope.GotoPage( "R5more" );
$App.R5m = localStorage.getItem("R5m");};
$scope.TextArea32_change = function() {localStorage.setItem("R6",$App.R6);};
$scope.Headline113_click = function() {$scope.GotoPage( "R6more" );
$App.R6m = localStorage.getItem("R6m");};
$scope.TextArea33_change = function() {localStorage.setItem("R7",$App.R7);};
$scope.Headline114_click = function() {$scope.GotoPage( "R7more" );
$App.R7m = localStorage.getItem("R7m");};
$scope.TextArea34_change = function() {localStorage.setItem("R8",$App.R8);};
$scope.Headline115_click = function() {$scope.GotoPage( "R8more" );
$App.R8m = localStorage.getItem("R8m");};
$scope.TextArea35_change = function() {localStorage.setItem("R9",$App.R9);};
$scope.Headline116_click = function() {$scope.GotoPage( "R9more" );
$App.R9m = localStorage.getItem("R9m");};
$scope.TextArea36_change = function() {localStorage.setItem("R10",$App.R10);};
$scope.Headline117_click = function() {$scope.GotoPage( "R10more" );
$App.R10m = localStorage.getItem("R10m");};
$scope.TextArea37_change = function() {localStorage.setItem("R11",$App.R11);};
$scope.Headline118_click = function() {$scope.GotoPage( "R11more" );
$App.R11m = localStorage.getItem("R11m");};
});
NeoApp.controller("R1more_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 98;
$App.NAB.PageID = "R1more";
$scope.TextArea38_change = function() {localStorage.setItem("R1m",$App.R1m);};
$scope.PushButton46_click = function() {$scope.GotoPage( "Rulz" );};
});
NeoApp.controller("R2more_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 99;
$App.NAB.PageID = "R2more";
$scope.TextArea39_change = function() {localStorage.setItem("R2m",$App.R2m);};
$scope.PushButton47_click = function() {$scope.GotoPage( "Rulz" );};
$scope.Headline126_click = function() {$scope.GotoPage( "R2more" );};
});
NeoApp.controller("R3more_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 100;
$App.NAB.PageID = "R3more";
$scope.TextArea40_change = function() {localStorage.setItem("R3m",$App.R3m);};
$scope.PushButton48_click = function() {$scope.GotoPage( "Rulz" );};
});
NeoApp.controller("R4more_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 101;
$App.NAB.PageID = "R4more";
$scope.TextArea41_change = function() {localStorage.setItem("R4m",$App.R4m);};
$scope.PushButton49_click = function() {$scope.GotoPage( "Rulz" );};
});
NeoApp.controller("R5more_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 102;
$App.NAB.PageID = "R5more";
$scope.TextArea42_change = function() {localStorage.setItem("R5m",$App.R5m);};
$scope.PushButton50_click = function() {$scope.GotoPage( "Rulz" );};
});
NeoApp.controller("R6more_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 103;
$App.NAB.PageID = "R6more";
$scope.TextArea43_change = function() {localStorage.setItem("R6m",$App.R6m);};
$scope.PushButton51_click = function() {$scope.GotoPage( "Rulz" );};
});
NeoApp.controller("R7more_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 104;
$App.NAB.PageID = "R7more";
$scope.TextArea44_change = function() {localStorage.setItem("R7m",$App.R7m);};
$scope.PushButton52_click = function() {$scope.GotoPage( "Rulz" );};
});
NeoApp.controller("R8more_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 105;
$App.NAB.PageID = "R8more";
$scope.TextArea45_change = function() {localStorage.setItem("R8m",$App.R8m);};
$scope.PushButton53_click = function() {$scope.GotoPage( "Rulz" );};
});
NeoApp.controller("R9more_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 106;
$App.NAB.PageID = "R9more";
$scope.TextArea46_change = function() {localStorage.setItem("R9m",$App.R9m);};
$scope.PushButton54_click = function() {$scope.GotoPage( "Rulz" );};
});
NeoApp.controller("R10more_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 107;
$App.NAB.PageID = "R10more";
$scope.TextArea47_change = function() {localStorage.setItem("R10m",$App.R10m);};
$scope.PushButton55_click = function() {$scope.GotoPage( "Rulz" );};
});
NeoApp.controller("R11more_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 108;
$App.NAB.PageID = "R11more";
$scope.TextArea48_change = function() {localStorage.setItem("R11m",$App.R11m);};
$scope.PushButton56_click = function() {$scope.GotoPage( "Rulz" );};
});
NeoApp.controller("NewDialog_Ctrl", function($scope,$rootScope,$modalInstance,$filter,$window) {
 $scope.CloseDialog = function() {
  $modalInstance.close();
 };
});
function neoGSheetsLoad(gsheets,theArray,sqlquery,subroutine){$App[theArray]=new Array();sheetrock({url:gsheets,query:sqlquery,fetchSize:0,reset:true,callback:function(error,options,response){if(error!=null){console.log("neoGSheetsLoad error: "+error,options,response);if(subroutine){subroutine(error,options,response);}}else{for(n=0;n<response.rows.length;n++){$App[theArray][n]=new Object();for(i=0;i<response.rows[n].cellsArray.length;i++){etiqueta=response.rows[n].labels[i];$App[theArray][n][etiqueta]=response.rows[n].cellsArray[i];}}if(subroutine){subroutine(error,options,response);}}}});};function neoGSheetsLoadColumn(gsheets,theArray,columnLetter,subroutine){$App[theArray]=new Array();columnLetter=columnLetter.toUpperCase();sheetrock({url:gsheets,query:"select "+columnLetter,fetchSize:0,reset:true,callback:function(error,options,response){if(error!=null){console.log("neoGSheetsLoadColumn error: "+error,options,response);if(subroutine){subroutine(error,options,response);}}else{for(n=1;n<response.rows.length;n++){$App[theArray][n-1]=response.rows[n].cellsArray[0];}if(subroutine){subroutine(error,options,response);}}}});};function neoGSheetsLoadCell(gsheets,myVar,columnLetter,rowNumber,subroutine){rowNumber--;columnLetter=columnLetter.toUpperCase();sheetrock({url:gsheets,query:"select "+columnLetter,fetchSize:0,reset:true,callback:function(error,options,response){if(error!=null){console.log("neoGSheetsLoadCell error: "+error,options,response);if(subroutine){subroutine(error,options,response);}}else{$App[myVar]=response.rows[rowNumber].cellsArray[0];if(subroutine){subroutine(error,options,response);}}}});};function neoGSheetsLoadAsTable(objId,gsheets,sqlquery,subroutine){$('#'+objId).html('<table id="'+objId+'neoGSheets" class="table table-striped"></table>');$('#'+objId+'neoGSheets').sheetrock({url:gsheets,fetchSize:0,reset:true,query:sqlquery,callback:function(error,options,response){if(error!=null){console.log("neoGSheetsLoadAsTable error: "+error,options,response);if(subroutine){subroutine(error,options,response);}}else if(subroutine){subroutine(error,options,response);}}});};function neoGSheetsLoadByName(gsheets,theArray,fieldPrefix,sqlquery,subroutine){console.log("neoGSheetsLoadByName - ");sheetrock({url:gsheets,query:"select *",fetchSize:1,reset:true,callback:function(error,options,response){if(error!=null){console.log("neoGSheetsLoadByName error: "+error,options,response);if(subroutine){subroutine(error,options,response);}}else{columnIDStr1="A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,";columnIDStr2="AA,AB,AC,AD,AE,AF,AG,AH,AI,AJ,AK,AL,AM,AN,AO,AP,AQ,AR,AS,AT,AU,AV,AW,AX,AY,AZ,";columnIDStr3="BA,BB,BC,BD,BE,BF,BG,BH,BI,BJ,BK,BL,BM,BN,BO,BP,BQ,BR,BS,BT,BU,BV,BW,BX,BY,BZ";columnIDStr=columnIDStr1+columnIDStr2+columnIDStr3;columnIDArray=columnIDStr.split(",");for(i=0;i<response.rows[0].cellsArray.length;i++){columnID=columnIDArray[i];fieldName=response.rows[0].labels[i];console.log("neoGSheetsLoadByName column for field "+fieldName+" is "+columnID);var regexstring=fieldPrefix+fieldName;var regexp=new RegExp(regexstring,"g");sqlquery=sqlquery.replace(regexp,columnID);}console.log("neoGSheetsLoadByName sqlquery: "+sqlquery);neoGSheetsLoad(gsheets,theArray,sqlquery,subroutine);}}});};
function neoTalkSpeak(text,voice='default',rate=1,pitch=1){speechSynthesis.cancel();var utterance=new SpeechSynthesisUtterance(text);if(voice!=='default'&&voice!==''&&voice!=undefined){utterance.voice=speechSynthesis.getVoices().find(v=>v.name===voice);}else{utterance.voice=speechSynthesis.getVoices()[0];}utterance.rate=rate;utterance.pitch=pitch;speechSynthesis.speak(utterance);}function neoTalkPauseSpeech(){speechSynthesis.pause();}function neoTalkResumeSpeech(){speechSynthesis.resume();}function neoTalkCancelSpeech(){speechSynthesis.cancel();}function neoTalkGetVoices(returnVar){var voices=speechSynthesis.getVoices();if(voices.length===0){speechSynthesis.onvoiceschanged=function(){neoTalkGetVoices(returnVar);};}else{if($App[returnVar]===undefined){$App[returnVar]=[];}voices.forEach(voice=>{$App[returnVar].push(voice.name);});}}function neoTalkStartRecognition(returnVar,continuous,lang,callBack){if(lang==""){lang='en-US';}window.SpeechRecognition=window.SpeechRecognition||window.webkitSpeechRecognition;$App.recognition=new SpeechRecognition();$App.recognition.continuous=continuous;$App.recognition.lang=lang;$App.recognition.onresult=function(event){var lastResultIndex=event.results.length-1;var result=event.results[lastResultIndex][0];var transcript=result.transcript;var confidence=result.confidence;$App[returnVar]=transcript;if(callBack!=null){callBack();}};$App.recognition.onerror=function(event){console.error('Speech recognition error',event.error);};$App.recognition.start();}function neoTalkStopRecognition(){if($App.recognition){$App.recognition.stop();}}async function neoTalkAudioRecord(saveToVariable=null,callbackSubroutine=null){if($App.audioRecorder&&$App.audioRecorder.state!=="inactive"){$App.audioRecorder.stop();$App.audioRecorder.stream.getTracks().forEach(track=>track.stop());}try{const audioStream=await navigator.mediaDevices.getUserMedia({audio:true});$App.audioRecorder=new MediaRecorder(audioStream);$App.audioRecorder.start();$App.audioRecordedChunks=[];$App.audioRecorder.ondataavailable=(event)=>{if(event.data.size>0){$App.audioRecordedChunks.push(event.data);}};$App.audioRecorder.onstop=async()=>{console.log("Audio recorder has been stopped.");audioStream.getTracks().forEach(track=>track.stop());if(saveToVariable){const blob=new Blob($App.audioRecordedChunks,{type:'audio/webm'});const base64String=await blobToBase64(blob);$App[saveToVariable]=base64String;if(callbackSubroutine){callbackSubroutine();}console.log(`Audio recording saved to variable ${saveToVariable}as Base64.`);}};audioStream.getTracks().forEach(track=>track.onended=()=>{console.log("Audio stream track ended.");if($App.audioRecorder&&$App.audioRecorder.state==="recording"){$App.audioRecorder.stop();}});}catch(error){console.error("Error accessing audio devices:",error);}}function neoTalkAudioStopRecording(){if($App.audioRecorder&&$App.audioRecorder.state!=="inactive"){$App.audioRecorder.stop();}else{console.log("No active audio recording found.");}}function neoTalkAudioDownload(fileName,variableName){const base64Data=$App[variableName];if(base64Data){const blob=base64ToBlob(base64Data);const url=URL.createObjectURL(blob);const a=document.createElement("a");a.href=url;a.download=fileName+".webm";document.body.appendChild(a);a.click();document.body.removeChild(a);URL.revokeObjectURL(url);console.log("Audio recording saved.");}else{console.log(`No recorded data found in variable ${variableName}.`);}}function blobToBase64(blob){return new Promise((resolve,reject)=>{const reader=new FileReader();reader.onloadend=()=>resolve(reader.result);reader.onerror=(error)=>reject(error);reader.readAsDataURL(blob);});}function base64ToBlob(base64){const binaryString=atob(base64.split(',')[1]);const arrayBuffer=new ArrayBuffer(binaryString.length);const uint8Array=new Uint8Array(arrayBuffer);for(let i=0;i<binaryString.length;i++){uint8Array[i]=binaryString.charCodeAt(i);}return new Blob([uint8Array],{type:'audio/webm'});}function neoTalkAudioPlay(variableName){if($App[variableName]){const audio=new Audio($App[variableName]);audio.play();}else{console.log("No recorded audio to play.");}}
