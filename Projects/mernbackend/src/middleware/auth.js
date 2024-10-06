const jwt = require("jsonwebtoken")
const Register = require("../models/registers")


const auth = async (req,res,next) => {

    try{

        const token = req.cookies.jwt//it holds only the latest token
        const verifyUser = jwt.verify(token,process.env.SECRET_KEY)
        // console.log(verifyUser);
        const user = await Register.findOne({_id:verifyUser._id})
        // console.log(user.tokens)//it shows all the tokens for the user stored in mongoDB
        // Cookies are not designed to hold multiple tokens at once. If a user logs in from
        //  multiple devices, each device will have its own separate cookie with a unique token. 
        //  But on any given device/browser, only the latest token is stored in the cookie.
        
        req.token = token
        req.user = user
        
        next()
    }catch(e){
        res.status(401).send(e)
        console.log(e)
    }

}

module.exports = auth