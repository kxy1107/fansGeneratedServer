var express = require('express');
var app = express();
var http = require('http');

app.use('/login',require('./router/login'));//微信登录
app.use('/getUserInfo',require('./router/getUserInfo'));//同步获取用户信息
app.use('/addMerchants',require('./router/addMerchants'));//注册成为商家
app.use('/addShareInfo',require('./router/addShareInfo'));//添加分享内容
app.use('/getHotShareInfo',require('./router/getHotShareInfo'));//获取热门分享内容列表
app.use('/getMyShareInfo',require('./router/getMyShareInfo'));//获取我的分享内容列表
app.use('/delMyShareInfo',require('./router/delMyShareInfo'));//获取我的分享内容列表
app.use('/addLinkInfo',require('./router/addLinkInfo'));//添加分享链接
app.use('/getShareDetail',require('./router/getShareDetail'));//添加分享链接

var httpServer = http.createServer(app);
httpServer.listen(8017,function(){
 console.log("httpServer is OK");
});
