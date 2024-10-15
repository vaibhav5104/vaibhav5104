const jwt = require("jsonwebtoken")
const User =  require("../models/user-model")

const authMiddleware = async (req,res,next) =>{

    const token = req.header('Authorization')

    if(!token) {
        return res.status(401)
        .json({message: "Unauthorized HTTP, Token not provided"})
    }

    // assumming token is in the format "Bearer <jwtToken> the we have to remove "Bearer " prefix"
    const jwtToken = token.replace("Bearer","").trim()
    console.log("token from auth middleware" , token);
 
    try{
        const isVarified = jwt.verify(jwtToken, process.env.JWT_SECRET_KEY)
        console.log(isVarified)

        const userData = await User.findOne({email: isVarified.email}).
        select({
            password:0
        })

        // custom properties
        req.user = userData
        req.token = token
        req.userID = userData._id


        next()
    }catch(e){
        return res.status(401).json({message: "Unauthorixed. Invalid token."})
    }
}
module.exports = authMiddleware