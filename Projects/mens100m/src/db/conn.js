const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/olympic")
.then(()=> {
    console.log("connection successful");
})
.catch((e)=>{
    console.log("no connection");
})