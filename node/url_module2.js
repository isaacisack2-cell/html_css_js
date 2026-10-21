const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');
const PORT = 3000;

const server = http.createServer((req,res)=>{
    res.writeHead(200,{"Content-Type":"text/html"});
    const urlObject = url.parse(req.url,true);
    const urlPath = urlObject.pathname;
    const urlQuery = urlObject.query;

    let FilePath = null;
    function renderFile(FilePath,text=""){
        fs.readFile(FilePath,"utf8",(err,data)=>{
            if(err){
                res.end("<h1 style='color:#A231B6'>This site can't be reached</h1>"+err+data);
            }
            res.end(data+text);
        })
    }

    if(urlPath === "/the_ghost"){
        FilePath = path.join(__dirname,"..","isaac_the_ghost.html");
        renderFile(FilePath,"<a href='http://127.0.0.1:3000/test' target='_blank'>BACK</a>");
    }else if(urlPath === "/test"){
        FilePath = path.join(__dirname,"..","test.html");
        renderFile(FilePath,"<a href='http://127.0.0.1:3000/the_ghost' target='_blank'>NEXT</a>");
    }else{
        res.end("<h1 style='color:#FF0000;'>404 Not found</h1>");
    }
});
server.listen(PORT,()=>{
    console.log("Server is started at http://127.0.0.1:"+PORT+"/the_ghost");
})