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

const path = require('path');
const express = require('express');
const app = express();
const hbs = require("hbs");
require("./db/conn");
const port = process.env.PORT || 8000;
const Register = require("./models/registers")

const static_path = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.set('view engine', 'hbs');
app.set("views", template_path);
hbs.registerPartials(partials_path);

// console.log(static_path);
app.use(express.static(static_path));

app.get("", (req,res) =>{
    res.render('index')
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
                confirmpassword : cpassword
            })
            const registered = await registerEmployee.save()
            res.status(201).render("index")
        }else {
            res.send("passwords are not matching")
        }

    }catch(e){
        res.status(400).send(e)
    }

})

app.get("/login",(req,res) => {
    res.render("login")
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


app.listen(port, () => {
    console.log(`listening to the port no at ${port}`);
})
