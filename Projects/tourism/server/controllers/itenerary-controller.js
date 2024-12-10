// const Itenerary = require("../models/itinerary-model")
// const { GridFSBucket } = require('mongodb');
// const multer = require('multer');
// const mongoose = require("mongoose");
// const mongoURI = process.env.URI;

// const multer = require("multer")

// const storage = multer.diskStorage({
//     destination : function (req,file,cb) {
//         return cb(null,"uploads")
//     },
//     filename : function (req,file,cb) {
//         return cb(null,`${Date.now()} - ${file.originalname}`)
//     }
// })

// const storage = new GridFsStorage({
//     url: mongoURI,
//     options: { useNewUrlParser: true, useUnifiedTopology: true },
//     file: (req, file) => {
//         return {
//             filename: `${Date.now()}-${file.originalname}`,
//             bucketName: "uploads", // Collection name
//         };
//     },
// });

// mongoose.connection.on("connected", () => console.log("Connection successful to DB"));
// mongoose.connection.on("error", (err) => console.error("Connection error:", err));

// const imageUpload = multer({storage : storage})


// const multipleFileUpload = (req, res, next) => {
//     console.log("Multer middleware triggered");
//     return imageUpload.fields([
//         { name: 'placeImages', maxCount: 10 },
//         { name: 'hotelImages', maxCount: 10 },
//         { name: 'transportationImages', maxCount: 10 },
//     ])(req, res, next);
// };

// const addItenerary = async (req, res) => {
//     try {
//         const { name, budget, days } = req.body;

//         const places = {
//             placeImage: req.files['placeImages']?.map((file) => file.id), // GridFS file ID
//             placeName: req.body.placeName || [],
//             placePrice: req.body.placePrice || [],
//         };
//         const hotels = {
//             hotelImage: req.files['hotelImages']?.map((file) => file.id),
//             hotelName: req.body.hotelName || [],
//             hotelPrice: req.body.hotelPrice || [],
//         };
//         const transportation = {
//             transportationImage: req.files['transportationImages']?.map((file) => file.id),
//             transportationName: req.body.transportationName || [],
//             transportationPrice: req.body.transportationPrice || [],
//         };

//         const iteneraryExists = await Itenerary.findOne({
//             name: name.toLowerCase(),
//             budget,
//             days,
//         });

//         if (iteneraryExists) {
//             return res.status(400).json({
//                 message: "Itinerary for this city and given budget and days already exists.",
//             });
//         }

//         const iteneraryData = {
//             name: name.toLowerCase(),
//             budget,
//             days,
//             places,
//             hotels,
//             transportation,
//         };

//         const iteneraryCreated = await Itenerary.create(iteneraryData);

//         res.status(201).json({ message: "Itinerary Created", itenerary: iteneraryCreated });
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// };

// const addItenerary = async (req,res) => {
    
//     try {
//         const { name, budget, days } = req.body;

//         // Collect image file paths from the request
//         const places = {
//             placeImage: req.files['placeImages']?.map((file) => file.path),
//             placeName: req.body.placeName || [],
//             placePrice: req.body.placePrice || [],
//         };
//         const hotels = {
//             hotelImage: req.files['hotelImages']?.map((file) => file.path),
//             hotelName: req.body.hotelName || [],
//             hotelPrice: req.body.hotelPrice || [],
//         };
//         const transportation = {
//             transportationImage: req.files['transportationImages']?.map((file) => file.path),
//             transportationName: req.body.transportationName || [],
//             transportationPrice: req.body.transportationPrice || [],
//         };


//         const iteneraryExists = await Itenerary.findOne({
//             name: name.toLowerCase(),
//             budget,
//             days,
//         });

//         if(iteneraryExists) {
//             res.status(400).json({message : "Itenerary for this city and it's given budget and days already exist "})
//         }

//         const iteneraryData = {
//             name: name.toLowerCase(),
//             budget,
//             days,
//             places,
//             hotels,
//             transportation,
//         };

//         // const iteneraryCreated = await Itenerary.create({name,budget,days,places,hotels,transportation})
//         const iteneraryCreated = await Itenerary.create(iteneraryData);

//         res.status(201).json({ message: "Itinerary Created", itenerary: iteneraryCreated });

//     } catch (error) {
//         res.status(500).json({message : error.message})
//     }
    
// }

// const mongoose = require("mongoose");
// const { GridFSBucket } = require("mongodb");
// const multer = require("multer");
// const Itenerary = require("../models/itinerary-model");
// const mongoURI = process.env.URI;

// // MongoDB connection using createConnection
// const conn = mongoose.createConnection(mongoURI);

// let gridfsBucket;

// // Wait for the connection to open
// conn.once("open", () => {
//     gridfsBucket = new GridFSBucket(conn.db, { bucketName: "uploads" });
//     console.log("GridFS Bucket Ready");
// });

// // Multer configuration (store files in memory for uploading)
// // const storage = multer.memoryStorage();
// // const imageUpload = multer({ storage });

// // Middleware for handling multiple file uploads
// const imageUpload = multer({
//     storage: multer.memoryStorage(),
// }).fields([
//     { name: "placeImages", maxCount: 10 },
//     { name: "hotelImages", maxCount: 10 },
//     { name: "transportationImages", maxCount: 10 },
// ]);


// const multipleFileUpload = (req, res, next) => {
//     imageUpload(req, res, (err) => {
//         if (err instanceof multer.MulterError) {
//             return res.status(400).json({ message: err.message });
//         } else if (err) {
//             return res.status(500).json({ message: "File upload failed", error: err });
//         }
//         next();
//     });
// };


// // Add itinerary and save file data to MongoDB via GridFS
// const addItenerary = async (req, res) => {
//     console.log("Before try");
//     try {
//         const { name, budget, days } = req.body;

//         // Prepare file data for saving to GridFS
//         const places = {
//             placeImage: [],
//             placeName: req.body.placeName || [],
//             placePrice: req.body.placePrice || [],
//         };
//         const hotels = {
//             hotelImage: [],
//             hotelName: req.body.hotelName || [],
//             hotelPrice: req.body.hotelPrice || [],
//         };
//         const transportation = {
//             transportationImage: [],
//             transportationName: req.body.transportationName || [],
//             transportationPrice: req.body.transportationPrice || [],
//         };

//         // Upload files to GridFS for each category (places, hotels, transport)
//         if (req.files.placeImages) {
//             for (const file of req.files.placeImages) {
//                 const uploadStream = gridfsBucket.openUploadStream(file.originalname, {
//                     contentType: file.mimetype,
//                 });
//                 uploadStream.end(file.buffer);
//                 places.placeImage.push(uploadStream.id); // Store GridFS file ID
//             }
//         }

//         if (req.files.hotelImages) {
//             for (const file of req.files.hotelImages) {
//                 const uploadStream = gridfsBucket.openUploadStream(file.originalname, {
//                     contentType: file.mimetype,
//                 });
//                 uploadStream.end(file.buffer);
//                 hotels.hotelImage.push(uploadStream.id); // Store GridFS file ID
//             }
//         }

//         if (req.files.transportationImages) {
//             for (const file of req.files.transportationImages) {
//                 const uploadStream = gridfsBucket.openUploadStream(file.originalname, {
//                     contentType: file.mimetype,
//                 });
//                 uploadStream.end(file.buffer);
//                 transportation.transportationImage.push(uploadStream.id); // Store GridFS file ID
//             }
//         }

//         // Check if the itinerary already exists
//         const iteneraryExists = await Itenerary.findOne({
//             name: name.toLowerCase(),
//             budget,
//             days,
//         });

//         if (iteneraryExists) {
//             return res.status(400).json({
//                 message: "Itinerary for this city and given budget and days already exists.",
//             });
//         }

//         // Prepare itinerary data to save to MongoDB
//         const iteneraryData = {
//             name: name.toLowerCase(),
//             budget,
//             days,
//             places,
//             hotels,
//             transportation,
//         };

//         // Create a new itinerary record
//         const iteneraryCreated = await Itenerary.create(iteneraryData);

//         res.status(201).json({
//             message: "Itinerary Created",
//             itenerary: iteneraryCreated,
//         });
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// };

const mongoose = require("mongoose");
const { GridFSBucket } = require("mongodb");
const multer = require("multer");
const Itenerary = require("../models/itinerary-model");
const mongoURI = process.env.URI;

// MongoDB connection using createConnection
const conn = mongoose.createConnection(mongoURI);

let gridfsBucket;

conn.once("open", () => {
    gridfsBucket = new GridFSBucket(conn.db, { bucketName: "uploads" });
    console.log("GridFS Bucket Ready");
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
        };
        const hotels = {
            hotelImage: [],
            hotelName: req.body.hotelName || [],
            hotelPrice: req.body.hotelPrice || [],
        };
        const transportation = {
            transportationImage: [],
            transportationName: req.body.transportationName || [],
            transportationPrice: req.body.transportationPrice || [],
        };

        if (req.files.placeImages) {
            for (const file of req.files.placeImages) {
                const uploadStream = gridfsBucket.openUploadStream(file.originalname, {
                    contentType: file.mimetype,
                });
                uploadStream.end(file.buffer);
                places.placeImage.push(uploadStream.id);
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


const getItenerary = async (req,res) => {

    try {

        const { budget, days } = req.query;
        const _name = req.params.name

        // Ensure the required parameters are provided
        if (!_name || !budget || !days) {
            return res.status(400).json({ message: "Missing required parameters: name, budget, or days",budget,_name,days });
        }

        // Find itineraries for the specified city
        const itineraries = await Itenerary.find({name : _name})// This is the array of documents fetched from the MongoDB collection which mathes the querry

        // If no itineraries are found, return 404
        if (!itineraries || itineraries.length === 0) {
            return res.status(404).json({ message: "No itineraries found for the specified city" });
        }

        // Rank itineraries based on closeness to budget and days
        const rankedItineraries = itineraries.map(itinerary => {//The variable itinerary represents the current single document being processed during each iteration of the map function.
            const budgetScore = Math.abs(itinerary.budget - budget);
            const daysScore = Math.abs(itinerary.days - days);

            return {
                ...itinerary._doc,// Include original fields
                score: budgetScore + daysScore,
            };
        });

        // Sort by score (lower is better)
        rankedItineraries.sort((a, b) => a.score - b.score);

        res.status(200).json({
            itinerary: rankedItineraries[0], // Closest match
        });
        
    } catch (error) {
        res.status(500).json({message : error.message})
    }

}


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

module.exports = {addItenerary,getItenerary,getItineraries,imageUpload,multipleFileUpload}