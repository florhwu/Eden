/**
 * Created by florencewu on 5/4/2016.
 */
//server modules
var app = require('express')();
var express = require('express');
var http = require('http').Server(app);
var http = require('http');
//file modules
var fs = require('fs');

//404 not found
function send404Res(response) {
    response.writeHead(404, {"Content-Type": "text/plain"});
    response.write("Error 404: Page not found");
    response.end();
}

//handle request
function onRequest(request, response) {

    if (request.method == 'GET' && request.url == '/') {
        //send back html file
        response.writeHead(200, {"Content-Type": "text/html"});
        //pipe out index.html thru response object
        var path = require('path');

        app.use(express.static(path.join(__dirname, '/public')));
        // fs.createReadStream("./libraries/*").pipe(response);
    } else {
        send404Res(response);
    }
}

http.createServer(onRequest).listen(8888);
console.log("RUNNING SERVER ON LOCALHOST");