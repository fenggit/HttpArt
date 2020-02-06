const http = require('http');
const fs = require('fs');

http.createServer(function (request, response) {
    console.log("request url:", request.url);
    const html = fs.readFileSync('index.html', 'utf-8');
    const img = fs.readFileSync('a.jpg');

    if (request.url === '/') {
        // html
        response.writeHead(200, {
            'Content-Type': 'text/html',
            // 关闭连接复用
            'Connection':'close'
            // 默认开启的
            //Connection: keep-alive
        });
        response.end(html);
    }else{
        // 图片
        response.writeHead(200, {
            'Content-Type': 'img/jpg',
            // 关闭连接复用
            'Connection':'close'
            // 默认开启的
            //Connection: keep-alive
        });
        response.end(img);
    }

}).listen(8080);

console.log("server listening on 8080");
console.log("http://localhost:8080/");