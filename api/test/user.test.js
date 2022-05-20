const request = require("supertest")
const app = require("../src/app")
const jwt = require("jsonwebtoken")
const mongoose = require("mongoose")
const User = require("../src/models/User")

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

beforeEach( async() => {
    await User.deleteMany()
    await new User(userOne).save()
})

test("Sign up an account user", async() => {
    await request(app)
            .post("/users")
            .send({
                name: "Tram Test",
                email: "tram.test@gmail.com",
                phoneNumber: "0413789451",
                address: "Mariankatu 6B",
                password: "tramtest",
                DOB: "12/12/1212"
            })
            .expect(200)
})

test("Login an existed user", async() => {
    await request(app)
            .post("/login")
            .send({
                email: userOne.email,
                password: userOne.password
            })
            .expect(200)
})

test("Login nonexistent account", async() => {
    await request(app)
            .post("/login")
            .send({
                email: userOne.email,
                password: "thewrongpassword"
            })
            .expect(400)
})

test("Get information profile", async() => {
    await request(app)
            .get("/user/username")
            .set("Authorization", `Bearer ${userOne.tokens[0]}`)
            .send()
            .expect(200)
})

test("Get information profile without authorized", async() => {
    await request(app)
            .get("/user/username")
            .send()
            .expect(401)
})

test("Delete an account", async() => {
    await request(app)
            .delete("/user/username")
            .set("Authorization", `Bearer ${userOne.tokens[0]}`)
            .send()
            .expect(200)
})

test("Delete an account without authorized", async() => {
    await request(app)
            .delete("/user/username")
            .send()
            .expect(401)
})