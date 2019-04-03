// 隐藏区域
function my$(id) {
	return document.getElementById(id);
}
var spanObj = my$('d1').getElementsByTagName('span');
var list = my$('d2').getElementsByTagName('li');
for (var i = 0; i < spanObj.length; i++) {
	spanObj[i].setAttribute('index', i);
	spanObj[i].onmouseover = function() {
		for (var j = 0; j < spanObj.length; j++) {
			spanObj[j].removeAttribute('class');
		}
		this.className = 'act';
		var num = this.getAttribute('index');
		for (var m = 0; m < list.length; m++) {
			list[m].removeAttribute('class');
		}
		list[num].className = 'active';
		my$('d2').style.height = "600px";
	}
	spanObj[i].onmouseout = function() {
		my$('d2').style.height = "0";
	}
}
my$('d2').onmouseover = function() {
	my$('d2').style.height = "600px";
}
my$('d2').onmouseout = function() {
	my$('d2').style.height = "0";
}
// 轮播图区域
var oBtn1 = document.getElementById("btn1");
var oBox = document.getElementById("box");
var oImg = document.getElementById("img");
var oPrev = document.getElementById("prev");
var oNext = document.getElementById("next");
var arrSrc = ["img/pic-5.png", "img/pic-2.jpg", "img/pic-1.jpg", "img/pic-4.jpg", "img/pic-5.jpg"];
var arrtext = [];
var arrTxt = ["1", "2", "3", "4", "5"];
var num = 0;
var onOff = true; //true 循环  false 走顺序

function fn() { //开始先定义一个公共函数方便下面调用
	oImg.src = arrSrc[num]; //图片的显示路径

}
fn(); /*切记，定义之后，这里一定要调用一下*/
//循环按钮
oBtn1.onclick = function() {
	onOff = true;
};
oPrev.onclick = function() {
	num--;
	//点击左边的箭头那么就是num--
	if (onOff) {
		//onOff默认是true所以就是走循环了
		if (num == -1) {
			//在一直减的过程中，数组里最小的就是0，所以等于-1的时候要循环下去所以让它显示最后一张
			num = arrSrc.length - 1;
		}
	} else {
		//否则onOff是false所以就是走顺序了
		if (num == -1) {
			//在一直减的过程中，数组里最小的就是0，所以等于-1的时候有数据走了，所以让它显示第一张不能点击了
			num = 0;
		}
	}
	//调用函数
	fn();
};
//点击左边的箭头所做出的判断
oNext.onclick = function() {
	num++;
	if (onOff) {
		if (num == arrTxt.length) {
			num = 0;
		}
	} else {
		if (num == arrTxt.length) {
			num = arrSrc.length - 1;
		}
	}
	fn();
}
// 返回顶部
$(function() {
	$(function() {
		$(window).scroll(function() {
			if ($(window).scrollTop() > 100) {
				$("#toTop").fadeIn(1000);
			} else {
				$("#toTop").fadeOut(1000);
			}
		});
		//当点击跳转链接后，回到页面顶部位置
		$("#toTop").click(function() {
			$('body,html').animate({
				scrollTop: 0
			}, 500);
		});
	});
});
// 底部导航隐藏
$(document).ready(function() {
	$(".con-box .abc1").toggle(function() {
		$(this).next(".text").animate({
			height: 'toggle',
			opacity: 'toggle'
		}, "slow");
	}, function() {
		$(this).next(".text").animate({
			height: 'toggle',
			opacity: 'toggle'
		});
	});
});
// 
var i = 0;
var p = document.getElementById("logo2");
p.innerHTML = "<img src='img/ten.png'>";
abcd1.onclick = function() {
	if (i == 0) {
		p.innerHTML = "<img src='img/hg.png'>";
		i = 1;
	} else {
		p.innerHTML = "<img src='img/ten.png'>";
		i = 0;
	}
}
// // 登陆
//     $(function(){
//         Victor("mycontainer", "myoutput");   //登陆背景函数
//         $("#myentry_name").focus();
//         $(document).keydown(function(event){
//             if(event.keyCode==13){
//                 $("#myentry_btn").click();
//             }
//         });
//     });
// </script>
// // 收缩展开效果
// $(document).ready(function(){
//    $(".myaccount b").toggle(function(){
//     $(this).next(".mytext").animate({height: 'toggle', opacity: 'toggle'}, "slow");
//    },function(){
//     $(this).next(".mytext").animate({height: 'toggle', opacity: 'toggle'});
//    });
// });
// </script>
// 
//登陆 收缩展开效果
$(document).ready(function() {
	$(".mybox span").toggle(function() {
		$(this).next(".mytext").animate({
			height: 'toggle',
			opacity: 'toggle'
		}, "slow");
	}, function() {
		$(this).next(".mytext").animate({
			height: 'toggle',
			opacity: 'toggle'
		});
	});
});
// 腕表页返回顶部
// 返回顶部
function pageScroll(){
    //把内容滚动指定的像素数（第一个参数是向右滚动的像素数，第二个参数是向下滚动的像素数）
    window.scrollBy(0,-100);
    //延时递归调用，模拟滚动向上效果
    scrolldelay = setTimeout('pageScroll()',10);
    //获取scrollTop值，声明了DTD的标准网页取document.documentElement.scrollTop，否则取document.body.scrollTop；因为二者只有一个会生效，另一个就恒为0，所以取和值可以得到网页的真正的scrollTop值
    var sTop=document.documentElement.scrollTop+document.body.scrollTop;
    //判断当页面到达顶部，取消延时代码（否则页面滚动到顶部会无法再向下正常浏览页面）
    if(sTop==0) clearTimeout(scrolldelay);
}
