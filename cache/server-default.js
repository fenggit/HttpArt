const http = require('http');
const fs = require('fs');

http.createServer(function (request, response) {
    console.log('request come',request.url);

    if(request.url==='/'){
        const html = fs.readFileSync('index.html','utf-8');
        response.writeHead(200,{
            'Content-Type':'text/html'
        });
        response.end(html);
    }

    if(request.url ==='/script.js'){
        // 模拟，假设已经加载script.js成功
        response.writeHead(200,{
            'Content-Type':'text//javascript'
        });
        response.end('console.log("script.js load success")');
    }
}).listen(8080);

console.log("server listening on 8080");