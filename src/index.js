const http = require('http');


const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'application/json'
    });
    res.write('{"hello": "world"}');
    res.end();
});

server.listen(8080, '0.0.0.0', () => {
    console.log('Server is listening..');
});