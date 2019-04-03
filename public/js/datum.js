// 书籍轮播
pic2.innerHTML=pic1.innerHTML;
function scrolltoLeft(){
	roll.scrollLeft++;
	if(roll.scrollLeft>=pic1.scrollWidth){
		scrolltoleft();
	}
}
var MyMar=setInterval(scrolltoLeft,30);
roll.onmouseover=function(){
	clearInterval(MyMar);//停止
}
roll.onmouseout=function(){
	MyMar=setInterval(scrolltoLeft,30);
}

// 草地移动 
var speed = 30;
    //速度数值越大速度越慢
    var colee_left2 = document.getElementById("colee_left2");
    var colee_left1 = document.getElementById("colee_left1");
    var colee_left = document.getElementById("colee_left");
    colee_left2.innerHTML = colee_left1.innerHTML;
    function Marquee3() {
            if (colee_left2.offsetWidth - colee_left.scrollLeft <= 0){//offsetWidth 是对象的可见宽度
                    colee_left.scrollLeft -= colee_left1.offsetWidth//scrollWidth 是对象的实际内容的宽，不包边线宽度
        }
        else {
            colee_left.scrollLeft++;
        }

    }
    var MyMar3 = setInterval(Marquee3,10);
// 书籍
var xhr = new XMLHttpRequest();
xhr.onreadystatechange=function(){
	 if(xhr.readyState==4&&xhr.status==200){
		 var result=JSON.parse(xhr.responseText);
		 var pic = document.getElementById("pic");
		 var ptxt = document.getElementById("ptxt");
		 var title = document.querySelector(".datum_details").children[0];
		 console.log(title)
		 // console.log(pic);
		 var i="";
		 var txt="";
		 var t ="";
		 for(var j of result){
			 i+="<li data-id="+j.bid+"><img src="+j.bpic+"></li>";
			 // 介绍
			 txt+="<div data-id="+j.bid+">"+j.btxt+"</div>";
			 t+="<h4 data-id="+j.bid+">《"+j.btitle+"》</h4>";
		 }
		 pic.innerHTML=i;
		 ptxt.innerHTML=txt;
		 title.innerHTML=t;
		 // 点击书籍 右边出现对应介绍
		 var u = pic.children;
		 var b = ptxt.children;
		 var c = title.children;
		 for(var m of u){
			 m.onclick=function(){
				  var n = this.dataset.id;
				  for(var k of c){
					  k.style.display="none";
					  if(k.dataset.id==n){
						  k.style.display="block";
					  }
				  }
					for(var v of b){
						v.style.display="none";
						if(v.dataset.id==n){
							v.style.display="block";
						}
					}
					
			 }
			 
			 
		 }
	 }
	 
}
 xhr.open("get","http://127.0.0.1:3000/pic",true);
 xhr.send();

// 获取底部轮播图
// 	var xhr = new XMLHttpRequest();	
// 	console.log(xhr)
// 	xhr.onreadystatechange=function(){
// 		 if(xhr.readyState==4&&xhr.status==200){
// 			 var result=JSON.parse(xhr.responseText);
// 			 var list = document.getViewById("lb_pic");
// 			 var i = "";
// 			 for(var n of result){
// 				 i+="<td><a><img src="+n.purl+"></img></a></td>";
// 			 }
// 			 list.innerHTML=i;
// 		 }
// 	}
// 	xhr.open("get","http:127.0.0.1:3000/roll",true);
// 	xhr.send();
// }
