const express = require("express")
const app = express()
const router = require("./router/auth-router")
const connectDB = require("./utils/db")
app.use(express.json())//middleware

app.use("/api/auth",router)



const PORT = 3000
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`server is running at PORT ${PORT}`);
    })
})