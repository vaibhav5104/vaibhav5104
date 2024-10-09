/*const express = require("express")
const path = require("path")
const app = express()
require("./db/conn")
const hbs = require("hbs")
const port = process.env.PORT || 3000

// const static_path = path.join(__dirname,"../public")
// app.use(express.static(static_path))// it request to use a static html file

const templatesPath = path.join(__dirname,"../templates/views")
const partialsPath = path.join(__dirname,"../templates/partials")
app.set("views", templatesPath);
app.set("view engine","hbs")
hbs.registerPartials(partialsPath)

app.get("/", (req,res) => {
    res.render("index")//this line will work when above statements is not working therefore works as backup.
})                              //  e.g. if we delete static file

app.listen(port,() => {
    console.log(`Server is running at port no. ${port}`);
})*/

require("dotenv").config()
const path = require('path');
const express = require('express');
const app = express();
const hbs = require("hbs");
require("./db/conn");
const port = process.env.PORT || 8000;
const Register = require("./models/registers")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const cookieParser = require("cookie-parser")
const auth = require("./middleware/auth")

const static_path = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");



app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({extended:false}))

app.set('view engine', 'hbs');
app.set("views", template_path);
hbs.registerPartials(partials_path);

// console.log(process.env.SECRET_KEY);
// console.log(static_path);
app.use(express.static(static_path));

app.get("", (req,res) =>{
    res.render('index')
})

app.get("/secret",auth,(req,res) => {
    // console.log(`this is the cookie awesome ${req.cookies.jwt}`);//it holds only the latest token
    res.render('secret')
})

app.get("/logout",auth,async (req,res) => {
    try{
        console.log(req.user)
        //for single logout
        // req.user.tokens = req.user.tokens.filter((currElement) => {
        //     return currElement.token !== req.token//will store only tokens which aren't equal to current token
        // })//it deletes the cookies of given token from mongoDB and device

        //logout from all devices
        req.user.tokens = []

        res.clearCookie("jwt")
        console.log("logout successfully")
        await req.user.save()
        res.render("login")
    }catch(e){
        res.status(500).send(e)
        console.log(e)
    }
})

app.get("/register",(req,res) => {
    res.render("register")
})

app.post("/register", async (req,res) => {

    try{
        const password = req.body.password
        const cpassword = req.body.confirmpassword

        if (password === cpassword) {

            const registerEmployee = new Register({
                firstname : req.body.firstname,
                lastname : req.body.lastname,
                email : req.body.email,
                gender : req.body.gender,
                phone : req.body.phone,
                age : req.body.age,
                password : password,
                confirmpassword : cpassword,
            })
            //password hashing is done after filling infos and before saving it
            const token = await registerEmployee.generateAuthToken()
            //The res.cookie funciton is used to set the cookie name to value
            // The value parameter may be a string or object cenverted to JSON.

            // Syntax: 
            // res.cookie(name,value,[options])
            res.cookie("jwt",token,{
                expires:new Date(Date.now() + 30000),
                httpOnly:true
            })
            // console.log(cookie);
            const registered = await registerEmployee.save()
            console.log("the page part : "+registered);
            res.status(201).render("index")
        }else {
            res.send("passwords are not matching")
        }

    }catch(e){
        res.status(400).send(e)
        console.log(e);
    }

})

app.get("/login",(req,res) => {
    res.render("login")
})

app.post("/login",async  (req, res) => {
    try {
        
        const email = req.body.email
        const password = req.body.password

        const useremail = await Register.findOne({email:email})

        const isMatch = bcrypt.compare(password,useremail.password)
        // console.log("register : "+registerEmployee); will not work since it is declared in other fn
        const token = await useremail.generateAuthToken()
        // console.log("the token part " + token);
        res.cookie("jwt",token,{
            expires:new Date(Date.now() + 300000),
            httpOnly:true,
            // secure:true
        })
        if(isMatch) {
            res.status(201).render("index")
        }else {
            res.send("invalid login details")
        }

    } catch (error) {
        res.status(500).send("invalid login details")
    }
})


app.get("/about", (req,res) =>{
    res.render('about')
})


app.get("/weather", (req,res) =>{
    res.render('weather')
})


app.get("*", (req,res) =>{
    res.render('404', {
        errorMsg : "Opps! page not found, Click Here to go back"
    })
})



// const bcrypt = require("bcryptjs")
// const securePassword = async (password) => {

//     const passwordHash = await bcrypt.hash(password,10)
//     console.log(passwordHash);

//     const passwordmatch = await bcrypt.compare("thapa@123",passwordHash)
//     console.log(passwordmatch);

// }

// securePassword("thapa@123")



// const createToken = async () => {

//     const token = await jwt.sign({_id:"vaibhav"},"123123123121331312312312312312312313121131231231312312123123",{
//         expiresIn:"10 seconds"
//     })
//     console.log(token);

//     const userVer = await jwt.verify(token,"123123123121331312312312312312312313121131231231312312123123")
//     console.log(userVer);

// }

// createToken()

app.listen(port, () => {
    console.log(`listening to the port no at ${port}`);
})