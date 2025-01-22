const User = require("../models/user-model")
const Contact = require("../models/contact-model") 
const authM = require("../middlewares/auth-middleware")
const Service = require("../models/service-model")
/* 
// getAllUsers
*/
const getAllUsers = async (req,res) => {

    try{
        const users = await User.find({}, {password:0})
        // if (users.isAdmin === "true") {
            if((!users || users.length === 0)){
                return res.status(404).json({message: "no Users Found"})
            }
            // console.log("_id : "+_id);
            return res.status(200).json({users})
        // }
    }catch(error){
        // next(error)
        res.status(400).json({error})
    }
}

/* single user Logic */

const getUserById = async (req, res) => {//delete the user By Id
    try {
        // console.log("id : "+req.params._id);
        const id = req.params.id
        const userIdData = await User.findOne({_id:id},{password:0});

        res.status(200).json({userIdData});  // Use 200 for successful data retrieval
    } catch (error) {
        res.status(400).json({error});  
        // next(e)
    }
}

/* Update user by Id */

const updateUserById = async (req,res) => {

    try {
        const id = req.params.id
        const bodyData = req.body;
        const updatedData = await User.findByIdAndUpdate({_id:id},bodyData,{
            new:true
        })
        res.status(200).json({updatedData})
    } catch (error) {
        res.status(404).json({error})
    }

}

/* delete user Logic */

const deleteUserById = async (req, res) => {//delete the user By Id
    try {
        // console.log("id : "+req.params._id);
        const userIdData = await User.findByIdAndDelete(req.params.id);

        if (!userIdData) {
            return res.status(404).json({msg : "No userIdData "});  // Send 404 if the student is not found
        }

        res.status(200).json({message: "User Deleted Successfully"});  // Use 200 for successful data retrieval
    } catch (e) {
        // res.status(400).json({e}); 
        next(e) 
    }
}


/* add services */
const postServices = async (req,res) => {

    const {service,description,price,provider}= req.body
    const serviceCreated = await Service.create({service,description,price,provider})

    try {
        res.status(200).json({serviceCreated})
    } catch (error) {
        console.log("adminServices error : "+error);
        res.status(404).json("Adminservices error : "+error)
    }
}

/* 
// getAllContacts Logic
*/

const getAllContacts = async (req,res) => {

    try {
        const contacts = await Contact.find()
        if(!contacts || contacts === 0){
            return res.status(404).json({message:"no Contacts found"})
        } 
        return res.status(200).json(contacts)
    } catch (error) {
        next(error)
    }
}

/* // delete contacts */

const deleteContactById = async (req, res) => {

    try {
        // console.log("id : "+req.params._id);
        const contactId = await Contact.findByIdAndDelete(req.params.id);

        if (!contactId) {
            return res.status(404).json({msg : "No contact data "});
        }

        res.status(200).json({message: "contact Deleted Successfully"})
    } catch (e) {
        // res.status(400).json({e});
        next(e)
    }
}

module.exports = {getAllUsers,getAllContacts,deleteUserById,getUserById,updateUserById,postServices,deleteContactById}