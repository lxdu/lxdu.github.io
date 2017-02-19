// JavaScript Document
function getByClass(obj,sName){
		if(obj.getElementsByClassName){
			return obj.getElementsByClassName(sName);
		}else{
			var arr=[];
			var oLi=obj.getElementsByTagName('*');
			for(var i=0;i<oLi.length;i++){
				var arrClass=oLi[i].className.split(' ');
				if(findArr(arrClass,sName)){
					arr.push(oLi[i]);
				}
			}
			return arr;
		}
	}
	function findArr(arr,num){
		for( var i=0;i<arr.length;i++){
			if(arr[i]==num){
				return true;
			}
		}
		return false;
	}
window.onload=function(){
	function getBox(id1,id2,id3){
		var oMove=document.getElementById(id3);
		var oUl=document.getElementById(id1);
		var oList=oUl.getElementsByTagName('li');
		var iNum=0;
		var t=null;
		var oShow=document.getElementById(id2);
		var oShowList=oShow.getElementsByTagName('ul');
		if(oShow.getElementsByTagName('ul')[0]==undefined){
			oShowList=getByClass(oShow,'ft_move_con');
		}
		for(var i=0;i<oList.length;i++){	
			(function(index){
				oList[index].onclick=function(){
					iNum=index;
					tab();
				}
			})(i)
		}
		function tab(){
			for(var i=0;i<oList.length;i++){
					oList[i].style.background='#2b2b2b';
					oShowList[i].style.display='none';
				}
				oList[iNum].style.background='#1e1e1e';
				oShowList[iNum].style.display='block';
		}
		function next(){
			iNum++;
			if(iNum==oList.length){
				iNum=0;
			}
			tab();
		}
		t=setInterval(next,1000);
		oMove.onmouseover=function(){
			clearInterval(t);
		}
		oMove.onmouseout=function(){
			t=setInterval(next,1000);
		}
	};
    getBox('ft_movie_tit_list','ft_move_con','ft_movie');
	getBox('ft_movie_tit_list1','ft_move_con1','ft_movie1');
	getBox('ft_movie_tit_list2','ft_move_con2','ft_movie2');
	getBox('ft_movie_tit_list3','ft_move_video','ft_movie3');
	getBox('ft_movie_tit_list4','ft_move_con4','ft_movie4');
	
	
	function getShow(id){
		var oShowChange=document.getElementById(id);
		var oShowList=getByClass(oShowChange,'ft_movie_xq');
		for(var i=0;i<oShowList.length;i++){
			(function(index){
				oShowList[i].onmouseover=function(){
					
					for(var i=0;i<oShowList.length;i++){
						oShowList[i].getElementsByTagName('div')[0].style.display='block';
						oShowList[i].getElementsByTagName('div')[1].style.display='none';
					}
					oShowList[index].getElementsByTagName('div')[0].style.display='none';
					oShowList[index].getElementsByTagName('div')[1].style.display='block';	
				}
			})(i)
		}
	}
    getShow('ft_con');
	getShow('ft_con1');
	getShow('ft_con2');
	getShow('ft_con3');
	function getXjwBox(id){
	var oBox = document.getElementById(id);
	var oUl = oBox.getElementsByTagName('ul')[0];
	var aLi = oUl.getElementsByTagName('li');
	var oAa = oUl.getElementsByTagName('a')[0];
	var aUl = oBox.getElementsByTagName('ul')[1];
	var aBtn = aUl.getElementsByTagName('li');
	var iNow = 0;
	for(var i=0;i<aBtn.length;i++){
		(function(index){
			aBtn[index].onmouseover=function(){
				iNow=index;
				tab();
				clearInterval(timer);
			};
		})(i);
	}
	for(var i=0;i<aBtn.length;i++){
		aBtn[i].onmouseout=function(){
			timer = setInterval(next,1000);
		};
	}
	function tab(){
		for(var i=0;i<aBtn.length;i++){
			aBtn[i].className='';
			aLi[i].className='';
		}
		aBtn[iNow].className='on';
		aLi[iNow].className='on';
	}
	function next(){
		iNow++;
		if(iNow==aBtn.length){
			iNow=0;
		}
		tab();
	}
	var timer = setInterval(next,1000);
	oAa.onmouseover = function(){
		oAa.style.color = 'red';	
	};
	oAa.onmouseout = function(){
		oAa.style.color = '#FFF';	
	};
	}
    getXjwBox('xjw_box');
	
	function getZmpBox(id,id1,id2){
		var oUl=document.getElementById(id);
		var aLi=oUl.getElementsByTagName('li');
		var oUl1=document.getElementById(id1);
		var aLi1=oUl1.getElementsByTagName('li');
		var oUl2=document.getElementById(id2);
		var aLi2=oUl2.getElementsByTagName('li');
		for(var i=0;i<aLi.length;i++){
			(function(index){
				aLi[index].onmouseover=function(){
					for(var i=0;i<aLi.length;i++){
					aLi[i].className='';
					}
					aLi[index].className='on1';
				}
				
			})(i)
		}
		for(var i=0;i<aLi1.length;i++){
			(function(index){
				aLi1[index].onmouseover=function(){
					for(var i=0;i<aLi1.length;i++){
					aLi1[i].style.color='';
					}
					aLi1[index].style.color='#a12422';
				}
				
			})(i)
		}	
		for(var i=0;i<aLi2.length;i++){
			(function(index){
				aLi2[index].onmouseover=function(){
					for(var i=0;i<aLi2.length;i++){
					aLi2[i].style.color='';
					}
					aLi2[index].style.color='#a12422';
				}
				
			})(i)
		}
	}
	getZmpBox('zmp_play','zmp_yy','zmp_nav');
	tab('btn1');
	tab('btn2');
	tab('btn3');
	tab('btn4');
	tab('btn5');
	tab('btn6');
	tab('btn7');
	tab('btn8');
	tab('btn9');
	tab('btn10');
	tab('btn11');
	tab('btn12');
	tab('btn13');
	tab('btn14');
	tab('btn15');
	tab2('box','dy');
	tab2('box2','dy2');
function tab2(id,id2){
	var oBox=document.getElementById(id);
	var aUl=oBox.getElementsByTagName('ul');
	var oDy=document.getElementById(id2);
	var aLi1=oDy.getElementsByTagName('li');
	
	for(var i=0;i<aLi1.length-1;i++){
		aLi1[i].index=i;
		aLi1[i].onmouseover=function(){
			for(var i=0;i<aLi1.length-1;i++){
				aUl[i].style.display='none';
				}
				aUl[this.index].style.display='block';
			}
		}
	}
		
}
function tab(id){
		   var oBtn = document.getElementById(id);
           var aLi = oBtn.getElementsByTagName('li');
           var aSp = oBtn.getElementsByTagName('span');
           
           for(var i=0;i<aLi.length; i++){
               aLi[i].index = i;
               aLi[i].onmouseover = function(){
                   
                       aSp[this.index].style.display='block';
                   
               }
			   aLi[i].onmouseout = function(){
                   
                       aSp[this.index].style.display='none';
                   
               }
			   
           }
}