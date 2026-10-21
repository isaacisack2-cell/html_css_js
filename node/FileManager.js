const fs = require('fs');

//Creating a file
fs.writeFile("message.txt","THis is message from the server",(err)=>{
    if(err) throw err;
    console.log("File created Successfully");
})

//
fs.readFile("message.txt","utf8",(err,data)=>{
    if(err) throw err;
    console.log("File Content: ",data);
})

//append in file
fs.appendFile("message.txt","\nadded contents",(err)=>{
    if(err) throw err;
    console.log("New contents are added");
}
)

//raname a file
fs.rename("message.txt","ujumbe.txt",(err)=>{
    if(err) throw err;
    console.log("file renamed");
})