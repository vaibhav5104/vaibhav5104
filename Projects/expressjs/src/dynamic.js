const express = require("express")
const app = express()
const path = require("path")
const port = 8000

// To use dynamic content we need template engines which are Pug,Mustache, and EJS
// handlebars.js is an extension to the Mustache template language
// hbs is an view engine of handlebars.js

// builtin middleware

// const staticPath = path.join(__dirname,"../public")

// to set the view engine

const templatesPath = path.join(__dirname, "../templates");
app.set("views", templatesPath);

app.set("view engine", "hbs");
// app.use(express.static(staticPath))
 
// template engine route

app.get("/",(req,res) => {
    res.render("index",{
        name : "Vaibhav",
    })
})

app.get("/about",(req,res) => {
    res.render("about",{
        page : "about"
    })
})

// app.get("/",(req,res) => {
    // res.send("hello for the express server") //this will not resnder because of top-bottom rule(FCFS)
// })

app.listen(port,() => {
    console.log(`listing to the port ${port}`);
})




