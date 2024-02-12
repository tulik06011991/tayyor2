// routes/auth.js

const express = require('express');
const router = express.Router();

// Logout route
router.post('/logout', (req, res) => {
    // Clear the token from cookies
    res.clearCookie('token').send('Logged out successfully');
});

module.exports = router;
