// JavaScript Document
function findInArr(arr,sClass){
	for(var i=0;i<arr.length;i++){
		if(arr[i]==sClass){
			return true;
		}
	}	
	return false;
}
function getByClass(obj,sClass){
	if(obj.getElementsByClassName){
		return obj.getElementsByClassName(sClass);
	}else{
		var aResult=[];
		var aEle=obj.getElementsByTagName('*');
		for(var i=0;i<aEle.length;i++){
			var aClass=aEle[i].className.split(' ');
			if(findInArr(aClass==sClass)){
				aResult.push(aEle[i]);
			}
		}	
		return aResult;
	}	
}


function r_tab(obj,name){
            var oRBox = document.getElementById(obj);
            var aRLi = oRBox.getElementsByTagName('li');
            
            for(var i=0;i<aRLi.length;i++){
                aRLi[i].onmouseover = function(){
                    
                    for(var i=0;i<aRLi.length;i++){
                         aRLi[i].className = '';
                    }
                    this.className = [name];
                }
            }
        }

window.onload=function(){
	var oDmsg=document.getElementById('dmsg');
	var oDbtn=document.getElementById('dbtn');
	var aDbtn=oDbtn.getElementsByTagName('p');
	var aDlist=getByClass(oDmsg,'dlist');
	
	//头部
	
            r_tab('r_hd_box','r_color')
            r_tab('r_user_box','r_uc')
	
	
	
	function tab(){
		for(var i=0;i<aDbtn.length;i++){
			aDbtn[i].className='';
			aDlist[i].style.display='none';
		}
		aDbtn[iNow].className='on';
		aDlist[iNow].style.display='block';
	}
	for(var i=0;i<aDbtn.length;i++){
		(function(index){
			aDbtn[i].onmouseover=function(){
				iNow=index;
				tab();	
			};
		})(i);
	}
	var iNow=0;
	function autoplay(){
		iNow++;
		if(iNow==aDbtn.length){
			iNow=0;
		}
		tab();
	}
	var timer=null;
	clearInterval(timer);
	timer=setInterval(function(){
		autoplay();	
	},2000)
	oDmsg.onmouseover=function(){
		clearInterval(timer);
	}
	oDmsg.onmouseout=function(){
		timer=setInterval(function(){
			autoplay();	
		},2000)
	}
	var aLi=oDmsg.getElementsByTagName('li');
	for(var i=0;i<aLi.length;i++){
		aLi[i].onmouseover=function(){
			for(var i=0;i<aLi.length;i++){
				aLi[i].className='';
			}
			this.className='active';
		}
	}
	var oDmore=document.getElementById('dmore');
	var oDsh=document.getElementById('dsh');
	oDmore.onclick=function(){
		if(oDsh.style.display=='block'){
			oDsh.style.display='none';
			oDmore.innerHTML='＋';
			clearInterval(timer);
		}else{
			oDsh.style.display='block';
			oDmore.innerHTML='－';
		}
	}
	var aDseries=getByClass(oDmsg,'dseries');
	for(var i=0;i<aDseries.length;i++){
		aDseries[i].onmouseover=function(){
		var aA=this.getElementsByTagName('a');
			for(var i=0;i<aA.length;i++){
				aA[i].onmouseover=function(){
					for(var i=0;i<aA.length;i++){
					aA[i].className='';	
					}
					this.className='on';
				}
			}
		}
	}
}













