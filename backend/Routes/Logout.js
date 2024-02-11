const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleWare/middleware');
const user = require('../Model/UserModel');

// Tokenni o'chirish endpoint'i
router.delete('/logout', authMiddleware, async (req, res) => {
    try {
        req.user.tokens = []; // Foydalanuvchi to'kensini tozalash
        await req.user.save(); // Ma'lumotlar bazasiga saqlash
        res.send('Logged out successfully');
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;

