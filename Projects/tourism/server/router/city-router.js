const express = require('express')
const router = express.Router()
const cityController = require('../controllers/city-controller')
const iteneraryController = require('../controllers/itenerary-controller')
const authMiddleware = require("../middlewares/auth-middleware");

router
    .route("/city")
    .get(cityController.getCity)


router
    .route("/city/:name")
    .get(cityController.getCityByName)


router
    .route("/city/:name/budget")
    .get(iteneraryController.getItenerary)

router
    .route("/city/budget/itineraries") // route can only /itineraries
    .get(iteneraryController.getItineraries)


router
.route("/images/:id")
.get(iteneraryController.getImageById)

module.exports = router