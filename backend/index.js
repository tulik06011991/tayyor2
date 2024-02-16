const express = require('express')
const app = express()
require('dotenv').config()
const cors = require('cors')
const mongoose = require('mongoose')
const login = require("./Routes/Login")
const register = require('./Routes/register')
const uploading = require('./Routes/UploadingRoutes')
const dashboard = require('./Routes/dashboard')
const logout = require('./Routes/Logout')
<<<<<<< HEAD
const verifyMiddleware = require('./middleWare/middleware');
=======
const products = require('./Routes/Products')
const verifyMiddleware = require('./middleWare/middleware');
const path = require('path');
>>>>>>> 1d89cbb8156dbd0afd11ad9e75e92d6f6a9245ad






app.use(cors())
app.use(express.json())
app.use(express.static('public'));
app.use("/auth", login)
app.use("/auth", register)
app.use('/auth', verifyMiddleware, dashboard);
app.use("/auth", logout)
app.use('/auth', verifyMiddleware, uploading)
<<<<<<< HEAD
app.use(express.static('public'))
=======
app.use('/auth', products)
>>>>>>> 1d89cbb8156dbd0afd11ad9e75e92d6f6a9245ad



// app.get('/', verifyToken, (req, res) => {
//     res.status(200).send({email: req.email});
//   });









mongoose.connect(process.env.MONGO_URL)
.then(() =>console.log(`connected  to database`))
.catch((error) =>console.log(error))

PORT = process.env.PORT



app.listen(PORT, console.log(`server running on port ${PORT}`))
