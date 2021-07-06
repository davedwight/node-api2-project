// require your server and launch it here
const server = require('./api/server');
const port = 4001;

server.listen(4001, () => {
    console.log(`*** Server running on http://localhost:${port}***`);
})