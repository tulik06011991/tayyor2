const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const Model = require('../Model/UserModel');

const login = async (req, res) => {
    try {
        const isExists = Object.values(req.body).some(item => item === '');
        if (isExists) {
            return res.status(401).json({ message: "Hamma bo'sh joylarni to'ldirmadingiz" });
        }

        const existingUser = await Model.findOne({ email: req.body.email });
        if (!existingUser) {
            return res.status(400).json({ message: "Login yoki parol xatop" });
        }

        const passwordMatch = await bcrypt.compare(req.body.password, existingUser.password);
        if (!passwordMatch) {
            return res.status(400).json({ message: "Login yoki parol xato" });
        }

        const payload = { _id: existingUser.id, username: existingUser.username };
        const token = jwt.sign(payload, process.env.SECRET_KEY);

        // Set token as a cookie
        res.cookie('token', token, {
            httpOnly: true,
            // secure: true, // Uncomment this line in production (for HTTPS)
            // sameSite: 'None', // Uncomment this line in production (for cross-site requests)
        });

        const { password, ...others } = existingUser._doc;
        return res.status(200).json({ token, ...others });
    } catch (error) {
        console.error('Login error:', error);
        return res.status(500).json('Internal server error');
    }
};

module.exports = login;
