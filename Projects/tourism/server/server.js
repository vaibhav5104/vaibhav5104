const express = require('express')
const cors = require("cors")
const app = express()
const connectDB = require('./utils/db')
const PORT = 3000
const authRoute = require("./router/auth-router")
const cityRoute = require("./router/city-router")

const corsOptions = {
    origin: "http://localhost:5173",
    methods:"GET,POST,PUT,DELETE,PATCH,HEAD",
    credentials:true
}

app.use(cors(corsOptions))


app.use(express.json());//to enable JSON parsing.meaning when we do post operation by writing something on like postman this help there

app.use("/api/auth",authRoute)

app.use("/api/tour",cityRoute)

connectDB().then(()=> {

    app.listen(PORT , () =>{
        console.log(`server is running at PORT ${PORT}`);
    })

})