const express = require('express')
const app = express()
require('dotenv').config()
const cors = require('cors')
const mongoose = require('mongoose')
const login = require("./Routes/Login")
const register = require('./Routes/register')
const uploading = require('./Routes/UploadingRoutes')
const update = require('./Routes/UploadingRoutes')
const getId = require('./Routes/UploadingRoutes')
const Delete = require('./Routes/UploadingRoutes')

const dashboard = require('./Routes/dashboard')
const logout = require('./Routes/Logout')

const verifyMiddleware = require('./middleWare/middleware')
const products = require('./Routes/Products')

const path = require('path');







app.use(cors())
app.use(express.json())
app.use( "/", express.static('public'));
app.use("/auth", login)
app.use("/auth", register)
app.use("/auth", logout)
app.use('/auth', verifyMiddleware, dashboard);
app.use('/auth', verifyMiddleware, uploading)
app.use("/auth", verifyMiddleware, update )
app.use("/auth", verifyMiddleware, getId )
app.use("/auth", verifyMiddleware, Delete  )


>
app.use('/auth', products)




// app.get('/', verifyToken, (req, res) => {
//     res.status(200).send({email: req.email});
//   });









mongoose.connect(process.env.MONGO_URL)
.then(() =>console.log(`connected  to database`))
.catch((error) =>console.log(error))

PORT = process.env.PORT



app.listen(PORT, console.log(`server running on port ${PORT}`))
