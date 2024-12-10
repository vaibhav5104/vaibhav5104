const City = require("../models/city-model")

const multer = require("multer")

const storage = multer.diskStorage({
    destination : function (req,file,cb) {
        return cb(null,"uploads")
    },
    filename : function (req,file,cb) {
        return cb(null,`${Date.now()} - ${file.originalname}`)
    }
})

const imageUpload = multer({storage : storage})

const city = async (req,res) => {

    try {

        const { name, cityImage, event, blog, mapUrl } = req.body;

        const lowerCaseName = name.toLowerCase();

        const cityExist = await City.findOne({name : lowerCaseName})

        if(cityExist) {
            return res.status(400).json({message:"City already exist"})
        }
        
        const cityCreated = await City.create({name : lowerCaseName, cityImage, event, blog, mapUrl}) //it creates and saves the document

        res
            .status(201)
            .json({message : "City created successfully"})

    } catch (error) {
        res.status(500).json({error :error.message })
    }

}

const getCityByName = async (req,res) => {

    try {
        const _name = req.params.name
        const cityData = await City.findOne({name : _name});

        if (!cityData) {
            return res.status(404).send({message:`There is no data for ${_name} city`  });  // Send 404 if the student is not found
        }

        return res.status(201).json({cityData})
    } catch (error) {
        res.status(500).json({error:error.message})
    }

}

const getCity = async (req, res) => {
    try {
        const cityCreated = await City.find().sort({ _id : 1 }); // Replace "name" with the desired field
        return res.status(201).json({ cityCreated });
    } catch (error) {
        console.error(`Error from city route: ${error}`);
        res.status(500).json({ error: error.message });
    }
};

const postImage = async (req,res) => {

    try {
        console.log(req.body);
        console.log(req.file);

        return res.json({message : 'image uploading successful'})
    } catch (error) {
        return res.json(error)
    }

}

module.exports = {city,getCity,getCityByName,postImage,imageUpload }