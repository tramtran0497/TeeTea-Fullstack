const multer = require("multer")
const path = require("path")

// Multer config
module.exports = multer({
  storage: multer.diskStorage({}),
  fileFilter: (req, file, cb) => {
    let ext = path.extname(file.originalname)
    if (ext !== ".jpg" && ext !== ".jpeg" && ext !== ".png") {
      cb(new Error("File type is not supported, Please try again with type png, jpg and jpeg"), false)
      return;
    }
    cb(null, true)
  },
})