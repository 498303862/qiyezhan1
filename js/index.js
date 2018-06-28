window.onload=function(){
	let section=document.querySelector("section");
	let banner=document.querySelectorAll(".banner li");
	let dian=document.querySelectorAll(".xiaodian li");
	let zanniu=document.querySelector(".zanniu");
	let yanniu=document.querySelector(".yanniu");
	console.log(section,banner,dian,zanniu,yanniu)
	let index=0;
	let t=setInterval(move,2000)
	section.onmouseenter=function(){
		clearInterval(t);
	}
	section.onmouseleave=function(){
		t=setInterval(move,2000);
	}
	yanniu.onclick=function(){
		move()
	}
	zanniu.onclick=function(){
		move1()
	}
	banner[0].style.zIndex=10;
	function move(){
		index++
		if (index==banner.length) {
			index=0
		}
		banner.forEach(function(meiyige){
			meiyige.style.zIndex=5;
		})
		
		dian.forEach(function(meiyige){
			meiyige.className="";
		})
		banner[index].style.zIndex=10;
		dian[index].className="hot"

	}
	// 倒着轮播
	function move1(){
		index--;
		if(index<0){
			index=banner.length-1;
		}
		banner.forEach(function(meiyige){
			meiyige.style.zIndex=5;
		})
		
		dian.forEach(function(meiyige){
			meiyige.className="";
		})
		banner[index].style.zIndex=10;
		dian[index].className="hot"
	}
	// 点击轮播点
	for(let i=0;i<dian.length;i++){
		dian[i].onclick=function(){
			banner.forEach(function(meiyige){
				meiyige.style.zIndex=5;
			})
			dian.forEach(function(meiyige){
				meiyige.className="";
			})
			banner[i].style.zIndex=10;
			dian[i].className="hot";
			index=i;
		}
	}
}