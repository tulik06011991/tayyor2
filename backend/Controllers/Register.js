// login.js

const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const Model = require('../Model/UserModel');

const router = express.Router();

router.post('/register', async (req, res) => {
    try {
        const isExists = Object.values(req.body).some(item => !item);
        if (isExists) {
            return res.status(401).json(`Hamma bo'sh joylarni to'ldirmadingiz`);
        }

        const existingUser = await Model.findOne({ username: req.body.username });
        if (existingUser) {
            return res.status(400).json(`Bu foydalanuvchi avval ro'yxatdan o'tgan`);
        }

        const hashedPassword = await bcrypt.hash(req.body.password, 10);

        const newUser = await Model.create({ ...req.body, password: hashedPassword });

        const payload = { _id: newUser.id, username: newUser.username };
        const token = jwt.sign(payload, process.env.SECRET_KEY);

        const { password, ...others } = newUser._doc;
        return res.status(200).json({ token, ...others });
    } catch (error) {
        console.error('Registration error:', error);
        return res.status(500).json('Internal server error');
    }
});

module.exports = router;
