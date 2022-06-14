const mongoose = require("mongoose")
const jwt = require("jsonwebtoken")
const Job = require("../../src/models/Job")
const User = require("../../src/models/User")

// create an admin for testing
const adminId = new mongoose.Types.ObjectId()
const admin = {
    _id: adminId,
    name: "Tram Admin Job",
    email: "tram.adminjob@gmail.com",
    phoneNumber: "0433789479",
    address: "Mariankatu 6B",
    password: "tramadminjob",
    DOB: "12/12/1672",
    isAdmin: true,
    tokens: [
        jwt.sign({ id: adminId, isAdmin: this.isAdmin}, process.env.SECRET, {expiresIn: "3 days"})
    ]
}

const jobId = new mongoose.Types.ObjectId()
const job = {
    _id: jobId,
    title: "Job sample",
    quantity: 3,
    description: "desc sample",
}

const setUpDBJob = async() => {
    await new Job(job).save()
    await new User(admin).save()
    jest.setTimeout(90 * 1000)

}

const setUpAfterDbJob = async() => {
    await Job.deleteMany()
    await User.deleteMany()
}

module.exports = {
    job,
    jobId,
    admin,
    adminId,
    setUpDBJob,
    setUpAfterDbJob
}