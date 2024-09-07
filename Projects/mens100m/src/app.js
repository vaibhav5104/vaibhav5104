const express = require('express');
require("../src/db/conn")
const app = express()
const MensRanking = require("../src/models/mens")
const port = process.env.PORT || 8000

// Middleware to parse JSON requests
app.use(express.json());

app.get("/", (req, res) => {
    res.send("This is home page");
})

app.post("/mens", async (req, res) => {
    const men = new MensRanking(req.body);
    console.log(req.body);
    try {
        const createUser = await men.save();
        res.status(201).send(createUser);
    } catch (e) {
        res.status(400).send(e);
    }
})




app.listen(port, () => {
    console.log(`Connection is live at port no. ${port}`);
})
