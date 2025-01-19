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
            required: true,
        }],
        placeName : [{
            type:String,
            required: true
        }],
        placePrice : [{
            type:Number,
            required: true
        }],
        placeLink : [{
            type: String,
            required : false
        }]
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
        hotelLink : [{
            type: String,
            required : false
        }]
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
        transportationLink : [{
            type: String,
            required : false
        }]
    },

})

const Itenerary = new mongoose.model("Itenerary",itenerarySchema)
module.exports = Itenerary