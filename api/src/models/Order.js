const mongoose = require('mongoose')
const validator = require('validator')

const orderSchema = new mongoose.Schema({
    orderId:{
        required: true,
        type: String,
        trim: true,
    }, 
    nameCustomer:{
        required: true,
        type: String,
        trim: true,
        minlength: [4, "The name is too short, at least 4 characters"]
    }, 
    addressPoint:{
        required: true,
        type: String,
        trim: true,
    }, 
    timeOrder:{
        type: Date,
        default: () => new Date().toGMTString()
    },
    timeTakeOrder:{
        required: true,
        type: String,
    },
    status:{
        required: true,
        type: String,
        enum: ["Pick up", "Delivery", "Eat In"],
    },
    listProducts:[{
        productName: {
            required: true,
            type: String,
        },
        extra: [{
            type: String,
            trim: true,
        }],
        note: {
            type: String,
            trim: true,
        },
        quantity: {
            required: true,
            type: Number,
        },
        price: {
            required: true,
            type: Number,
        }
    }],
    totalPrice: {
        required: true,
        type: Number,
    },
    
})

const Order = mongoose.model("Order", orderSchema)

module.exports = Order