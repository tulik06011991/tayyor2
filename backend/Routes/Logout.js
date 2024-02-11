const express = require('express')
const router = express.Router()





// Express.js da "logout" endpointini yaratish
router.post('/logout', async (req, res) => {
    try {
      // Foydalanuvchi ma'lumotlarini tozalash
      req.user.tokens = [];
      await req.user.save();
  
      res.send({ message: 'Foydalanuvchi muvaffaqiyatli chiqdi' });
    } catch (error) {
      res.status(500).send({ error: 'Server xatosi' });
    }
  });


  module.exports  = router
  