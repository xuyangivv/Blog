//�ֲ�ͼЧ��
function $(id) {
    return document.getElementById(id);
}
var buttonGroup=$("buttonGroup"),
    buttons=buttonGroup.getElementsByTagName('span'),
    list=$("list"),
    imgs=list.getElementsByTagName('img'),
    flag=0,
    slideshow=$("slideshow"),
    timer;
function render(index){
    for(var i=0;i<imgs.length;i++){
        imgs[i].style.opacity="0";
        imgs[i].style.zindex="1";
    }
    imgs[index].style.zindex="2";
    imgs[index].style.opacity="1";
}
function bt_listen(event){
    if (event.target&&event.target.tagName.toLowerCase()=='span') {
        var index=event.target.getAttribute('index');
        flag=index;
        render(flag);
        showButton();
    }
}
function showButton(){
    for(var i=0;i<buttons.length;i++){
        buttons[i].className=buttons[i].className.replace(/\s*on/,"");
    }
    buttons[flag].className+=" on";
}
function play(){
    timer=setInterval(function(){
        if (flag==3) {
            flag=0;
        }else{
            flag++;
        }
        render(flag);
        showButton();
    },2000);
}
function stop(){
    clearInterval(timer);
}
function start(){
    buttonGroup.addEventListener('click',bt_listen,false);
    // slideshow.addEventListener('mouseenter',stop,false);
    // slideshow.addEventListener('mouseleave',play,false);
    play();
}
start();
// 获取首页轮播图
// 1.创建异步对象
(function(){
var xhr = new XMLHttpRequest();
// 2.绑定监听对象
    xhr.onreadystatechange = function(){
        if(xhr.readyState==4&&xhr.status==200){
            var result=JSON.parse(xhr.responseText);
            // console.log(result);
            var list = document.getElementById("list");
            var i="";
            for(var j of result){
                i+="<img src="+j.c_pic+">";
            }
            list.innerHTML=i;
        }
    }
// 3.打开链接
    xhr.open("get","http://127.0.0.1:5050/carousel",true);
// 4.发送请求
xhr.send();
})()

//获取文章数据
// 1.创建异步对象 
function blogs(){   
    var xhr = new XMLHttpRequest();
    // 2.绑定监听对象
        xhr.onreadystatechange = function(){
            if(xhr.readyState==4&&xhr.status==200){
                var result=JSON.parse(xhr.responseText);
                // console.log(result);
                var img = document.getElementById("blogs");
                // var h3 = document.getElementById("blogs").children[0].children[1];
                // console.log(h3);
                var u="";
                for(var j of result){
                    u+=`<div style="width: 100%;height:200px;margin-bottom:20px;border-bottom: 1px solid #5555556b;"><div class="b_img"><img src="${j.a_img}"/></div>
					<ul>
						<div>
							<h3>${j.a_title}</h3>
						</div>
						<p class="txt" data-look="0" data-id="${j.a_id}">${j.a_content}</p>
						<p class="autor">
							<span class="lm f_l">
								<a href="#">${j.a_TypeId}</a>
							</span>
							<span class="dtime f_l">2019-3-2 15:19:00</span>
							<span class="pinglun f_l">
								<a href="#">评论</a>
							</span>
							<span class="viewnum f_l">浏览(<span>${j.a_readPeople}</span>)</span>
							<span class="label_bottom f_l">
								<a class="yz_zan" data-zan="0" data-id="${j.a_id}">${j.a_popularity}</a>
							</span>
						</p>
					</ul></div>`;
                }
                // 
                // var v = document.getElementsByClassName("txt");
                // console.log(v);
                // for(var c of v){
                //     c.onclick=function(){
                //         var d2 = document.getElementById("blogs");
                //         console.log(d2);
                //         d2.innerHTML+=`<div style="width:100px;height:100px;border:1px solid blue;"><a style="position:relative;left:20px;top:10px;" data-id="close" onclick="close()">关闭</a></div>`;
                //     }
                // }

                img.innerHTML=u;
                // 点赞         
                var p = document.getElementsByClassName("yz_zan");
                // console.log(p);
                    for(var i of p){
                        i.onclick=function(e){
                        if(e.target.dataset.zan==0){ 
                                var id = e.target.dataset.id;
                                // console.log(id); 
                                var xhr =new XMLHttpRequest();
                                xhr.onreadystatechange = function(){ 
                                    if(xhr.readyState==4&&xhr.status==200){
                                    // 获取点赞数  
                                        var o = parseInt(e.target.innerHTML);
                                        o++;
                                        e.target.innerHTML=o;   
                                        e.target.setAttribute("data-zan",1);    
                                    }
                                }
                            xhr.open("get","http://127.0.0.1:5050/dianzan?id="+id,true);
                            xhr.send();
                        }else{
                            alert("您已经赞过此篇文章！")
                        }
                      }
                    }
                //浏览次数
                var a = document.getElementsByClassName("txt");
                 for(var b of a){                  
                     b.onclick = function(e){
                        var d2 = document.body;
                    //点击文章显示全部 同时浏览次数+1
                        var id = e.target.dataset.id;
                        var text = document.getElementById("all_text")
                        var open = text.children[0].children[1];
                        text.style.display="block";
                        open.innerHTML=result[id-1].a_content;
                     // 点击关闭
                        var close = text.children[0].children[0];
                        close.onclick = function(){
                            text.style.display="none";
                        }
                        if(e.target.dataset.look==0){
                            var id = e.target.dataset.id;
                            var xhr =new XMLHttpRequest(); 
                            xhr.onreadystatechange = function(){ 
                                if(xhr.readyState==4&&xhr.status==200){ 
                                    var viewnum =parseInt(e.target.parentElement.children[2].children[3].children[0].innerHTML);
                                    // console.log(e.target.parentElement.children[2].children[3].children[0]);
                                    viewnum++;   
                                    e.target.parentElement.children[2].children[3].children[0].innerHTML=viewnum;
                                    e.target.setAttribute("data-look",1);
                                }
                            }
                            xhr.open("get","http://127.0.0.1:5050/viewnum?id="+id,true);
                            xhr.send(); 
                        }
                     }
                 }
            }
        }
    // 3.打开链接
        xhr.open("get","http://127.0.0.1:5050/index",true);
    // 4.发送请求
    xhr.send();
}

this.blogs();


// 留言板
function message(){ 
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var selection = document.getElementById("selection").value;
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if(xhr.readyState==4&&xhr.status==200){
           alert("留言成功！！！")
           history.go(0);
        }  
          
    }
    xhr.open("post","http://127.0.0.1:5050/blog_message",true);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
	var formdata = 'name=' + name + '&email=' + email+ '&message=' + message+ '&selection=' + selection;
    xhr.send(formdata);
}





















