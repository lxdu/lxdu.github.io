// JavaScript Document
window.onload=function(){
	
	//nav 圆
	var oNav = document.getElementById('nav');
	//大圆的半径
	var R = oNav.offsetWidth/2;
	//控制有多少个小球
	var aBall = oNav.children;
	//开关，控制收放
	var bOk = true;
	oNav.onclick=function(){
		//判断是收还是放
		if(bOk){	
			//放,每个球走到应有的位置
			for(var i=0;i<aBall.length;i++){
				start(aBall[i],i*360/aBall.length);
			}
		}else{
			//收,每个球走到0
			for(var i=0;i<aBall.length;i++){
				start(aBall[i],0);
			}
		}
		bOk=!bOk;
	};
	function start(obj,iTarget){
		//每个球都有自己的起点，角度
		var start = obj.a||0;
		var dis = iTarget-start;
		var count = Math.floor(700/30);
		var n = 0;
		clearInterval(obj.timer);
		obj.timer = setInterval(function(){
			n++;
			var a = 1-n/count;
			var cur = start+dis*(1-Math.pow(a,3));
			//通过公式求出每个球的坐标
			var x = R+Math.sin(cur*Math.PI/180)*R;
			var y = R-Math.cos(cur*Math.PI/180)*R;
			obj.a = cur;
			obj.style.left = x+'px';
			obj.style.top = y+'px';
			if(n==count){
				clearInterval(obj.timer);
			}
		},30);
	}
	//js穿墙
	function a2d(a){
		return a*180/Math.PI;
	}
	function hoverDir(obj,oEvent){
		var x = obj.offsetLeft+obj.offsetWidth/2-oEvent.clientX;
		var y = obj.offsetTop+obj.offsetHeight/2-oEvent.clientY;
		return Math.round((a2d(Math.atan2(y,x))+180)/90)%4;
	}
	function hoverGo(obj){
		var oS = obj.children[0];
		obj.onmouseover=function(ev){
			var oEvent = ev||event;
			var oFrom = oEvent.fromElement||oEvent.relatedTarget;
			if(obj.contains(oFrom))return;
			var dir = hoverDir(obj,oEvent);
			switch(dir){
				case 0:
					oS.style.left = '200px';
					oS.style.top = 0;
					break;
				case 1:
					oS.style.left = 0;
					oS.style.top = '200px';
					break;
				case 2:
					oS.style.left = '-200px';
					oS.style.top = 0;
					break;
				case 3:
					oS.style.left = 0;
					oS.style.top = '-200px';
					break;
			}
			startMove(oS,{top:0,left:0});
		};
		obj.onmouseout=function(ev){
			var oEvent = ev||event;
			var oTo = oEvent.toElement||oEvent.relatedTarget;
			if(obj.contains(oTo))return;
			var dir = hoverDir(obj,oEvent);
			switch(dir){
				case 0:
					startMove(oS,{left:200,top:0});
					break;
				case 1:
					startMove(oS,{left:0,top:200});
					break;
				case 2:
					startMove(oS,{left:-200,top:0});
					break;
				case 3:
					startMove(oS,{left:0,top:-200});
					break;
			}
		};
	}
	var oJs=document.getElementById('js');
	var oUl = oJs.children[1];
	var aLi = oUl.children;
	for(var i=0;i<aLi.length;i++){
		hoverGo(aLi[i]);
	}
	
//技能进度条
	function findInArr(arr,item){
		for(var i=0;i<arr.length;i++){
			if(arr[i]==item){
				return true;
			}
		}
		return false;
	}
	function getByClass(obj,sClass){
		//判断浏览器是否支持系统提供的方法
		if(obj.getElementsByClassName){
			//兼容
			return obj.getElementsByClassName(sClass);
		}else{
			//不兼容
			var aResult = [];	//容器
			
			//先把obj下所有的元素拿出来
			var aEle = obj.getElementsByTagName('*');
			
			for(var i=0;i<aEle.length;i++){
				//通过空格把一个class变成一组
				var aClass = aEle[i].className.split(' ');
				//看看这个obj下所有元素的class有没有我们想要的sClass
				if(findInArr(aClass,sClass)){
					//如果有，就是我们需要的，插入到aResult中
					aResult.push(aEle[i]);
				}
			}
			
			return aResult;//把这一组元素返回
		}
	}
	var oHbar=document.getElementById('hbar');
	var aBase=getByClass(oHbar,'base');
	var value=['90%','86%','67%','80%'];
	for(var i=0;i<value.length;i++){
		var hBar=aBase[i].children[0];
		hBar.style.width=value[i];
	}	
	
//使用软件
function getStyle(obj,sName){
	return (obj.currentStyle||getComputedStyle(obj,false))[sName];
}
	var oPic = document.getElementById('Pic');
	var aLi = oPic.getElementsByTagName('li');
	var aImg = oPic.getElementsByTagName('img');
	var aA = oPic.getElementsByTagName('a');
	var aPos = [];
	aA[2].onclick=function(){
		fnLeft();
		return false;
	};
	aA[0].onclick=function(){
		fnRight();
		return false;
	};
	for(var i=0;i<aLi.length;i++){
		aPos.push({left:aLi[i].offsetLeft,top:aLi[i].offsetTop,imgW:aImg[i].offsetWidth,imgT:aImg[i].offsetTop,imgO:getStyle(aImg[i],'opacity'),aFn:aA[i].onclick});
	}
	function fnRight(){
		aPos.push(aPos.shift());
		exchange();
	}

	function fnLeft(){
		aPos.unshift(aPos.pop());
		exchange();
	}
	function exchange(){
		for(var i=0;i<aLi.length;i++){
			startMove(aLi[i],{left:aPos[i].left,top:aPos[i].top});
			startMove(aImg[i],{width:aPos[i].imgW,top:aPos[i].imgT,opacity:aPos[i].imgO});
			aA[i].onclick=aPos[i].aFn;
		}
	}
//html轮播图	
	htmlTab();
	function htmlTab(){
		var oHtml = document.getElementById('html');
		var oUl = oHtml.children[0];
		var aLi = oUl.children;
		var oOl = oHtml.children[1];
		var aBtn = oOl.children;
		var oPrev = oHtml.children[2];
		var oNext = oHtml.children[3];
		//为了做无缝滚动，所以必须复制一份内容
		oUl.innerHTML+=oUl.innerHTML;
		//设置UL的宽度
		oUl.style.width = aLi.length*aLi[0].offsetWidth+'px';
		//得到ul一般的宽度
		var W = oUl.offsetWidth/2;
		//当前是第几个
		var iNow = 0;
		var timerHtml=null;
		oHtml.onmouseover=function(){
			oPrev.style.display='block';
			oNext.style.display='block';
			clearInterval(timerHtml);
		};
		oHtml.onmouseout=function(){
			oPrev.style.display='none';
			oNext.style.display='none';
			timerHtml=setInterval(function(){
				autoMove();
			},2000);
		};
		for(var i=0;i<aBtn.length;i++){
			(function(index){
				aBtn[i].onmouseover=function(){
					//如果当前显示的是最后一张，并且即将移入的是第一张，就切换下一张
					//如果iNow%aBtn.length等于4，就是最后一张，如果iNow%aBtn.length==-1也是最后一张.如果index%aBtn.length==0，那就是移入第一张
					if((iNow%aBtn.length==4||iNow%aBtn.length==-1)&&index%aBtn.length==0){
						iNow++;
					}
					//如果当前显示的是第一张，并且即将移入的是最后一张，就切换上一张
					//如果iNow%aBtn.length等于0那就是第一张，如果index%aBtn.length等于4那就是移入最后一张
					if(iNow%aBtn.length==0&&index%aBtn.length==4){
						iNow--;
					}
					//当前下标是38，移入下标是2的按钮，想到37
					iNow = Math.floor(iNow/aBtn.length)*aBtn.length+index;
					tab();
				};
			})(i);
		}
		function tab(){
			for(var i=0;i<aBtn.length;i++){
				aBtn[i].className='';
			}
			//为了让按钮正常显示的计算
			if(iNow>0){
				aBtn[iNow%aBtn.length].className='on';
			}else{
				aBtn[(iNow%aBtn.length+aBtn.length)%aBtn.length].className='on';
			}
			move(oUl,-iNow*aLi[0].offsetWidth);
			//oUl.style.left = -iNow*aLi[0].offsetWidth+'px';
		}
		oPrev.onclick=function(){
			iNow--;
			tab();
		};
		oNext.onclick=autoMove;
		timerHtml=setInterval(function(){
			autoMove();
		},2000);
		function autoMove(){
			iNow++;
			tab();
		};
		var left = 0;
		function move(obj,iTarget){
			var start = left;
			var dis = iTarget-start;
			var count = Math.floor(700/30);
			var n = 0;
			clearInterval(obj.timer);
			obj.timer = setInterval(function(){
				n++;
				var a = 1-n/count;
				left = start+dis*(1-Math.pow(a,3));
				if(left<0){
					obj.style.left = left%W+'px';
				}else{
					obj.style.left = (left%W-W)%W+'px';
				}
				if(n==count){
					clearInterval(obj.timer);
				}
			},30);
		}
	};
	
	//about
	var oAboutLoad=document.getElementById('aboutLoad');
	var oAboutClose=document.getElementById('aboutClose');
	var oShadow = document.getElementById('abshadow');
	var oBox = document.getElementById('abbox');

	oAboutLoad.onclick=	function(){
		oShadow.style.display='block';
		oBox.style.display='block';
	};

	oAboutClose.onclick=function(){
		oShadow.style.display='none';
		oBox.style.display='none';
	};	
};











































