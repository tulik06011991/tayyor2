// verifyMiddleware.js

const jwt = require('jsonwebtoken');

const verify = (req, res, next) => {
    if (!req.headers.authorization) {
        return res.status(401).json('No token');
    }

    const token = req.headers.authorization.split(' ')[1]; // Tokenni olish
    jwt.verify(token, process.env.SECRET_KEY, (error, data) => {
        if (error) {
            return res.status(401).json('Wrong token');
        } else {
            req.user = data; // Token ichidagi ma'lumotlarni saqlash
            next();
        }
    });
};

module.exports = verify;
