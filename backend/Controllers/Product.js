const ProductModel = require('../Model/ProductModel')
const mongoose = require('mongoose');



const products = async (req, res) =>{

// Ma'lumotlarni olish funksiyasi

  try {
    const data = await ProductModel.find();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }


}

module.exports = products

