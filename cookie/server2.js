const http = require('http');
const fs = require('fs');

http.createServer(function (request, response) {
    console.log('request come', request.url);

    const host = request.headers.host;

    if (request.url === '/') {
        const html = fs.readFileSync('index.html', 'utf-8');

        // 一级域名访问：http://test.com:8080
        // 二级域名访问：http://a.test.com:8080
        //chrome 插件工具：HostAdmin App  映射
        if (host === 'test.com') {
            response.writeHead(200, {
                'Content-Type': 'text/html',
                // 设置cookie,设置id的有效期是10s
                // domain=test.com ==》设置这个域名下面的二级域名也是可以的设置cookie的
                'Set-Cookie': ['id=123;max-age=10', 'name=test;domain=test.com']
            });
        }
        response.end(html);
    }

}).listen(8080);

console.log("server listening on 8080");