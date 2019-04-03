// 关于页
var xhr = new XMLHttpRequest();
xhr.onreadystatechange=function(){
	 if(xhr.readyState==4&&xhr.status==200){
        var result = JSON.parse(xhr.responseText);
        // 获取个人简介数据
        var txt = document.getElementById("blog_txt");
        // 获取联系方式二维码图片
        var img_weixn = document.getElementById("weixin");
        var img_qq = document.getElementById("qq");
        var p = "";
        var wx = "";
        var qq = "";   
            p+="<p>"+result[0].introduce+"</p>";
            wx+="<img src="+result[0].contact_wx+" alt='微信'>";
            qq+="<img src="+result[0].contact_qq+" alt='QQ'>";
        txt.innerHTML=p;
        img_weixn.innerHTML=wx;
        img_qq.innerHTML=qq;
     }
    }
 xhr.open("get","http://127.0.0.1:5050/about",true);
 xhr.send();

