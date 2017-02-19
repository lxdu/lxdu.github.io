window.onload = function(){
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
				iNow=0;e
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
	getXjwBox('xjw_box')
};