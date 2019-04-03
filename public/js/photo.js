// 1.创建异步对象
var xhr = new XMLHttpRequest();
// 2.绑定监听对象
    xhr.onreadystatechange = function(){
        if(xhr.readyState==4&&xhr.status==200){
            var result=JSON.parse(xhr.responseText);
            // console.log(result);
            var pic1 = document.getElementById("pic1");
            var i="";
            for(var j of result){
                i+="<li><img src="+j.purl+"></li>";
            }
            pic1.innerHTML=i;
        }
    }
// 3.打开链接
    xhr.open("get","http://127.0.0.1:5050/photo",true);
// 4.发送请求
xhr.send();