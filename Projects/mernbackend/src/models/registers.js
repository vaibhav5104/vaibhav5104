const mongoose = require("mongoose")

const employeeSchema = new mongoose.Schema({

    firstname : {
        type : String,
        required : true
    },
    lastname : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
        unique:true
    },
    gender : {
        type : String,
        required : true
    },
    phone : {
        type : String,
        required : true,
        unique:true
    },
    age : {
        type : Number,
        required : true
    },
    gender : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    confirmpassword : {
        type : String,
        required : true
    }

})

// we need to create a collection

const Register = new mongoose.model("Register", employeeSchema)

module.exports = Register