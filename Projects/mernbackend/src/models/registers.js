const mongoose = require("mongoose")

const bcrypt = require("bcryptjs")
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


employeeSchema.pre("save", async function(next) {

    if(this.isModified("password")){
        console.log(`password is : ${this.password}`);
        this.password = await bcrypt.hash(this.password,10)
        console.log(`password is : ${this.password}`);    
    }
    this.confirmpassword = undefined

    next()//next is used to stop this hashing process and help to go to next process
})
//pre method is used before saving the document 

// we need to create a collection

const Register = new mongoose.model("Register", employeeSchema)

module.exports = Register