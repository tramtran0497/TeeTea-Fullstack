const mongoose = require('mongoose')
const validator = require('validator')

const userSchema = new mongoose.Schema({
    name:{
        required: true,
        type: String,
        minlength: [4, "The name of product is at least 4 characters, please try again!"],
        trim: true,
    }, 
    email:{
        required: true,
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        validate(value) {
            if(validator.isEmpty(value)) {
                throw new Error('Email is empty')
            }
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid')
            }
        }
    }, 
    password: {
        type: String,
        required: true,
        minlength: 7,
        trim: true,
        validate(value) {
            if (value.toLowerCase().includes('password')) {
                throw new Error('Password cannot contain "password"')
            }
        }
    },
    phoneNumber:{
        required: true,
        type: Number,
        isNumeric: true,
        isMobilePhone: {
            options: ['fi-FI'],
            errorMessage: 'Must provide a valid Finland phone number.'
        },
        errorMessage: 'Must provide a valid phone number.'
    },
    address:{
        required: true,
        type: String,
        trim: true,
    },
    DOB:{
        required: true,
        type: String,
        format: Date,
    },
})

const User = mongoose.model("User", userSchema)

module.exports = User