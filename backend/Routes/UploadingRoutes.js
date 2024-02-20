// server/routes/authRoutes.js

const express = require('express');
const router = express.Router();
const multer = require('multer');
const uploadMiddleware = require('../middleWare/ImagesMulter'); // uploadMiddleware nomli middleware yaratganingizdan ishlating
 // uploadMiddleware nomli middleware yaratganingizdan ishlating
const ProductModel = require('../Model/ProductModel');
const path = require('path')


router.post('/uploading',  uploadMiddleware.single('image'), async (req, res) => {
  try {
    // Agar fayl yuborilmasa
    if (!req.file) {
      return res.status(400).json({ message: 'Fayl yuborilmadi' });
    }

    // Agar rasm yuborilmasa
    if (!req.body.title) {
      return res.status(400).json({ message: 'Rasm sarlavhasi yuborilmadi' });
    }

    // Fayl ma'lumotlar bazasiga yuklanadi
    const newProduct = new ProductModel({
      title: req.body.title,
      image: req.file.filename // Faylning joylashuvi
    });
    console.log(newProduct)

    // Ma'lumotlar saqlanadi
    await newProduct.save();

    res.status(201).json({ message: 'Ma\'lumot muvaffaqiyatli saqlandi', product: newProduct });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Serverda xatolik yuz berdi' });
  }
});

router.put('/update/:id',  uploadMiddleware.single('image'), async (req, res) => {
  try {
    // Agar fayl yuborilmasa
    if (!req.file) {
      return res.status(400).json({ message: 'Fayl yuborilmadi' });
    }

    // Agar rasm yuborilmasa
    if (!req.body.title) {
      return res.status(400).json({ message: 'Rasm sarlavhasi yuborilmadi' });
    }
    const {id} = req.params

    // Fayl ma'lumotlar bazasiga yuklanadi
    const newProduct = ({
      title: req.body.title,
      image: req.file.filename// Faylning joylashuvi
    });

     await ProductModel.findByIdAndUpdate(id, newProduct)

    // Ma'lumotlar saqlanadi
    //await newProduct.save();

    res.status(201).json({ message: 'Ma\'lumot muvaffaqiyatli saqlandi', id, product: newProduct });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Serverda xatolik yuz berdi' });
  }
});

router.get('/getId/:id', async (req, res) => {
  try {
    
   
    const {id} = req.params

    // Fayl ma'lumotlar bazasiga yuklanadi
    const newProduct = await ProductModel.findById(id);
    if(!newProduct){
      res.status(400).json(`siz izlagan  ma'lumot topilmadi`)
    }

    // Ma'lumotlar saqlanadi
    

    res.status(200).json({ message: 'Ma\'lumot muvaffaqiyatli olindi',  newProduct });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Serverda xatolik yuz berdi' });
  }
});

router.delete('/delete/:id',   async (req, res) => {
  try {
    
    
      const {id} = req.params
    
    await ProductModel.findByIdAndDelete(id);

    
    

    res.status(200).json({ message: 'Ma\'lumot muvaffaqiyatli o`chirildi' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Serverda xatolik yuz berdi' });
  }
});







module.exports = router;
