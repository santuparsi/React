

var http = require('http');
var fs = require('fs');

var server = http.createServer();  // EventEmitter

server.on('request', function (req, resp) {
    
    // // request processing logic...
    // resp.writeHead(200, { 'Content-Type': 'text/html' });
    // resp.write("<h1> Hello IBM</h1>");
    // resp.end();

    //  a. without stream 
    
    // fs.readFile('data/all-levels node.pdf', function (err, data) { 
    //     resp.writeHead(200, { 'Content-Type': 'application/pdf' });
    //     resp.write(data);
    //     resp.end();
    // })


    // b. with stream
    
    // var readableStream = fs.createReadStream('data/all-levels node.pdf'); // EE
    // readableStream.on('data', function (chunk) {
    //     console.log(chunk.length);
    //     resp.write(chunk);
    // });

    // readableStream.on('end', function () { 
    //     resp.end();
    // })

    // or
    fs.createReadStream('data/all-levels node.pdf').pipe(resp);




});

server.listen(8080, function () { 
    console.log('server listening on http://localhost:8080');
})
