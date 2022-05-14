const mongoose = require("mongoose")

// mongoose.connect(process.env.MONGODB_URL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true 

// })

mongoose.connect(process.env.MONGODB_URL_CLOUD)
    .then(() => console.log("Database is connected!"))
    .catch(err => console.log("Database connects error!", err))