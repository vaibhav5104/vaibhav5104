const mongoose = require("mongoose");
const { ObjectId } = require("mongodb");
const { GridFSBucket } = require("mongodb");
const multer = require("multer");
const Itenerary = require("../models/itinerary-model");
const mongoURI = process.env.URI;

// MongoDB connection using createConnection
const conn = mongoose.createConnection(mongoURI);

// const {API} = useAuth()

let gridfsBucket;//gridfsBucket is an instance of GridFSBucket, a MongoDB utility that allows for storing and retrieving large files (like images) in MongoDB

conn.once("open", () => {
    gridfsBucket = new GridFSBucket(conn.db, { bucketName: "uploads" });
    console.log("GridFS Bucket Ready in itenirary-controller");
});

// Multer configuration
const imageUpload = multer({
    storage: multer.memoryStorage(),
}).fields([
    { name: "placeImages", maxCount: 10 },
    { name: "hotelImages", maxCount: 10 },
    { name: "transportationImages", maxCount: 10 },
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

// Add itinerary function
const addItenerary = async (req, res) => {
    try {
        const { name, budget, days } = req.body;

        const places = {
            placeImage: [],
            placeName: req.body.placeName || [],
            placePrice: req.body.placePrice || [],
            placeLink: req.body.placeLink || []
        };
        const hotels = {
            hotelImage: [],
            hotelName: req.body.hotelName || [],
            hotelPrice: req.body.hotelPrice || [],
            hotelLink: req.body.hotelLink || []

        };
        const transportation = {
            transportationImage: [],
            transportationName: req.body.transportationName || [],
            transportationPrice: req.body.transportationPrice || [],
            transportationLink: req.body.transportationLink || []
        };

        if (req.files.placeImages) {
            for (const file of req.files.placeImages) {//contains an array of uploaded image files
                //Each file has properties like originalname (name of the file), mimetype (file type), and buffer (binary data of the file)
                // console.log(file.originalname);//name of image 

                // Creates a writable stream for GridFSBucket to upload the file
                const uploadStream = gridfsBucket.openUploadStream(file.originalname, {
                    contentType: file.mimetype,
                });
                uploadStream.end(file.buffer);//Ends the writable stream by writing the file's binary data (file.buffer) into GridFS. This uploads the file to the database
                places.placeImage.push(uploadStream.id);//places.placeImage is an array in your database model where the IDs of the uploaded images will be stored
                // After uploading, uploadStream.id contains the ID of the stored file in GridFS. This ID is pushed into the hotels.hotelImage array, allowing the application to reference the uploaded file later (e.g., for displaying or downloading the image)
            }
        }

        if (req.files.hotelImages) {
            for (const file of req.files.hotelImages) {
                const uploadStream = gridfsBucket.openUploadStream(file.originalname, {
                    contentType: file.mimetype,
                });
                uploadStream.end(file.buffer);
                hotels.hotelImage.push(uploadStream.id);
            }
        }

        if (req.files.transportationImages) {
            for (const file of req.files.transportationImages) {
                const uploadStream = gridfsBucket.openUploadStream(file.originalname, {
                    contentType: file.mimetype,
                });
                uploadStream.end(file.buffer);
                transportation.transportationImage.push(uploadStream.id);
            }
        }
        const iteneraryExists = await Itenerary.findOne({
            name: name.toLowerCase(),
            budget,
            days,
        });

        if (iteneraryExists) {
            return res.status(400).json({
                message: "Itinerary for this city and given budget and days already exists.",
            });
        }

        const iteneraryData = {
            name: name.toLowerCase(),
            budget,
            days,
            places,
            hotels,
            transportation,
        };

        const iteneraryCreated = await Itenerary.create(iteneraryData);

        res.status(201).json({
            message: "Itinerary Created",
            itenerary: iteneraryCreated,
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getItenerary = async (req, res) => {
    try {
        const { budget, days } = req.query;
        const _name = req.params.name;

        if (!_name || !budget || !days) {
            return res.status(400).json({
                message: "Missing required parameters: name, budget, or days",
                budget,
                _name,
                days,
            });
        }

        const itineraries = await Itenerary.find({ name: _name });

        if (!itineraries || itineraries.length === 0) {
            return res.status(404).json({ message: "No itineraries found for the specified city" });
        }

        const rankedItineraries = itineraries.map((itinerary) => {
            const budgetScore = Math.abs(itinerary.budget - budget);
            const daysScore = Math.abs(itinerary.days - days);

            return {
                ...itinerary._doc,
                score: budgetScore + daysScore,
                places: {
                    ...itinerary.places,
                    placeImage: itinerary.places.placeImage.map(
                        (id) => `http://localhost:3000/api/tour/images/${id}`
                    ),   
                },
                hotels: {
                    ...itinerary.hotels,
                    hotelImage: itinerary.hotels.hotelImage.map(
                        (id) => `http://localhost:3000/api/tour/images/${id}`
                    ),
                },
                transportation: {
                    ...itinerary.transportation,
                    transportationImage: itinerary.transportation.transportationImage.map(
                        (id) => `http://localhost:3000/api/tour/images/${id}`
                    ),
                },
            };
        });

        rankedItineraries.sort((a, b) => a.score - b.score);

        res.status(200).json({
            itinerary: rankedItineraries[0], // Closest match
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getItineraries =  async (req,res) => {

    try {
        const iteneraries = await Itenerary.find()

        if(iteneraries.length === 0) {
            return res.status(404).send({message: "There are no iteneraries"})
        }

        return res.status(201).json({iteneraries})
    } catch (error) {
        res.status(500).json({message :error.message })
    }

}

// Route to fetch images by their ID
const getImageById = async (req, res) => {
    try {
        const { id } = req.params;

        if (!id) {
            return res.status(400).json({ message: "Image ID is required" });
        }

        const objectId = new ObjectId(id);

        const file = await conn.db.collection("uploads.files").findOne({ _id: objectId });
        if (!file) {
            return res.status(404).json({ message: "Image not found" });
        }

        const readStream = gridfsBucket.openDownloadStream(objectId);
        res.set("Content-Type", file.contentType);
        readStream.pipe(res);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {addItenerary,getItenerary,getItineraries,getImageById,imageUpload,multipleFileUpload}