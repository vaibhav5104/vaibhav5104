const User = require("../models/user-model")
const bcrypt = require("bcryptjs")


const home = async (req,res) => {
    try{
        res
    .status(200)
    .send("Welcome to world best mern series by thapa technical using router")
    }catch(e){
        res.status(400).send({message: "page not found"})
    }
    
}
 
const register = async (req,res) => {
    try{
        const {username,email,phone,password} = req.body
        const userExist  = await User.findOne({email:email})

        if(userExist){
            return res.status(400).json({message:  "email already exist"})
        }

        // const saltRound = 10
        // const hash_password = await bcrypt.hash(password,saltRound)

        const userCreated = await User.create({username,email,phone,password})
        // console.log(userCreated);
        // const data = req.body
        res
    .status(201)
    .json({
        msg : "registration successful",
        token: await userCreated.generateToken(),
        userId:userCreated._id.toString(),
     })
    }catch(e){
        res.status(500).json("internal server error")    
    }
    
}

const login = async (req,res) => {

    try{
        const {email,password} = req.body
        const userExist = await User.findOne({email})

        if(!userExist) {
            return res.status(400).json({message : "Invalid credentials"})
        }

        // const user = await bcrypt.compare(password,userExist.password)
        const user = await userExist.comparePassword(password)

        // console.log("password : "+ password);
        // console.log("userExist.password : "+ userExist.password);

        if(user) {
            res
            .status(200)
            .json({
            msg : "Login successful",
            token: await userExist.generateToken(),
            userId:userExist._id.toString(),
             })
        }else {
            console.log("user does exist");
            res.status(401).json({message : "Invalid Credentials"})
        }


    }catch(e){
        console.log(e);
        res.status(500).json("internal server error")
    }

}

//to send user data
const user = async (req, res) => {
    try {
      // const userData = await User.find({});
      const userData = req.user;
    //   const users = await User.find({}, {password:0})

    //   console.log(userData);
      return res.status(200).json({ userData });
    } catch (error) {
      console.log(` error from user route ${error}`);
    }
  };

  const userId = async (req, res) => {//delete the user By Id
    try {
        console.log("id : "+req.params._id);
        const userIdData = await User.findByIdAndDelete(req.params.id);

        if (!userIdData) {
            return res.status(404).json({msg : "No userIdData "});  // Send 404 if the student is not found
        }

        res.status(200).json({userIdData});  // Use 200 for successful data retrieval
    } catch (e) {
        res.status(400).json({e});  
    }
}


module.exports = {home,register,login,user,userId}