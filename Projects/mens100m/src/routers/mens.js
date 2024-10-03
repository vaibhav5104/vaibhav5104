const express = require("express")
const MensRanking = require("../models/mens")

const router = new express.Router()

router.get("/", (req, res) => {
    res.send("This is home page");
})

// router.post("/mens", async (req, res) => {
//     const men = new MensRanking(req.body);
//     console.log(req.body);
//     try {
//         const createUser = await men.save();
//         res.status(201).send(createUser);
//     } catch (e) {
//         res.status(400).send(e);
//     }
// })

router.post("/mens", async (req, res) => {
    console.log("Request Body:", req.body);

    try {
        if((Array.isArray(req.body))){
        const createUser = await MensRanking.insertMany(req.body)
        res.status(200).send(createUser);
    }else {
        const createUser = await MensRanking.save(req.body);
        res.status(200).send(createUser);
    }
    } catch (e) {
        res.status(400).send({
            error: e.message,
            errors: e.errors
        });
    }
});

// get the athletes
router.get("/mens", async (req,res) => {
    try{
        const mensData = await MensRanking.find().sort({ranking:1})

        if(!mensData) {res.status(404).send()}
        res.status(200).send(mensData)
    }catch(e){
        res.status(400).send(e)
    }

})

router.get("/mens/ranking/:ranking", async (req,res) => {
    try{
        const _ranking = parseInt(req.params.ranking,10)
        const mensData = await MensRanking.findOne({ranking: _ranking})

        if(!mensData) res.status(404).send()
        res.status(201).send(mensData)
    }catch(e){
        res.status(400).send(e)
    }

})

// update the data

router.patch("/mens/ranking/:ranking", async (req,res) => {

    try{

        const _ranking = req.params.ranking
        const updateData = await MensRanking.findOneAndUpdate({ranking:_ranking} , req.body, {
            new: true,  // Return the updated document
            runValidators: true,  // Ensure validation is run on the update
        })
        res.send(updateData)

    }catch(e){
        res.status(400).send(e)
    }

})

// delete the data

router.delete("/mens/ranking/:ranking",async (req,res) => {

    try{
        const _ranking = req.params.ranking
        const mensData = await MensRanking.findOneAndDelete({ranking: _ranking})
        if(!mensData) res.status(404).send()
        res.status(201).send(mensData)
    }catch(e){
        res.status(400).send(e)
    }

})


module.exports = router