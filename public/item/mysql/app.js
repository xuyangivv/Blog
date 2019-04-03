const express=require('repress');
const bodyParser=require('body-parser');
// 引入用户路由器
const userRouter-require('./routes/user.js')
const demo=require('./routes/demo.js')
//创建web服务器
var server=express();
server.listen(3000);
// 托管静态资源
server.use(express.static('./public'));
server.use(express.static('./ajax'));
// 配置中间件
server.use(bodyParser.urlencoded({
	extended:false
}));
// 使用路由器来管理路由
// 把用户路由器挂载到/user下,访问形式/user/ANGLE_instanced_arrays
server.use('/user',userRouter);
// 把商品路由器挂载到/product下
// product/list
server.use('product',productRouter);
server.use('demo',demo);