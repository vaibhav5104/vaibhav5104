const mongoose = require("mongoose")
const validator = require("validator")

// connection creation and creating a new db
mongoose.connect("mongodb://localhost:27017/my_db")
.then(()=> console.log("connection successfull..."))
.catch((err) => console.log(err))

// schema
// A Mongoose schema defines the structure of the document,
// default values,validators, etc..

const projectSchema = new mongoose.Schema({
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

// A Mongoose model is a wrapper on the Mongoose schema.
// A Mongoose schema defines the structure of document
// default values,validators, etc.. whereas a Mongoose model provide an interface to the database
// for creating , querying , updating, deleting records, etc.

// Collection creation
const Playlist = new mongoose.model("Playlist",projectSchema)

// to insert single document

/* 
const createDocument = async () => {
    try{
        const my_project = new Playlist({
    
            name: "Vinay",
            age:20,
            class: "Btech"
        })

        const result = await my_project.save()
        console.log(result);
    }catch(err){
        console.log(err);
    }
    
    createDocument()

} 
*/

// to insert many document
    
const createDocument = async() => {

    try{
        const me = new Playlist({
            name: "Vaibhav",
            age:20,
            class: "Btech"
        })

        const YKD = new Playlist({
            name: "Yash",
            age:20,
            class: "Btech"
        })

        const Motta = new Playlist({
            name: "Vinay",
            age:20,
            class: "Btech"
        })
        
        const LLB = new Playlist({
            name: "Bharal",
            age:20,
            class: "Btech"
        })

        const Vikki = new Playlist({//an error will be occur since enum doesnot have this value
            name: "vikki",
            age:23,//an error will occur bcoz age is less than 20
            class: "Btech",
            email: "vndjnsk@gsdfsmail.com"
        })

        const Sukhii = new Playlist({//an error will be occur since enum doesnot have this value
            name: "sukhii",
            age:23,//an error will occur bcoz age is less than 20
            class: "Btech",
            email: "vndjnskzxczzc.com"
        })

        // const result = await Playlist.insertMany([me,YKD,Motta,LLB,Vikki])
        const result = await Playlist.insertMany([Sukhii])
        console.log(result);
    }catch(err){
        console.log(err);
    }
}

// createDocument()

// to read data
const getDocument = async () => {
    const result = await Playlist
    .find({age : {$lte : 20}})
    // .find({name : {$in : ["Vaibhav","Vinay"]}})
    // .find({name : {$nin : ["Vaibhav","Vinay"]}})
    // .find({$or : [{name:"Vaibhav"},{name:"Yash"}]})
    .select({name:1})// to show only name of documents of age : 20
    .sort({name:1})//sort accor to name
    // .limit(1)
    // .skip(3)
    console.log(result);
}
// operators : comparison,logical

// getDocument()


// update the documents

const updateDocument = async (_id) => {
    try{
        const result = await Playlist.findByIdAndUpdate({_id},{
            $set : {
                name:"Yash Dubay"
            }
        },{
            new:true
        }
    )
    console.log(result);
    }catch(err){
        console.log(err);
    }
}

// updateDocument("66cdf16aeb2c6de828837990")


// Delete Documents

const deleteDocument = async (_id) => {
    try{
    const result = await Playlist.findByIdAndDelete({_id})
    // we can also use deleteOne and deleteMany
    console.log(result);
    }catch(err){
        console.log(err);
    }
}

// deleteDocument("66cda808f99b70750f17e4ea")