const jwt = require('jsonwebtoken');
const user = require('../Model/UserModel');

const verify = (req, res, next) => {
    if (!req.headers.authorization) {
        return res.status(401).json(`No token`);
    }
    if (req.headers.authorization && req.headers.authorization) {
        const token = req.headers.authorization;
        jwt.verify(token, process.env.SECRET_KEY, (error, data) => {
            if (error) {
                return res.status(401).json(`Wrong token`);
            } else {
                req.user = data;
                next();
            }
        });
    } else {
        return res.status(401).json(`Invalid token format`);
    }
};

module.exports = verify;
