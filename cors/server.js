const http  =require('http');
const fs = require('fs');

http.createServer(function (request,response) {
    console.log("request url:",request.url);
    const html = fs.readFileSync('index.html','utf-8');
    response.writeHead(200,{
       'Content-Type':'text/html'
    });
    response.end(html);
}).listen(8887);

console.log("server listening on 8887");
console.log("http://localhost:8887/");