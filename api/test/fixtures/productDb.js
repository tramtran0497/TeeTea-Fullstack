const mongoose = require("mongoose")
const Product = require("../../src/models/Product")
const jwt = require("jsonwebtoken")
const User = require("../../src/models/User")

// create an admin for testing
const adminId = new mongoose.Types.ObjectId()
const admin = {
    _id: adminId,
    name: "Tram Admin Product",
    email: "tram.adminproduct@gmail.com",
    phoneNumber: "0413789479",
    address: "Mariankatu 6B",
    password: "tramadminproduct",
    DOB: "12/12/1972",
    isAdmin: true,
    tokens: [
        jwt.sign({ id: adminId, isAdmin: this.isAdmin}, process.env.SECRET, {expiresIn: "3 days"})
    ]
}

// create a specific user for testing
const userId = new mongoose.Types.ObjectId()
const user = {
    _id: userId,
    name: "Tram user",
    email: "tram.user@gmail.com",
    phoneNumber: "0413789460",
    address: "Mariankatu 6B",
    password: "tramuser",
    DOB: "12/12/1292",
    tokens: [
        jwt.sign({ id: userId, isAdmin: this.isAdmin}, process.env.SECRET, {expiresIn: "3 days"})
    ]
}

const productId = new mongoose.Types.ObjectId()
const product = {
    _id: productId,
    name: "Product sample",
    type: "Best seller",
    price: [10.90],
    extra: "extra 1, extra 2, extra 3",
    description: "Super spicy",
    ingredients: "Chilli, gralic, pork",
}

const setUpDBProduct = async() => {
    await User.deleteMany()
    await new User(admin).save() 
    await new User(user).save() 
    await Product.deleteMany()
    await new Product(product).save()
}

module.exports = {
    product,
    productId,
    admin,
    adminId,
    user,
    userId,
    setUpDBProduct
}