const ProductModel = require('../Model/ProductModel')




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

