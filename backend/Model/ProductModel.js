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
<<<<<<< HEAD
const ProductUser = mongoose.model('upload' , ProductModel)
=======
const ProductUser = mongoose.model('product' , ProductModel)
>>>>>>> 1d89cbb8156dbd0afd11ad9e75e92d6f6a9245ad
module.exports = ProductUser