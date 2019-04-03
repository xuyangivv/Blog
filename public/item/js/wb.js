// 底部导航隐藏
$(document).ready(function() {
	$(".wb-con-box .wb-abc1").toggle(function() {
		$(this).next(".wb-text").animate({
			height: 'toggle',
			opacity: 'toggle'
		}, "slow");
	}, function() {
		$(this).next(".wb-text").animate({
			height: 'toggle',
			opacity: 'toggle'
		});
	});
});
// 腕表页底部隐藏栏
var  x= 0;
var y = document.getElementById("wb-logo2");
y.innerHTML = "<img src='img/ten.png'>";
abcd2.onclick = function() {
	if (x == 0) {
		y.innerHTML = "<img src='img/hg.png'>";
		x = 1;
	} else {
		y.innerHTML = "<img src='img/ten.png'>";
		x = 0;
	}
}