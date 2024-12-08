const mongoose = require('mongoose')

const itenerarySchema = new mongoose.Schema({

    name : {
        type:String,
        required:true
    },
    budget : {
        type:Number,
        required: true
    },
    days : {
        type:Number,
        required:true
    },
    places : {
        placeImage : [{
            type:String,
            required: true
        }],
        placeName : [{
            type:String,
            required: true
        }],
        placePrice : [{
            type:Number,
            required: true
        }],
    },
    hotels : {
        hotelImage : [{
            type:String,
            required: true
        }],
        hotelName : [{
            type:String,
            required: true
        }],
        hotelPrice : [{
            type:String,
            required: true
        }],
    },
    transportation : {
        transportationImage : [{
            type:String,
            required: true
        }],
        transportationName : [{
            type:String,
            required: true
        }],
        transportationPrice : [{
            type:String,
            required: true
        }],
    },

})

const Itenerary = new mongoose.model("Itenerary",itenerarySchema)
module.exports = Itenerary