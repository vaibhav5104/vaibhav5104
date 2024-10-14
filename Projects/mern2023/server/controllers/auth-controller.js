const User = require("../models/user-model")
const bcrypt = require("bcryptjs")

const home = async (req,res) => {
    try{
        res
    .status(200)
    .send("Welcome to world best mern series by thapa technical using router")
    }catch(e){
        res.status(400).send({msg: "page not found"})
    }
    
}

const register = async (req,res) => {
    try{
        const {username,email,phone,password} = req.body
        const userExist  = await User.findOne({email:email})

        if(userExist){
            return res.status(400).json("email already exist")
        }

        // const saltRound = 10
        // const hash_password = await bcrypt.hash(password,saltRound)

        const userCreated = await User.create({username,email,phone,password})
        console.log(userCreated);
        // const data = req.body
        res
    .status(201)
    .json({msg : userCreated })
    }catch(e){
        res.status(400).send({msg: "page not found"})
    }
    
}

module.exports = {home,register}