const express = require('express')
const router = express.Router()
const register = require('../Controllers/Register')

router.post("/register", register)

module.exports = router