const http = require('http');
const fs = require('fs');

http.createServer(function (request, response) {
    console.log('request come', request.url);

    if (request.url === '/') {
        // 302：重定向，每次请求先走 /  再到/new
        //request come /
        //request come /new

        // 301：只有第一次重定向，下一次再请求直接请求新的地址，告诉浏览器使用新的
        // 301永久变更，只有第一次是这样的，后续则不会有‘request come /’
        //request come /
        //request come /new
        response.writeHead(301, {
        //response.writeHead(302, {
            // 重定向地址
            'Location':'/new'
        });
        // 重定向，不需要传递数据
        response.end('');
    }

    if (request.url === '/new') {
        response.writeHead(200, {
            'Content-Type': 'text/html'
        });
        response.end('<div> this new content </div>');
    }
    // 注意看访问地址
}).listen(8080);

console.log("server listening on 8080");