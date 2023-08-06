const http = require('http');
const fs = require('fs');
const { log } = require('console');

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === '/') {
        res.write(
            `<html>
                <body>
                    <h2>HTML Forms</h2>
                    <form action="/message" method='POST'>
                        <label for="fname">First name:</label><br>
                        <input type="text" id="fname" name="first_name" value="John"><br>
                        <label for="lname">Last name:</label><br>
                        <input type="text" id="lname" name="last_name" value="Doe"><br><br>
                        <input type="submit" value="Submit">
                    </form> 
                </body>
            </html>`
        );
        return res.end();
    }

    if (url === '/message' && method === 'POST') {
        const body = [];
        
        req.on('data', (chunk) => {
            body.push(chunk);
        });
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            fs.appendFileSync('message.txt', parsedBody);
            console.log(parsedBody);
        });
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
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
                Hi There! Sams
            </body>
        </html>`
    );

    // send the response back to the client
    res.end(); 
});

server.listen(3005);
