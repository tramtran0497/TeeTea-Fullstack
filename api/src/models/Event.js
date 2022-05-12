const mongoose = require('mongoose')
const validator = require('validator')

const eventSchema = new mongoose.Schema({
    title:{
        required: true,
        type: String,
        minlength: [4, "The name of product is at least 4 characters, please try again!"],
        trim: true,
    }, 
    firstWord:{
        required: true,
        type: String,
        trim: true,
    }, 
    description:{
        required: true,
        type: String,
        trim: true,
    },
})

const Event = mongoose.model("Event", eventSchema)

module.exports = Event