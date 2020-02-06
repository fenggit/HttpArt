const http  =require('http');
const fs = require('fs');

http.createServer(function (request,response) {
    console.log("request url:",request.url);

    const  html = fs.readFileSync('index.html','utf-8');

    response.writeHead(200,{
        'Content-Type':'text/html',
         // 1.设置请求的资源必须通过http、https的方式获取，而不能直接在html里面嵌入js
        'Content-Security-Policy':'default-src http: https'
    });

    response.end(html);
}).listen(8080);

console.log("server listening on 8080");
console.log("http://localhost:8080/");