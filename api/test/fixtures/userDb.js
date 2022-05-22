const jwt = require("jsonwebtoken")
const mongoose = require("mongoose")
const User = require("../../src/models/User")

// create a specific user for testing
const userOneId = new mongoose.Types.ObjectId()
const userOne = {
    _id: userOneId,
    name: "Tram Sample",
    email: "tram.sample@gmail.com",
    phoneNumber: "0413789450",
    address: "Mariankatu 6B",
    password: "tramsample",
    DOB: "12/12/1992",
    tokens: [
        jwt.sign({ id: userOneId, isAdmin: this.isAdmin}, process.env.SECRET, {expiresIn: "3 days"})
    ]
}
// create an admin for testing
const adminId = new mongoose.Types.ObjectId()
const admin = {
    _id: adminId,
    name: "Tram Admin",
    email: "tram.admin@gmail.com",
    phoneNumber: "0413789459",
    address: "Mariankatu 6B",
    password: "tramadmin",
    DOB: "12/12/1982",
    isAdmin: true,
    tokens: [
        jwt.sign({ id: adminId, isAdmin: this.isAdmin}, process.env.SECRET, {expiresIn: "3 days"})
    ]
}

const setUpDB = async() => {
    await User.deleteMany()
    await new User(userOne).save()
    await new User(admin).save()
}

module.exports = {
    userOne,
    userOneId,
    admin,
    adminId,
    setUpDB
}