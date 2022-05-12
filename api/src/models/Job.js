const mongoose = require('mongoose')
const validator = require('validator')

const jobSchema = new mongoose.Schema({
    title:{
        required: true,
        type: String,
        minlength: [4, "The title of a job is at least 4 characters, please try again!"],
        trim: true,
    }, 
    quantity:[{
        required: true,
        type: Number,
    }],
    description:[{
        type: String,
        trim: true,
    }],
})

const Job = mongoose.model("Job", jobSchema)

module.exports = Job