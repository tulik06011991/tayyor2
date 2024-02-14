// server/routes/authRoutes.js

const express = require('express');
const router = express.Router();
const multer = require('multer');
const uploadMiddleware = require('../middleWare/ImagesMulter'); // uploadMiddleware nomli middleware yaratganingizdan ishlating
 // uploadMiddleware nomli middleware yaratganingizdan ishlating
const ProductModel = require('../Model/ProductModel');

router.post('/uploading', uploadMiddleware.single('image'), async (req, res) => {
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
      imageUrl: req.file.path // Faylning joylashuvi
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
