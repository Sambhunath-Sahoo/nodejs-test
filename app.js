const http = require('http');


const server = http.createServer((req, res) => {
    console.log(req.url);
    process.exit();
});

server.listen(3005);
