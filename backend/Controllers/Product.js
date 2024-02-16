const ProductModel = require('../Model/ProductModel')
<<<<<<< HEAD


=======
const mongoose = require('mongoose');



const products = async (req, res) =>{
  try {
    const data = await ProductModel.find()
    if(!data){
        return res.status(400).json(`malumot topilmadi`)
        
    }
   return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }


}

module.exports = products

>>>>>>> 1d89cbb8156dbd0afd11ad9e75e92d6f6a9245ad
