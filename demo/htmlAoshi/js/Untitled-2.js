// JavaScript Document
window.onload=function(){
	getZmpBox('zmp_play','zmp_yy','zmp_nav');
	function getZmpBox(id,id1,id2){
	var oUl=document.getElementById('zmp_play');
	var aLi=oUl.getElementsByTagName('li');
	var oUl1=document.getElementById('zmp_yy');
	var aLi1=oUl1.getElementsByTagName('li');
	var oUl2=document.getElementById('zmp_nav');
	var aLi1=oUl2.getElementsByTagName('li');
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
	
}

