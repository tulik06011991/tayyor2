const express = require('express')
const app = express()
require('dotenv').config()
const cors = require('cors')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')


PORT = process.env.PORT
app.get('/' , (req, res) =>{
    res.send(` ishladi`)
})


app.listen(PORT, console.log(`server running on port ${PORT}`))
