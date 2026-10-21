const os = require('os');
console.log("Folder name: "+__dirname);
console.log("File name: "+__filename);
//console.log("Device OS: "+os.platform());

setTimeout(()=>{
    system = os.platform();
    console.log("\rDevice OS: "+system);
},5000);

let system = "checking for Device OS";
console.log(system);

console.log(typeof(module.exports));