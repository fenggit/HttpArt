const http = require('http');
const fs = require('fs');
// 压缩
const zlib = require('zlib');

http.createServer(function (request, response) {
    console.log('request come', request.url);

    // buffer 方式读取
    const html = fs.readFileSync('index.html');
    response.writeHead(200, {
        'Content-Type': 'text/html',
        'Content-Encoding':'gzip'
    });
    response.end(zlib.gzipSync(html));

}).listen(8081);

console.log("server listening on 8081");