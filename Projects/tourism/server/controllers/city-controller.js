const mongoose = require("mongoose");
const { GridFSBucket } = require("mongodb");
const City = require("../models/city-model")
const multer = require("multer");
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

const addCity = async (req, res) => {
    try {
        const { name, blog, mapUrl } = req.body;

        const events = {
            eventImage: [],
            eventName: Array.isArray(req.body.eventName) ? req.body.eventName : [req.body.eventName],
            eventLink: Array.isArray(req.body.eventLink) ? req.body.eventLink : [req.body.eventLink],
        };

        const cityImage = [];

        // Process event images
        if (req.files.eventImages) {
            for (const file of req.files.eventImages) {
                const uploadStream = await gridfsBucket.openUploadStream(file.originalname, {
                    contentType: file.mimetype,
                });
                uploadStream.end(file.buffer);
                events.eventImage.push(uploadStream.id); // Push each image ID into the array
            }
        }

        // Process city images
        if (req.files.cityImages) {
            for (const file of req.files.cityImages) {
                const uploadStream = await gridfsBucket.openUploadStream(file.originalname, {
                    contentType: file.mimetype,
                });
                uploadStream.end(file.buffer);
                cityImage.push(uploadStream.id); // Push each image ID into the array
            }
        }

        const cityExist = await City.findOne({ name: name.toLowerCase() });
        if (cityExist) {
            return res.status(400).json({ message: "City already exists" });
        }

        const cityData = { name: name.toLowerCase(), cityImage, events, blog, mapUrl };
        
        const cityCreated = await City.create(cityData);

        res.status(201).json({
            message: "City created successfully",
            city: cityCreated,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
};

const getCityByName = async (req, res) => {
    try {
        const _name = req.params.name;
        const cityData = await City.findOne({ name: _name });

        if (!cityData) {
            return res.status(404).send({ message: `There is no data for ${_name} city` });
        }

        // Convert image IDs to URLs
        const cityImageUrls = cityData.cityImage.map(
            (id) => `http://localhost:3000/api/tour/images/${id}`
        );

        const eventImageUrls = cityData.events.eventImage.map(
            (id) => `http://localhost:3000/api/tour/images/${id}`
        );

        const formattedCityData = {
                ...cityData._doc, // Include the raw city data
                cityImage: cityImageUrls, // Replace cityImage IDs with URLs
                events: {
                    ...cityData.events,
                    eventImage: eventImageUrls, // Replace eventImage IDs with URLs
                }
            
        };

        return res.status(200).json({ city: formattedCityData });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

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