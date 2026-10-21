// server.js

const http = require('http');
const app = require('./routes');
const server = http.createServer(app);

server.listen(5050, () => {
    console.log('Server is running on http://localhost:5050');
});