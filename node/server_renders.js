const http = require("http");
const fs = require("fs");
const date = Date("YYY-MM-DD HH:mm:ss");


const server = http.createServer((req,res)=>{
    res.writeHead(200,{"Content-Type":"text/html"});
    if(req.url === "/"){
        fs.readFile("text_slider.html","utf8",(err,data)=>{
            if(err) throw err;
            res.end(data);
        })
    }else{
        res.end("<h1 style='color:red;'>THIS WEBSITE IS UNDER CONSTRUCTION</h1>");
    }
})

const PORT = 3000;
server.listen(PORT,()=>{
    console.log("Time:",date);
    console.log("Node.js server is running at http://127.0.0.1:"+PORT,"Click (CTR+CLICK) to open in browser");
})