const mongoose = require("mongoose")

const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
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
    },
    tokens:[{
        token:{
        type : String,
        required : true
        }
    }]

})

// methods is used when we work with instance i.e. registerEmployee
// static is used when we work with collection i.e. Register

// generating tokens
// will use funciton() because there is a need of this
employeeSchema.methods.generateAuthToken = async function() {
    try{
        const token = jwt.sign({_id : this._id},process.env.SECRET_KEY)
        this.tokens = this.tokens.concat({token:token})
        await this.save()
        return token
    }catch(e){
        res.send("the error part "+ e)
        console.log("the error part "+ e);
    }
}

// converting password into hash
employeeSchema.pre("save", async function(next) {

    if(this.isModified("password")){
        // console.log(`password is : ${this.password}`);
        this.password = await bcrypt.hash(this.password,10)
        // console.log(`password is : ${this.password}`);    
    }
    this.confirmpassword = undefined

    next()//next is used to stop this hashing process and help to go to next process
})
//pre method is used before saving the document 

// we need to create a collection

const Register = new mongoose.model("Register", employeeSchema)

module.exports = Register