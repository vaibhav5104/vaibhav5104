// we can create , fire , listen , for our own Events

const EventEmitter = require("events")

const event = new EventEmitter()

event.on("sayMyName", () => {
    console.log("your name is vinod");
})
event.on("sayMyName", () => {
    console.log("your name is vinsdfod");
})
event.on("sayMyName", () => {
    console.log("your name is sdfsdf");
})

event.emit("sayMyName")


event.on("checkPage", (status,msg) => {
    console.log(`status code is ${status} and page is ${msg} `);
})

event.emit("checkPage",200,'OK')

