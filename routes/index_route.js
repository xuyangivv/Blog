/**
 * Created by tarena on 2019/3/5.
 */
const express=require("express");
//引入连接池模块
const pool=require("../pool.js");
//创建路由对象
const router=express.Router();
//:5050/index
//添加路由


// 查询首页文章对应书籍图片
router.get("/index",(req,res)=>{
    var sql="select * from blog_arcitle";
    pool.query(sql,[],(err,result)=>{
        if(err) throw err;
    res.send(result);
    })
});
// 查询相册页面图片数据
router.get("/photo",(req,res)=>{
    var sql = "select pid,purl from blog_photo";
    pool.query(sql,(err,result)=>{
        if(err) throw err;
        res.send(result);
    })
});

// 查询首页轮播图图片数据
router.get("/carousel",(req,res)=>{
    var sql = "select c_pid,c_pic from blog_carousel_pic";
    pool.query(sql,(err,result)=>{
        if(err) throw err;
        res.send(result);
    })
})

// 留言表
router.post("/blog_message",(req,res)=>{
    var name = req.body.name;
    var email = req.body.email;
    var message = req.body.message;
    var selection = req.body.selection;
    var sql="insert into blog_message values(null,?,?,?,?)";
    pool.query(sql,[name,email,message,selection],(err,result)=>{
        if(err) throw err;
        res.send(result);
    })
})

//点赞
router.get("/dianzan",(req,res)=>{
    var id = req.query.id;
    var sql="update blog_arcitle set a_popularity=a_popularity+1 where a_id=?";
    pool.query(sql,[id],(err,result)=>{
        if(err) throw err;
        res.send(result);
    })
}) 
//浏览次数
router.get("/viewnum",(req,res)=>{
    var id = req.query.id;
    var sql="update blog_arcitle set a_readPeople=a_readPeople+1 where a_id=?";
    pool.query(sql,[id],(err,result)=>{
        if(err) throw err;
        res.send(result);
    })
}) 
//书架书籍
router.get("/pic",(req,res)=>{
	var sql="select bid,btitle,bpic,btxt from blog_book";
	pool.query(sql,(err,result)=>{
		if(err) throw err;
		res.send(result);
	})
})
// 底部轮播图
router.get("/roll",(req,res)=>{
	var sql="select pid,purl from blog_lb_pic";
	pool.query(sql,(err,result)=>{
		if(err) throw err;
		res.send(result);
	})
})

// 个人简介
router.get("/about",(req,res)=>{
    var sql="select id,introduce,contact_wx,contact_qq from blog_about";
    pool.query(sql,(err,result)=>{
        if(err) throw err;
        res.send(result);
    })
})

router.get("/blogimg")
module.exports=router;