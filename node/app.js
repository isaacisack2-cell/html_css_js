const myfunctions = require('./functions');

const jumla = myfunctions["sum"](10,20);
const product = myfunctions.product(2,5);
const salamu = myfunctions.greetings("isaac");

console.log(`Jumla: ${jumla}`);
console.log(`Product: ${product}`);
console.log(`greetings: ${salamu}`);