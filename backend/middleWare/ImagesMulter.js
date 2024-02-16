const multer = require('multer')
<<<<<<< HEAD
=======
const path = require('path')
>>>>>>> 1d89cbb8156dbd0afd11ad9e75e92d6f6a9245ad


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
<<<<<<< HEAD
      cb(null, './public/images')
    },
    filename: function (req, file, cb) {
      
      cb(null, file.originalname + '-' + Date.now())
=======
      cb(null, './public/Images')
    },
    filename: function (req, file, cb) {
      
      cb(null, file.fieldname +"_" + Date.now() + path.extname(file.originalname) )
>>>>>>> 1d89cbb8156dbd0afd11ad9e75e92d6f6a9245ad
    }
  })
  
const fileFilter = (req, file, cb) => {
    const dataTypes = ['image/jpeg', 'image/jpg', 'image/gif', 'image/webp', 'image/png']
    if(dataTypes.includes(file.mimetype)) {
        cb(null, true)
    } else {
        cb(null, false) 
    }
}

const uploadinMiddle = multer({ storage, fileFilter })

module.exports = uploadinMiddle
