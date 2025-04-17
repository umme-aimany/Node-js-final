const http = require("http");

http.createServer((request, response) => {
    response.writeHead(200, { 'Content-Type': 'application/json' });
    response.write(JSON.stringify({ id: 1, name: 'aiman', dept: 'bscs' }));
    response.end();
}).listen(2000);
/////stringify json struture ko string ma convert kardetaha /////////



