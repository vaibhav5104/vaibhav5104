// Streams are like youtube streaming where we dont need to 
// doenload the data and we can watch in real time

// Readable : streams which used to read operation
// Writable : streams which used to write operation
// Duplex : streams which used to noth read and write operation
// transform : type of duplex


// Each type of stream is an EventEmitter  , some of commenly used events are ; 

// data : this event is fired when data is available to read
// end : this event is fired when there is no more data to read
// error : this event is fired when there is any error recieving or writing data
// finish : this event is fired when all the data has been flushed out

const fs = require("fs")
const http = require("http")
const server = http.createServer((req, res) => {

// 1st way : 

// const rstream = fs.createReadStream("input.txt")

// rstream.on("data", (chunkdata) => {
//     res.write(chunkdata)
// }) 

// rstream.on("end",() => {
//     res.end()
// })

// rstream.on('error',(err) => {
//     console.log(err);
//     res.end("file not found")
// })

//2nd Way : 
const rstream = fs.createReadStream("input.txt")
rstream.pipe(res)



})


server.listen(8000, () => {
    console.log('listening to the port no. 8000');
});

// Note that we show the data like we have showed from httpserver dir
// but then the entire data would show in one time