const http = require('http');

http.createServer(function (request, response) {
    console.log("request url:", request.url);
    response.end("success");
}).listen(8080);

console.log("server listening on 8080");
console.log("http://localhost:8080/ or http://127.0.0.1:8080/");