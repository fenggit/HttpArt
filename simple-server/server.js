const http  =require('http');
const fs = require('fs');

http.createServer(function (request,response) {
    console.log("request url:",request.url);
    response.end("success");
}).listen(8080);

console.log("server listening on 8080");
console.log("http://localhost:8080/");