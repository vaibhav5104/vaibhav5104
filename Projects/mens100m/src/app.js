const express = require('express');
require("../src/db/conn")
const app = express()
const MensRanking = require("./models/mens")
const port = process.env.PORT || 8000
const studentRouter = require("./routers/mens")

// Middleware to parse JSON requests
app.use(express.json());
app.use(studentRouter)


app.listen(port, () => {
    console.log(`Connection is live at port no. ${port}`);
})
