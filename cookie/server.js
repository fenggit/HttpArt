const http = require('http');
const fs = require('fs');

http.createServer(function (request, response) {
    console.log('request come',request.url);

    if(request.url==='/'){
        const html = fs.readFileSync('index.html','utf-8');
        response.writeHead(200,{
            'Content-Type':'text/html',
            // 设置cookie,设置id的有效期是10s
            'Set-Cookie':['id=123;max-age=10','name=test']
        });
        response.end(html);
    }

}).listen(8080);

console.log("server listening on 8080");