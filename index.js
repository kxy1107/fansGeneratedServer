var express = require('express');
var app = express();
var http = require('http');

app.use('/login',require('./router/login'));
app.use('/getUserInfo',require('./router/getUserInfo'));

var httpServer = http.createServer(app);
httpServer.listen(8017,function(){
 console.log("httpServer is OK");
});
