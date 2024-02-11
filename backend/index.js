const express = require('express')
const app = express()
require('dotenv').config()
const cors = require('cors')
const mongoose = require('mongoose')
const login = require("./Routes/Login")
const register = require('./Routes/register')
const dashboard = require('./Routes/dashboard')

const verifyToken = require('./middleWare/middleware')
const logout = require('./Routes/Logout')




app.use(cors())
app.use(express.json())
app.use("/auth", login)
app.use("/auth", register)
app.use('/auth',  dashboard)
app.use("/auth", logout)



// app.get('/', verifyToken, (req, res) => {
//     res.status(200).send({email: req.email});
//   });









mongoose.connect(process.env.MONGO_URL)
.then(() =>console.log(`connected  to database`))
.catch((error) =>console.log(error))

PORT = process.env.PORT



app.listen(PORT, console.log(`server running on port ${PORT}`))
