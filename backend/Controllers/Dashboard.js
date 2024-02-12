const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const Model = require('../Model/UserModel');

const dashboard = async (req, res) => {
    try {
        // Foydalanuvchining tokeni
        const token = req.headers.authorization.split(' ')[1];
        
        // Tokenni tekshirish
        const decodedToken = jwt.verify(token, process.env.SECRET_KEY);
        
        // Tokenni ishlatib foydalanuvchi ma'lumotlarini olish
        const user = await Model.findById(decodedToken._id);
        
        // Foydalanuvchi ma'lumotlarini clientga qaytarish
        return res.status(200).json({ email: user.email });
    } catch (error) {
        console.error('Dashboard error:', error);
        return res.status(500).json('Internal server error');
    }
};

module.exports = dashboard;
