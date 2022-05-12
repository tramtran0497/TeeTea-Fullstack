const mongoose = require('mongoose')
const validator = require('validator')

const productSchema = new mongoose.Schema({
    name:{
        required: true,
        type: String,
        minlength: [4, "The name of product is at least 4 characters, please try again!"],
        trim: true,
    }, 
    type:{
        required: true,
        type: String,
        enum: ["Best seller", "Lunch and Dinner", "Main", "Drinks", "Snack"],
    }, 
    size:[{
        type: String,
        default: "One size",
        enum: ["S", "M", "L"],
    }],
    price:[{
        required: true,
        type: Number,
    }],
    extra:[{
        type: String,
        default: "This dish have no extra services.",
        trim: true,
    }],
    description:{
        type: String,
        trim: true,
    },
    ingredients:[{
        type: String,
        trim: true,
    }]
})

const Product = mongoose.model("Product", productSchema)

module.exports = Product