const express = require('express')
const app = express()
require('dotenv').config()
const cors = require('cors')
const mongoose = require('mongoose')
const login = require("./Routes/Login")
const register = require('./Routes/register')




app.use(cors())
app.use(express.json())
app.use("/auth", login())
app.use("/auth", register())









mongoose.connect(process.env.MONGO_URL)
.then(() =>console.log(`connected  to database`))
.catch((error) =>console.log(error))

PORT = process.env.PORT



app.listen(PORT, console.log(`server running on port ${PORT}`))
