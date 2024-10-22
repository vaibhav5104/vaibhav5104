const services = require("../controllers/service-controller")

const express = require("express")

const router = express.Router()

router.route('/service').get(services)
// we need to define a route and we want to get data from a function/controller named services

module.exports = router