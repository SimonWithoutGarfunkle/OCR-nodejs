const http = require('http');

const server = http.createServer((req, res) => {
    res.end('ca change en live ');
});

server.listen(process.env.PORT || 3000);