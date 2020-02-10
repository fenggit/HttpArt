const http = require('http');

http.createServer(function (request, response) {
    console.log("request url:", request.url);

    response.writeHead(200,{
        // 关闭长连接
        'Connection':'close'
        // HTTP/1.1 默认开启长连接：Connection: keep-alive
        //'Connection':'keep-alive'
    });
    response.end("success");
}).listen(8081);

console.log("server listening on 8081");
console.log("http://localhost:8081/ or http://127.0.0.1:8081/");