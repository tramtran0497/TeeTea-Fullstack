const mongoose = require("mongoose")
const jwt = require("jsonwebtoken")
const Event = require("../../src/models/Event")
const User = require("../../src/models/User")

// create an admin for testing
const adminId = new mongoose.Types.ObjectId()
const admin = {
    _id: adminId,
    name: "Tram Admin Event",
    email: "tram.adminevent@gmail.com",
    phoneNumber: "0413789679",
    address: "Mariankatu 6B",
    password: "tramadminevent",
    DOB: "12/12/1972",
    isAdmin: true,
    tokens: [
        jwt.sign({ id: adminId, isAdmin: this.isAdmin}, process.env.SECRET, {expiresIn: "3 days"})
    ]
}

const eventId = new mongoose.Types.ObjectId()
const event = {
    _id: eventId,
    title: "Event sample",
    firstWord: "firstword sample",
    description: "desc sample",
}

const setUpDBEvent = async() => {
    await new Event(event).save()
    await new User(admin).save()
    jest.setTimeout(90 * 1000)
}

const setUpAfterDbEvent = async() => {
    await Event.deleteMany()
    await User.deleteMany()
}

module.exports = {
    event,
    eventId,
    admin,
    adminId,
    setUpDBEvent,
    setUpAfterDbEvent
}