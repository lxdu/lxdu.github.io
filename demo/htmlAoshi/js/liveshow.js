// JavaScript Document

window.onload=function(){
	function getCxrBox(id){
	var oLiveShowBox=document.getElementById(id);
	var aList=oLiveShowBox.getElementsByTagName('li');
	var aPlay=oLiveShowBox.getElementsByTagName('span');
	for(var i=0;i<aList.length;i++){
		(function(index){
			aList[i].onmouseover=function(){
				for(var i=0;i<aList.length;i++){
					aList[i].style.backgroundColor='';
					aPlay[i].style.display='none';
				};
				aList[index].style.backgroundColor='#161616';
				aPlay[index].style.display='block';
			};
		})(i)
	}
	}
	getCxrBox('cxr_liveShowBox')
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