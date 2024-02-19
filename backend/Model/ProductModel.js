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
    date:{
        type: Date, 
        default:Date.now
    }


})


const ProductUser = mongoose.model('product' , ProductModel)

module.exports = ProductUser