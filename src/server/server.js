// server.js

const http = require('http');
const app = require('./routes');
const server = http.createServer(app);

server.listen(8080, () => {
    console.log('Server is running on http://localhost:8080');
});