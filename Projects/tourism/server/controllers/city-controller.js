const mongoose = require("mongoose");
const { GridFSBucket } = require("mongodb");
const City = require("../models/city-model")
const multer = require("multer")
const mongoURI = process.env.URI;

// MongoDB connection using createConnection
const conn = mongoose.createConnection(mongoURI);

let gridfsBucket;//gridfsBucket is an instance of GridFSBucket, a MongoDB utility that allows for storing and retrieving large files (like images) in MongoDB

conn.once("open", () => {
    gridfsBucket = new GridFSBucket(conn.db, { bucketName: "uploads" });
    console.log("GridFS Bucket Ready in city-controller");
});

// Multer configuration
const imageUpload = multer({
    storage: multer.memoryStorage(),
}).fields([
    { name: "eventImages", maxCount: 10 },
    { name: "cityImages", maxCount: 10 },
]);


const multipleFileUpload = (req, res, next) => {
    imageUpload(req, res, (err) => {
        if (err instanceof multer.MulterError) {
            return res.status(400).json({ message: err.message });
        } else if (err) {
            return res.status(500).json({ message: "File upload failed", error: err });
        }
        next();
    });
};

const addCity = async (req,res) => {

    try {

        const { name, blog, mapUrl } = req.body;

        const events = {
            eventImage : [],
            eventName : req.body.eventName || [],
            eventLink : req.body.eventLink || []
        }
        const cityImage = [];

        if (req.files.eventImages) {
            for (const file of req.files.eventImages) {//contains an array of uploaded image files
                //Each file has properties like originalname (name of the file), mimetype (file type), and buffer (binary data of the file)
                // console.log(file.originalname);//name of image 

                // Creates a writable stream for GridFSBucket to upload the file
                const uploadStream = gridfsBucket.openUploadStream(file.originalname, {
                    contentType: file.mimetype,
                });
                uploadStream.end(file.buffer);//Ends the writable stream by writing the file's binary data (file.buffer) into GridFS. This uploads the file to the database
                events.eventImage.push(uploadStream.id);//places.placeImage is an array in your database model where the IDs of the uploaded images will be stored
                // After uploading, uploadStream.id contains the ID of the stored file in GridFS. This ID is pushed into the hotels.hotelImage array, allowing the application to reference the uploaded file later (e.g., for displaying or downloading the image)
            }
        }

        if (req.files.cityImages) {
            for (const file of req.files.cityImages) {
                const uploadStream = gridfsBucket.openUploadStream(file.originalname, {
                    contentType: file.mimetype,
                });
                uploadStream.end(file.buffer);
                cityImage.push(uploadStream.id);
            }
        }

        const cityExist = await City.findOne({name : name.toLowerCase()})

        if(cityExist) {
            return res.status(400).json({message:"City already exist"})
        }

        const cityData = {name :  name.toLowerCase(), cityImage, events, blog, mapUrl}
        
        const cityCreated = await City.create(cityData) //it creates and saves the document

        res
            .status(201)
            .json({
                message : "City created successfully",
                city : cityCreated
            })

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


module.exports = {addCity,getCity,getCityByName,imageUpload ,multipleFileUpload}