const express = require('express')
const router = express.Router()
const dashboard = require('../Controllers/Dashboard')
const middleware = require('../middleWare/middleware')

router.get("/dashboard", middleware,  dashboard)

module.exports = router