const http  =require('http');
const fs = require('fs');

http.createServer(function (request,response) {
    console.log("request url:",request.url);
    response.writeHead(200,{
        'Access-Control-Allow-Origin':'*',
        //'Access-Control-Allow-Origin':'http://127.0.0.1:8888'
        'Access-Control-Allow-Headers':'X-Test-Cors',
        'Access-Control-Allow-Methods':'GET,POST'
    });
    response.end("request http://localhost:8888/ success");
}).listen(8888);

console.log("server listening on 8888");
console.log("http://localhost:8888/");