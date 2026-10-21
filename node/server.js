const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.end("<h1 style='color:#00FF00;'>THIS IS HOME PAGE WELCOMR TO BACKEND USING NODE.JS</h1>");
    }else if(req.url === "/about"){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.end(`../bgcolor_slide.html`);
    }else{
        res.writeHead(404,{'Content-Type':'text/html'});
        res.end("<h1>404 PAGE NOT FOUND</h1>");
    }
})

const PORT = 3000;
server.listen(PORT,()=>{
    console.log("Http server is running at port "+PORT);
})