const Itenerary = require("../models/itinerary-model")

const addItenerary = async (req,res) => {

    try {
        const {name,budget,days,places,hotels,transportation} = req.body

        // there can be multiple iteneraries for same city but with different budget
        const lowerCaseName = name.toLowerCase();

        const cityExist = await Itenerary.findOne({name: lowerCaseName})
        const budgetExist = await Itenerary.findOne({budget})

        if(cityExist && budgetExist) {
            res.status(400).json({message : "Itenerary for this city already exist "})
        }

        const iteneraryCreated = await Itenerary.create({name,budget,days,places,hotels,transportation})

        res.status(201).json({message:"itenerary Created"})

    } catch (error) {
        res.status(500).json({message : error.message})
    }
    
}

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

module.exports = {addItenerary,getItenerary,getItineraries}