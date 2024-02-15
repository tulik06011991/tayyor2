// dashboardController.js

const jwt = require('jsonwebtoken');
const User = require('../Model/UserModel'); // Foydalanuvchi modeli

const dashboard = async (req, res) => {
    try {
        // Foydalanuvchi ma'lumotlarini olish
        const user = await User.findById(req.user.userId);
        return res.status(200).json(user);
    } catch (error) {
        console.error('Dashboard error:', error);
        return res.status(500).json('Internal server error');
    }
};

module.exports = dashboard;


