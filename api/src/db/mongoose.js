const mongoose = require("mongoose")

// console.log(process.env.MONGODB_URL)

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true 
})  .then(() => console.log("mongoDB is connected"))
    .catch((err) => console.log(err));

// mongoose.connect(process.env.MONGODB_URL_CLOUD)
//     .then(() => console.log("Database is connected!"))
//     .catch(err => console.log("Database connection gets error!", err))