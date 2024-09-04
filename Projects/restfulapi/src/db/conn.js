const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/students-api")
.then(()=> {
    console.log("connection successful");
})
.catch((e)=>{
    console.log("no connection");
})
// useCreateIndex:true
// useNewUrlParser:true
// useUnifiedTopology:true



