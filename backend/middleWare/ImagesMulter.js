const multer = require('multer')
const path = require('path')


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/Images')
    },
    filename: function (req, file, cb) {
      
      cb(null, file.fieldname +"_" + Date.now() + path.extname(file.originalname) )
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
