const express = require('express')
const router = express.Router()
const cityController = require('../controllers/city-controller')
const iteneraryController = require('../controllers/itenerary-controller')

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
    .post(iteneraryController.addItenerary)

router 
    .route("/city/:name/budget")
    .get(iteneraryController.getItenerary)

module.exports = router