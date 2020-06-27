const http = require('http');
const app = require('./app');


port = process.env.PORT || 8080;

const server = http.createServer(app);

server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});