const Service = require("../models/service-model")

const services = async (req,res) => {

    try{
        const response = await Service.find()
        if(!response){
            res.status(404).json({msg : "No service found"})
            // console.log("error from service ");
            return 
        }
        res.status(200).json({msg : response})
    }catch(error){
        console.log(`services error : ${error}`);
    }

}

module.exports = services