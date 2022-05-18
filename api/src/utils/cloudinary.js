const cloudinary = require('cloudinary').v2
// cloudinary.config({
//   cloud_name: "tramtran0497",
//   api_key: "189424143346513",
//   api_secret: "Yb-2Z9aIbyoCW7IURpIHwDWPZA0",
// })

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
})

module.exports = cloudinary 