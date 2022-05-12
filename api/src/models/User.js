const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken")
const Order = require('./Order')

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
        minlength: [7, "Your password is too short, at least having 7 characters."],
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
    tokens: [{
        type: String,
    }],
})

// Relationship between User and Order
userSchema.virtual("orders", {
    ref: 'Order',
    localField: '_id',
    foreignField: 'owner'
})

// Hide private info
userSchema.methods.toJSON = function() {
    const user = this
    const userObject = user.toObject()

    delete userObject.password
    delete userObject.tokens

    return userObject
}

userSchema.methods.createAuthToken = async function(){
    const user = this

    const token = jwt.sign({ id: user._id }, process.env.SECRET, {expiresIn: "3 days"})
    // adding a token in tokens array
    user.tokens.push(token)
    await user.save()

    return token;
}

userSchema.statics.findByCredentials = async(email, password) => {
    const user = await User.findOne({email})

    if(!user) throw new Error("Unable to login! Try again.")

    const isMatch = await bcrypt.compare(password, user.password)
    if(!isMatch) throw new Error("User Invalid!")

    return user
}

userSchema.pre("save", async function(next) {
    //user shows created user
    const user = this
    const saltRounds = 10
    if(user.isModified("password")){
        user.password = await bcrypt.hash(user.password, saltRounds)
    }

    next()
})

// Delete all orders before delete user
userSchema.pre("remove", async function(next) {
    const user = this;
    await Order.deleteMany({owner: user._id});
    next();
}); 

const User = mongoose.model("User", userSchema)

module.exports = User