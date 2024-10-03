const express = require('express')
const app = express()

app.get("/",(req,res)=> {
    res.send("<h1>Welcome to my homepage</h1>")
})

/*  if we need to give more line : 
    app.get("/",(req,res)=> {
    res.write("<h1>Welcome to my homepage</h1>")
    res.write("<h1>Welcome to my homepage again</h1>")
    res.send();
    })
*/

app.get("/about",(req,res)=> {
    res.send("Welcome to about")
})

app.get("/contact",(req,res)=> {
    res.send("Welcome to contact page")
})


// app.get("/temp",(req,res)=> {
    // res.send("Welcome to temp page")
// })

// if we need to print js array
app.get("/temp",(req,res)=> {
    res.json(
        [
            {
                id : 1,
                name : "vaibhav",
            },
            {
                id : 1,
                name : "vaibhav",
            },
        ]
    )
})

// we can also write res.json instead of res.send and advantage of using res.json() is :
    // both methods are identical when array or obj is passed ,
    // but res.json() will also converet non-objects, 
    // such as null and undefined, which are not valid JSON.

 

app.listen(8000,() => {
    console.log("listening");
})





