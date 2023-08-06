const http = require('http');


const server = http.createServer((req, res) => {
    const url = req.url;
    if (url === '/') {
        
    }

    // type of response we are sending back example ('text/plain', 'text/html', 'application/json' ... etc)
    // https://developer.mozilla.org/en-US/docs/Glossary/Response_header
    res.setHeader('Content-Type', 'text/html'); 

    res.write(
        `<html>
            <head>
                <title>My First Page</title>
            </head>
            <body>
                Hi There!
            </body>
        </html>`
    );

    // send the response back to the client
    res.end(); 
});

server.listen(3005);
