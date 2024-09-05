// The http.createServer() method includes request
// and response parameters which is supplied by node.js

// The request object can be get information about the currentHTTP request
// e.g. , url ,request header, and data

// the response object can be used to send a response for a current HTTP request

// if the response from the HTTP server us supposed to be displayed as HTML, 
// you should include an HTTP header with the correct content type : 

const http = require('http')
const fs = require('fs')

// const server = http.createServer((req,res) => {
//     // console.log(req.url);
//     if(req.url == "/"){
//         res.end("Hello from the home side")
//     }else if(req.url == "/about"){
//         res.end("Hello from the about side")
//     }else if(req.url == "/contact"){
//         res.end("Hello from the contact side")
//     }else {
//         res.end("404 Error. Page doesnot exist")
//     }
    
// })

// server.listen(8000,"127.0.0.1",() => {
//     console.log("listening to the port no. 8000");
// })

const server = http.createServer((req, res) => {

    // const data = fs.readFileSync(`${__dirname}/UserApi/userapi.json`,"utf-8")
    // const objData = JSON.parse(data)



    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<h1>Home Page</h1>');
    } 
    else if (req.url === '/about') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<h1>About Page</h1>');
    } 
    // else if (req.url === '/userapi') {
        // res.writeHead(200, { 'Content-Type': 'application/json' });
        // res.end(objData[3].name);
    // } 
    else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('404 Error. Page does not exist');
    }
});

server.listen(8000, () => {
    console.log('listening to the port no. 8000');
});