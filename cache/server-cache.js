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
            'Content-Type':'text//javascript',
            'Cache-Control':'max-age=200' // 缓存200s
        });
        // 1.返回数据
        response.end('console.log("script.js load success")');

        // url 没有变化，200s修改数据，重启服务
        // 200s内修改数据，客户端还是不知道的，客户端还是读取原来的数据
        // response.end('console.log("script.js load success twice")');

        // 解决方法：js文件名字，通过内容hash来设置js文件名字
    }
}).listen(8080);

console.log("server listening on 8080");