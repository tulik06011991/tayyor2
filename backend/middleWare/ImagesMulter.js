const multer = require('multer')


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/images')
    },
    filename: function (req, file, cb) {
      
      cb(null, file.originalname)
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
