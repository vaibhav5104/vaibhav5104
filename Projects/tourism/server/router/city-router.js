const express = require('express')
const router = express.Router()
const cityController = require('../controllers/city-controller')
const iteneraryController = require('../controllers/itenerary-controller')
// const { get } = require('mongoose')

// const multer = require("multer")

// const imageUpload = multer({dest : "uploads/"})

router
    .route("/city")
    .get(cityController.getCity)

router
    .route("/add/city")
    .post(cityController.city)

router
    .route("/city/:name")
    .get(cityController.getCityByName)

router
    .route("/city/:name/budget")
    .post(iteneraryController.multipleFileUpload,iteneraryController.addItenerary)

router
    .route("/city/:name/budget")
    .get(iteneraryController.getItenerary)

router
    .route("/city/budget/itineraries") // route can only /itineraries
    .get(iteneraryController.getItineraries)

router
    .route("/image")
    .post(cityController.imageUpload.single("image-testing"),cityController.postImage)

module.exports = router