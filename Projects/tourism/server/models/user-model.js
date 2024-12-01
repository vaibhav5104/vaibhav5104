const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config();

const userSchema = new mongoose.Schema({

    username :{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    phone:{
        type:Number,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    isAdmin:{
        type:Boolean,
        required:true,
        default:false
    }
})

userSchema.pre('save',async function (){

    const user = this

    if(!user.isModified("password")) {
        return next()
    }

    try {
        const saltRound = await bcrypt.genSalt(10)
        const hash_password = await bcrypt.hash(user.password,saltRound)
        user.password = hash_password

    } catch (error) {
        next(e)
    }
})

// compare password
userSchema.methods.comparePassword = async function(password){
    return bcrypt.compare(password,this.password)
}

userSchema.methods.generateToken = async function () {
    try {
        return jwt.sign({
            userId:this._id.toString(),
            email:this.email,
            isAdmin:this.isAdmin
            },
            process.env.JWT_SECRET_KEY,
            {
                expiresIn:"30d"
            }
        )
    } catch (error) {
        console.log("generateToken().error : ", error);
        throw new Error("Token generation error: " + error.message)
    }
}

const User = new mongoose.model("User",userSchema)
module.exports = User