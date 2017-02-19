/*
window.onload=function(){
           var oBtn = document.getElementById('btn1')
           var aLi = oBtn.getElementsByTagName('li');
           var aSp = oBtn.getElementsByTagName('span');
           
           for(var i=0;i<aLi.length; i++){
               aLi[i].index = i;
               aLi[i].onmouseover = function(){
                   for(var i=0;i<aLi.length; i++){
                       aSp[i].style.display='none';
                   }
                   
                   aSp[this.index].style.display='block';
               }
           }
}
*/
window.onload=function(){
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
		   
	

	
};
		   
		  