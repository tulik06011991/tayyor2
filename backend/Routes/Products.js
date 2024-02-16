const express = require('express')
const router = express.Router()
const products = require('../Controllers/Product')

router.get('/products', products)

module.exports = router



