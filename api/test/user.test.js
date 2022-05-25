const request = require("supertest")
const app = require("../src/app")
const supertest = request(app)
const User = require("../src/models/User")
const {userOne, userOneId, setUpDB, admin, adminId} = require("./fixtures/userDb")

beforeEach(setUpDB)

    test(`should return status code 200 when creating a new account`, async() => {
        await supertest
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

    test(`should return status code 200 when login correct account`, async() => {
        await supertest
            .post("/login")
            .send({
                email: userOne.email,
                password: userOne.password
            })
            .expect(200)
    })

    test(`should return status code 400 when login nonexistent account`, async() => {
        await supertest
            .post("/login")
            .send({
                email: userOne.email,
                password: "thewrongpassword"
            })
            .expect(400)
    })

    test(`should return status code 200 and return empty array tokens when logout`, async() => {
        await supertest
            .post("/logout")
            .set("Authorization", `Bearer ${userOne.tokens[0]}`)
            .send()
            .expect(200)
        const user = await User.findById(userOneId)
        expect(user.tokens).toEqual([])
    })

    test(`should return status code 401 when logout without authorization`, async() => {
        await supertest
            .post("/logout")
            .send()
            .expect(401)
    })

    test(`should return status code 200 with correct authorization`, async() => {
        await supertest
            .get("/user/username")
            .set("Authorization", `Bearer ${userOne.tokens[0]}`)
            .send()
            .expect(200)
    })

    test(`should return status code 401 without authorization`, async() => {
        await supertest
            .get("/user/username")
            .send()
            .expect(401)
    })

    test(`should return status code 200 with correct authorization`, async() => {
        await supertest
            .put("/user/username")
            .set("Authorization", `Bearer ${userOne.tokens[0]}`)
            .send({
                name: "Brian"
            })
            .expect(200)
        const user = await User.findById(userOneId)
        expect(user.name).toEqual("Brian")
    })

    test(`should return status code 400 when updating invalidation`, async() => {
        await supertest
            .put("/user/username")
            .set("Authorization", `Bearer ${userOne.tokens[0]}`)
            .send({
                age: 23
            })
            .expect(400)
    })

    test(`should return status code 401 without authorization`, async() => {
        await supertest
            .put("/user/username")
            .send({
                name: "Brian"
            })
            .expect(401)
    })

    test(`should return status code 200 with correct authorization`, async() => {
        await supertest
            .delete("/user/username")
            .set("Authorization", `Bearer ${userOne.tokens[0]}`)
            .send()
            .expect(200)

        const user = await User.findById(userOneId)
        expect(user).toBeNull()
    })

    test(`should return status code 401 without authorization`, async() => {
        await supertest
            .delete("/user/username")
            .send()
            .expect(401)
    })

    test(`should return status code 200 with correct authorization`, async() => {
        await supertest
            .post("/user/username/avatar")
            .set("Authorization", `Bearer ${userOne.tokens[0]}`)
            .attach("avatar", "test/fixtures/upload.jpg")
            .expect(200)
        const user = await User.findById(userOneId)
        expect(user.avatar).toEqual(expect.any(Buffer))
    })

    test(`should return status code 401 without authorization`, async() => {
        await supertest
            .post("/user/username/avatar")
            .attach("avatar", "test/fixtures/upload.jpg")
            .expect(401)
    })

    test(`should return status code 400 when uploading a large size image`, async() => {
        await supertest
            .post("/user/username/avatar")
            .set("Authorization", `Bearer ${userOne.tokens[0]}`)
            .attach("avatar", "test/fixtures/largeSize.jpg")
            .expect(400)
    })

    test(`should return status code 200 with correct authorization`, async() => {
        await supertest
            .put("/user/username/avatar")
            .set("Authorization", `Bearer ${userOne.tokens[0]}`)
            .attach("avatar", "test/fixtures/updatePic.jpg")
            .expect(200)
    })

    test(`should return status code 401 without authorization`, async() => {
        await supertest
            .put("/user/username/avatar")
            .attach("avatar", "test/fixtures/updatePic.jpg")
            .expect(401)
    })

    test(`should return status code 200 with correct authorization`, async() => {
        await supertest
            .delete("/user/username/avatar")
            .set("Authorization", `Bearer ${userOne.tokens[0]}`)
            .send()
            .expect(200)
    })

    test(`should return status code 401 without authorization`, async() => {
        await supertest
            .delete("/user/username/avatar")
            .send()
            .expect(401)
    })

    test(`should return status code 200 with Admin authorization`, async() => {
        const admin = await User.findById(adminId)
        expect(admin.isAdmin).toBe(true)

        await supertest
            .get("/users")
            .set("Authorization", `Bearer ${admin.tokens[0]}`)
            .expect(200)
    })

    test(`should return status code 401 without authorization`, async() => {
        await supertest
            .get("/users")
            .send()
            .expect(401)
    })
