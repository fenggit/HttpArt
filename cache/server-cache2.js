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
        const etag = request.headers['if-none-match'];
        console.log("etag=",etag);
        console.log("request.headers=",request.headers);
        if(etag==='5555'){
            // 资源没有修改304
            response.writeHead(304,{
                'Content-Type':'text//javascript',
                // no-cache：每次缓存请求服务器回去校验数据是否可用
                'Cache-Control':'max-age=200000, no-cache',
                // no-store：禁止缓存
                //'Cache-Control':'max-age=200000, no-store',
                'Last-Modified':'123',
                'Etag':'5555' //数据签名
            });
            // 不需要返回数据，让前端使用缓存数据
            response.end('');
        }else{
            // 模拟，假设已经加载script.js成功
            response.writeHead(200,{
                'Content-Type':'text//javascript',
                'Cache-Control':'max-age=200000, no-cache', // 缓存200000s，每次读取缓存校验是否可用
                'Last-Modified':'123',
                'Etag':'5555'
            });

            // 1.返回数据
            response.end('console.log("script.js load success")');
        }
    }
}).listen(8080);

console.log("server listening on 8080");