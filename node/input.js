const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Your name: ',(name)=>{
    console.log(`welcome ${name} into node.js`);
    rl.close();
});