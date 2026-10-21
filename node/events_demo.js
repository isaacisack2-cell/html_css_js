const eventEmmiter = require('events');

const EventObject = new eventEmmiter();

EventObject.on('order',(food,seat)=>{
    console.log("---- NEW ORDER REQUESTED  ----");
    console.log(`Food: ${food}`);
    console.log(`Seat No: ${seat}`);
})

EventObject.on('order',(food)=>{
    console.log(`Chef get new food order ${food}`);
})

EventObject.emit('order','rice',15);