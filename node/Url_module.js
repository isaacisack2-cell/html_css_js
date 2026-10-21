const http = require("http");
const url = require("url");
const PORT = 3000;

const server = http.createServer((req,res)=>{
    res.writeHead(200,{"Content-Type":"text/html"});
    const UrlObject = url.parse(req.url,true);
    const pathname = UrlObject.pathname;
    const queryData = UrlObject.query;
    if(pathname === "/users"){
        res.end(`
            <h1 style="color:green;">USER DETAILS</h1>
            <ul style="color:red;">
                <li>NAME: ${queryData.name || 'guest'}</li>
                <li>ROLE: ${queryData.role || 'user'}</li>
            </ul>`);
    }else{
        res.end("<h3>Open URL http://127.0.0.1:300/users?name=isaac&role=admin</h1>");
    }
})
server.listen(PORT)