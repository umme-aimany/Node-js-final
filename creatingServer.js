const http=require("http");
http.createServer((request,response)=>{
    response.writeHead(200,{'content-Type':'text/html'});
    response.write("<h1>This server is created through Node.js</h1>");
    response.end();
}).listen(2000);


