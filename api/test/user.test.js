const request = require("supertest")
const app = require("../src/app")
const User = require("../src/models/User")
const {userOne, userOneId, admin, adminId, setUpDB} = require("./fixtures/userDb")

beforeEach(setUpDB)

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
test("Read all users information with user account", async() => {
    const userOne = await User.findById(userOneId)
    expect(userOne.isAdmin).toEqual(undefined)

    await request(app)
            .get("/users")
            .set("Authorization", `Bearer ${userOne.tokens[0]}`)
            .send()
            .expect(403)
})

test("Reads all users information with admin account", async() => {
    const admin = await User.findById(adminId)
    expect(admin.isAdmin).toBe(true)

    await request(app)
            .get("/users")
            .set("Authorization", `Bearer ${admin.tokens[0]}`)
            .expect(200)
})