const mongoose  = require('mongoose')

const UserModel = mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true,
        
    },


})
const User = mongoose.model('MODEL' , UserModel)
module.exports = User