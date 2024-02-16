const express = require('express')
const router = express.Router()
const middle = require('../middleWare/middleware')
const dashboard = require('../Controllers/Dashboard')

router.get("/dashboard",  dashboard)

module.exports = router