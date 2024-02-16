// server/routes/authRoutes.js

const express = require('express');
const router = express.Router();
const multer = require('multer');
<<<<<<< HEAD
const uploadinMiddle = require('../middleWare/ImagesMulter'); // uploadMiddleware nomli middleware yaratganingizdan ishlating
const ProductModel = require('../Model/ProductModel');

router.post('/uploading', uploadinMiddle.single('image'), async (req, res) => {
=======
const uploadMiddleware = require('../middleWare/ImagesMulter'); // uploadMiddleware nomli middleware yaratganingizdan ishlating
 // uploadMiddleware nomli middleware yaratganingizdan ishlating
const ProductModel = require('../Model/ProductModel');
const path = require('path')


router.post('/uploading',  uploadMiddleware.single('image'), async (req, res) => {
>>>>>>> 1d89cbb8156dbd0afd11ad9e75e92d6f6a9245ad
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
<<<<<<< HEAD
      imageUrl: req.file.path // Faylning joylashuvi
=======
      image: req.file.path // Faylning joylashuvi
>>>>>>> 1d89cbb8156dbd0afd11ad9e75e92d6f6a9245ad
    });

    // Ma'lumotlar saqlanadi
    await newProduct.save();

    res.status(201).json({ message: 'Ma\'lumot muvaffaqiyatli saqlandi', product: newProduct });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Serverda xatolik yuz berdi' });
  }
});

module.exports = router;
