const mongoose = require('mongoose')

const citySchema = new mongoose.Schema({

    name : {
        type:String,
        required:true
    },
    cityImage : [
        {
            type:String,//url of image
            required:true
        }
    ],

    events: {
        eventName : [
            {
            type:String,
            required:true
            }
        ],
        eventImage:[
            {
                type:String,
                required:true
            }
        ],
        eventLink:[{
            type:String,
            required:false
        }]
    },
    blog: {
        type:String,
        required:true
    },
    mapUrl : {
        type:String,
        required:false,
        // default : 'https://www.google.com/maps/embed/v1/place?key=AIzaSyDH9KOU1PcvazhyDd9osO0TWG3FmCSs_Uo&q=agra'
    }
})

citySchema.pre('save', async function () {
    if (!this.mapUrl) { // Only set mapUrl if it's not provided
        const encodedName = encodeURIComponent(this.name); // Encode special characters in city name
        // Use Embed API URL
        this.mapUrl = `https://www.google.com/maps/embed/v1/place?key=AIzaSyDH9KOU1PcvazhyDd9osO0TWG3FmCSs_Uo&q=${encodedName}`;

    }
});

const City = new mongoose.model("City",citySchema)
module.exports = City