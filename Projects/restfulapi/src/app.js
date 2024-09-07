const express = require("express")
require("./db/conn")
const Student = require("./models/students")
const app = express()
const mongoose = require("mongoose")
const validator = require("validator")
const port = process.env.PORT || 8000;
const studentRouter = require("./routers/student")

app.use(express.json())// without writing it , it will give undefined data

// 3: we need to register our router
app.use(studentRouter)



app.listen(port,() => {
    console.log(`connection is setup at ${port}`);
})

// You DONOT need express.json() and express.urlencoded()
// for GET Requests or DELETE Requests. We only need it for post and put req.DELETE
// 
// express.json() is a method inbuilt in express to recognise the incoming Request Object as a JSON Object.
// This method is called as a middleware in your application using the code: app.use(express,json())