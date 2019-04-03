// 导航栏插入内容
var content=document.getElementById("nav");
content.innerHTML='<ul class="row nav-menu clearfix unstyled ml-0 mr-0"><li class="col-2 p-0"><a href="index.html" class="three-d">主页<span class="three-d-box"><span class="front">主页</span><span class="back">主页</span></span></a></li><li class="col-2 p-0"><a href="datum.html" class="three-d">资料<span class="three-d-box"><span class="front">资料</span><span class="back">资料</span></span></a></li><li class="col-2 p-0"><a href="production.html"class="three-d">作品<span class="three-d-box"><span class="front">作品</span><span class="back">作品</span></span></a></li><li class="col-2 p-0"><a href="photo.html" class="three-d">相册<span class="three-d-box"><span class="front">相册</span><span class="back">相册</span></span></a></li><li class="col-2 p-0"><a href="blogsfile.html" class="three-d">博客文件<span class="three-d-box"><span class="front">博客文件</span><span class="back">博客文件</span></span></a><ul class="clearfix unstyled drop-menu"><li><a href="blog_html.html" class="three-d">html<span class="three-d-box"><span class="front">html</span><span class="back">html</span></span></a></li><li><a href="blog_css.html" class="three-d">Css3<span class="three-d-box"><span class="front">Css3</span><span class="back">Css3</span></span></a></li><li><a href="blog_js.html" class="three-d">JS<span class="three-d-box"><span class="front">JS</span><span class="back">JS</span></span></a></li><li><a href="blog_jquery.html" class="three-d">jQuery<span class="three-d-box"><span class="front">jQuery</span><span class="back">jQuery</span></span></a></li></ul></li><li class="col-2 p-0"><a href="about.html" class="three-d">关于<span class="three-d-box"><span class="front">关于</span><span class="back">关于</span></span></a></li><li class="col-5"><a href="#" class="three-d-box"></a></li></ul>';

// 
var t = document.title;
switch(t){
    case "个人博客":
        var list = document.querySelectorAll("#nav ul li");
        list[0].children[0].classList.add("active");
        break;
    case "资料":
        var list = document.querySelectorAll("#nav ul li");
        list[1].children[0].classList.add("active");
        break;
    case "作品":
        var list = document.querySelectorAll("#nav ul li");
        list[2].children[0].classList.add("active");
        break;
    case "相册":
        var list = document.querySelectorAll("#nav ul li");
        list[3].children[0].classList.add("active");
        break;
    case "博客文件":
        var list = document.querySelectorAll("#nav ul li");
        list[4].children[0].classList.add("active");
        break;
    case "文件":
        var list = document.querySelectorAll("#nav ul li");
        list[5].children[0].classList.add("active");
        break;
    case "Html":
        var list = document.querySelectorAll("#nav ul li");
        list[4].children[1].children[0].classList.add("active");
        list[4].children[0].classList.add("active");
        break;
    case "Css3":
        var list = document.querySelectorAll("#nav ul li");
        list[4].children[1].children[1].classList.add("active");
        list[4].children[0].classList.add("active");
        break;
    case "JS":
        var list = document.querySelectorAll("#nav ul li");
        list[4].children[1].children[2].classList.add("active");
        list[4].children[0].classList.add("active");
        break;
    case "JQuery":
        var list = document.querySelectorAll("#nav ul li");
        list[4].children[1].children[3].classList.add("active");
        list[4].children[0].classList.add("active");
        break;
}