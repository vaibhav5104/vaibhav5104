const express = require('express')
const router = express.Router()
const authControllers = require('../controllers/auth-controller')
const authMiddleware = require('../middlewares/auth-middleware')

router
    .route("/register")
    .post(authControllers.register)

router
    .route("/login")
    .post(authControllers.login)

router
    .route("/user")
    .get(authMiddleware,authControllers.user)

module.exports = router