const request = require("supertest")
const app = require("../src/app")
const User = require("../src/models/User")

beforeEach( async() => {
    await User.deleteMany()
})

test("Sign up an account user", async() => {
    await request(app).post("/users").send({
        name: "Tram Test",
        email: "tram.test@gmail.com",
        phoneNumber: "0413789451",
        address: "Mariankatu 6B",
        password: "tramtest",
        DOB: "12/12/1212"
    }).expect(200)
})