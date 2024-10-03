const express = require("express");
const path = require("path")
const app = express();

// app.get(route,callbackfunc)

// console.log(__dirname);
// console.log(path.join(__dirname,"../public") );

const staticPath = path.join(__dirname,"../public");

app.use(express.static(staticPath))



app.get("/",(req,res) => {
    res.send("Hello via express")
})

app.listen(8000,() => {
    console.log("listening");
})

app.get('/about',(req,res) => {
    res.send("Hello from /about")
})


// we use expressjs to make APIs

// There are four main functions in app , which are  : 
// get (to read data)
// post (create data)
// put (update)
// delete (delete)
// 

/* int app.get : we have to parameter , in first param we write the address(route) from which we want to manage data 
        and in second param we use a callback funciton which has two params - req and res
        Note : we have to use http module to do same in nodejs
*/

/* 
    The callback functions has 2 params , request(req) and response(res).
    the req represents the HTTP request and has properties for the request query string, params , body, HTTP headers, etc..

    Similarly , the response object represents the HTTP response that the Express app send when it recieves an HTTP request
    */

