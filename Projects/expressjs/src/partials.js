const express = require("express")
const app = express()
// const path = require("path")
const port = 8000
// const hbs = require("hbs")
const mongoose = require("mongoose")
const validator = require("validator")
const bodyParser = require('body-parser');
const cors = require('cors');

// Middleware
app.use(bodyParser.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/users-data")
.then(()=> console.log("connection successfull..."))
.catch((err) => console.log(err))

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true,
        unique:true,//it is not a validator, it sures that every name will'be unique
        lowercase:true,
        trim:true,//it trims or cuts the extra space before and after the name if it has
        minlength:[3,"minimum 3 letters"],
        maxlength: 30,
        enum : ["vaibhav","bharal","yash","vinay","vikki","sukhii"]//will give an error if name value is different from these values 
    },
    age : {
        type:Number,
        validate(value){
            if(value < 20){
                throw new Error("video count should not be negative")
            }
        }
    },
    class:String,
    email: {
        type: String,
        required : true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Email is inValid")
            }
        }
    },
    date:{
        type:Date,
        default:Date.now
    }
})

const user = new mongoose.model("user",userSchema)

const createDocument = async() => {

    try{
        const me = new user({
            name: "Vaibhav",
            age:20,
            class: "Btech"
        })

        const YKD = new user({
            name: "Yash",
            age:20,
            class: "Btech"
        })

        const Motta = new user({
            name: "Vinay",
            age:20,
            class: "Btech"
        })
        
        const LLB = new user({
            name: "Bharal",
            age:20,
            class: "Btech"
        })

        const Vikki = new user({//an error will be occur since enum doesnot have this value
            name: "vikki",
            age:23,//an error will occur bcoz age is less than 20
            class: "Btech",
            email: "vndjnsk@gsdfsmail.com"
        })

        const Sukhii = new user({//an error will be occur since enum doesnot have this value
            name: "sukhii",
            age:23,//an error will occur bcoz age is less than 20
            class: "Btech",
            email: "sdlakjasl@gmail.com"
        })

        // const result = await user.insertMany([me,YKD,Motta,LLB,Vikki])
        const result = await user.insertMany([Sukhii])
        console.log(result);
    }catch(err){
        console.log(err);
    }
}

// Add a route to create a new user:


app.post('/api/users', async (req, res) => {
    try {
        const newUser = new user(req.body);
        await newUser.save();
        res.status(201).send(newUser);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Add a route to retrieve all users:


app.get('/api/users', async (req, res) => {
    try {
        const users = await user.find();
        res.status(200).send(users);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Add a route to get a user by their ID:

app.get('/api/users/:id', async (req, res) => {
    try {
        const userById = await user.findById(req.params.id);
        if (!userById) {
            return res.status(404).send();
        }
        res.status(200).send(userById);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Add a route to update a user by their ID:

app.patch('/api/users/:id', async (req, res) => {
    try {
        const updates = Object.keys(req.body);
        const allowedUpdates = ['name', 'age', 'class', 'email'];
        const isValidOperation = updates.every((update) => allowedUpdates.includes(update));

        if (!isValidOperation) {
            return res.status(400).send({ error: 'Invalid updates!' });
        }

        const userById = await user.findById(req.params.id);

        if (!userById) {
            return res.status(404).send();
        }

        updates.forEach((update) => (userById[update] = req.body[update]));
        await userById.save();

        res.status(200).send(userById);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Add a route to delete a user by their ID:

app.delete('/api/users/:id', async (req, res) => {
    try {
        const userById = await user.findByIdAndDelete(req.params.id);

        if (!userById) {
            return res.status(404).send();
        }

        res.status(200).send(userById);
    } catch (error) {
        res.status(500).send(error);
    }
});

// createDocument()



// partials are code blocks which we use multiple times
// to set the view engine

// const templatesPath = path.join(__dirname, "../templates/views");
// const partialsPath = path.join(__dirname, "../templates/partials");
// 
// app.set("views", templatesPath); 
// app.set("view engine", "hbs");
// hbs.registerPartials(partialsPath)

// template engine route

// app.get("/",(req,res) => {
//     res.render("index",{
//         name : "Vaibhav sharma",
//     })
// })

// app.get("/about",(req,res) => {
//     res.render("about",{
//         page : "about"
//     })
// })

// app.get("/api/users",(req,res) => {
//     res.render("about",{
//         page : "about"
//     })
// })

// app.get("/about/*",(req,res) => {
//     res.render('404',{
//         page : "non existed page of /about "
//     })

// })

// app.get("*",(req,res) => {
//     res.render('404',{
//         page : "404"
//     })

// })

app.listen(port,() => {
    console.log(`listing to the port ${port}`);
})




