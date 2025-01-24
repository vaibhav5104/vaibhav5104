const User = require('../models/user-model')
const bcrypt = require('bcrypt')

const register = async (req,res) => {

    try {
        const {username,email,phone,password} = req.body
        const userExist = await User.findOne({email})

        if(userExist){
            return res.status(400).json({message : "User already exist"})
        }

        const userCreated = await User.create({username,email,phone,password})
        res
        .status(201)
        .json({
            message: "User Registration successful",
            token: await userCreated.generateToken(),
            userId: userCreated._id.toString()
        })
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const login = async (req,res) => {

    try {
        const {email,password} = req.body
        const userExist = await User.findOne({email})
        if(!userExist) return res.status(400).json({message : "User doesnot exist"})
        const user = await userExist.comparePassword(password)
        
        if(user){
            res
            .status(200)
            .json({
                message: "Login successful",
                token: await userExist.generateToken(),
                userId:userExist._id.toString(),
            })
        }else{
            res.status(401).json({
                message : "Invalid Credentials",
            })
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const user = async (req,res) => {

    try {
        // const userData = await User.find({});
        const userData = req.user;
        // const userData = await User.find({}, {password:0})
  
      //   console.log(userData);
        return res.status(200).json({ userData });
      } catch (error) {
        console.log(` error from user route ${error}`);
      }

}

module.exports = {register,login,user}