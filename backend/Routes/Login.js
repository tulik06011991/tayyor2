const express = require('express')
const router = express.Router()
const login = require('../Controllers/Login')

router.post("/login", login)

module.exports = router