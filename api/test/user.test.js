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

beforeEach( async() => {
    await User.deleteMany()
    await new User(userOne).save()
    await new User(admin).save()
})

// User's permission

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

test("Logout", async() => {
    await request(app)
            .post("/logout")
            .set("Authorization", `Bearer ${userOne.tokens[0]}`)
            .send()
            .expect(200)
    const user = await User.findById(userOneId)
    expect(user.tokens).toEqual([])
})

test("Logout without authorized", async() => {
    await request(app)
            .post("/logout")
            .send()
            .expect(401)
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

test("Update profile user", async() => {
    await request(app)
            .put("/user/username")
            .set("Authorization", `Bearer ${userOne.tokens[0]}`)
            .send({
                name: "Brian"
            })
            .expect(200)
    const user = await User.findById(userOneId)
    expect(user.name).toEqual("Brian")
})

test("Update invalid user fields", async() => {
    await request(app)
            .put("/user/username")
            .set("Authorization", `Bearer ${userOne.tokens[0]}`)
            .send({
                age: 23
            })
            .expect(400)
})

test("Delete an account", async() => {
    await request(app)
            .delete("/user/username")
            .set("Authorization", `Bearer ${userOne.tokens[0]}`)
            .send()
            .expect(200)

    const user = await User.findById(userOneId)
    expect(user).toBeNull()
})

test("Delete an account without authorized", async() => {
    await request(app)
            .delete("/user/username")
            .send()
            .expect(401)
})

// Avatar

test("Upload avatar", async() => {
    await request(app)
            .post("/user/username/avatar")
            .set("Authorization", `Bearer ${userOne.tokens[0]}`)
            .attach("avatar", "test/fixtures/upload.jpg")
            .expect(200)
    const user = await User.findById(userOneId)
    expect(user.avatar).toEqual(expect.any(Buffer))
    // Get avatar
    await request(app)
            .get(`/user/${userOneId}/avatar`)
            .send()
            .expect(200)
})

test("Upload large size avatar", async() => {
    await request(app)
            .post("/user/username/avatar")
            .set("Authorization", `Bearer ${userOne.tokens[0]}`)
            .attach("avatar", "test/fixtures/largeSize.jpg")
            .expect(400)
})

test("Update user's avatar", async() => {
    await request(app)
            .put("/user/username/avatar")
            .set("Authorization", `Bearer ${userOne.tokens[0]}`)
            .attach("avatar", "test/fixtures/updatePic.jpg")
            .expect(200)
})

test("Update user's avatar without authorized", async() => {
    await request(app)
            .put("/user/username/avatar")
            .attach("avatar", "test/fixtures/updatePic.jpg")
            .expect(401)
})

test("Delete user's avatar", async() => {
    await request(app)
            .delete("/user/username/avatar")
            .set("Authorization", `Bearer ${userOne.tokens[0]}`)
            .send()
            .expect(200)
})

test("Delete user's avatar without authorized", async() => {
    await request(app)
            .delete("/user/username/avatar")
            .send()
            .expect(401)
})

// Admin's permission: read all users information
test("Read all users information without admin's permission", async() => {
    await request(app)
            .get("/users")
            .set("Authorization", `Bearer ${userOne.tokens[0]}`)
            .send()
            .expect(403)
})

test("Admin reads all users information", async() => {
    const admin = await User.findById(adminId)
    expect(admin.isAdmin).toBe(true)

    await request(app)
            .get("/users")
            .set("Authorization", `Bearer ${admin.tokens[0]}`)
            .expect(200)
})





 