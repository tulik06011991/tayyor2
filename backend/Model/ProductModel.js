const mongoose  = require('mongoose')

const ProductModel = mongoose.Schema({
   
    image:{
        type: String,
        required: true,
        
    },
    title:{
        type: String,
        required: true,
        
    },


})
const ProductUser = mongoose.model('upload' , ProductModel)
module.exports = ProductUser