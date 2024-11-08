// // const {username,email,phone,password} = req.body
// const services = require("../controllers/service-controller")

// const express = require("express")

// const router = express.Router()

// router.route('/service').get(services)

// // we need to define a route and we want to get data from a function/controller named services

// module.exports = router

const express = require("express");
const router = express.Router();
const services = require("../controllers/service-controller");

// Define a route and call the services controller function on GET request
router.route('/service').get(services);

module.exports = router;