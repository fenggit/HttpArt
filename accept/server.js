const http = require('http');
const fs = require('fs');

http.createServer(function (request, response) {
    console.log('request come', request.url);
    // 字符串的方式读取
    const html = fs.readFileSync('index.html', 'utf-8');
    response.writeHead(200, {
        'Content-Type': 'text/html',
        // 为了兼容IE
        'X-Content-Type-Options':'nosniff'
    });
    response.end(html);

}).listen(8080);

console.log("server listening on 8080");