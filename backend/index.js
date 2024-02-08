const express = require('express')
const app = express()
require('dotenv').config()
const cors = require('cors')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')


mongoose.connect(process.env.MONGO_URL)
.then(() =>console.log(`connected  to  oo database`))
.catch((error) =>console.log(error))

PORT = process.env.PORT
app.get('/' , (req, res) =>{
    res.send(` ishladi   urra`)
})


app.listen(PORT, console.log(`server running on port ${PORT}`))
