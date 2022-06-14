const request = require("supertest")
const app = require("../src/app")
const supertest = request(app)
const Event = require("../src/models/Event")
const User = require("../src/models/User")
const {eventId, event, setUpDBEvent, admin, adminId, setUpAfterDbEvent} = require("./fixtures/eventDb") 

beforeEach(setUpDBEvent)
afterEach(setUpAfterDbEvent)
    test(`should return status code 200 when read events`, async() => {
        await supertest
                .get("/events")
                .send()
                .expect(200)
    })

    test(`should return status code 200 when read specific event`, async() => {
        await supertest
                .get(`/event/${eventId}`)
                .send()
                .expect(200)
    })

    test(`should return status code 200 when create an event with Admin permission`, async() => {
        const admin = await User.findById(adminId)
        // console.log("AAAAA",admin)
        expect(admin.isAdmin).toBe(true)

        await supertest
                .post(`/events`)
                .set("Authorization",`Bearer ${admin.tokens[0]}`)
                .set('Content-Type','multipart/form-data')
                .field("title", "Event test")
                .field("firstWord", "Event first word")
                .field("description", "Event desc")
                .attach("image", `${__dirname}/fixtures/upload.jpg`)
                .expect(200)
    })

    test(`should return status code 401 when create an event without permission`, async() => {
        await supertest
                .post(`/events`)
                .set('Content-Type','multipart/form-data')
                .field("title", "Event test")
                .field("firstWord", "Event first word")
                .field("description", "Event desc")
                .attach("image", `${__dirname}/fixtures/upload.jpg`)
                .expect(401)
    })

    test("should return status code 200 when update information of a specific event with permission", async() => {
        const admin = await User.findById(adminId)
        expect(admin.isAdmin).toBe(true) 
        await supertest
                .put(`/event/${eventId}`)
                .set("Authorization",`Bearer ${admin.tokens[0]}`)
                .set('Content-Type','multipart/form-data')
                .field("title", "updated event")
                .expect(200)
    })

    test("should return status code 401 when update information of a specific event without permission", async() => {
        await supertest
                .put(`/event/${eventId}`)
                .set('Content-Type','multipart/form-data')
                .field("title", "updated event")
                .expect(401)
    })

    test("should return status code 400 when update information of a specific event invalidation", async() => {
        const admin = await User.findById(adminId)
        expect(admin.isAdmin).toBe(true) 
        await supertest
                .put(`/event/${eventId}`)
                .set("Authorization",`Bearer ${admin.tokens[0]}`)
                .set('Content-Type','multipart/form-data')
                .field("name", "updated event")
                .expect(400)
    })
    
    test("Delete a specific event by Admin", async() => {
        const admin = await User.findById(adminId)
        expect(admin.isAdmin).toBe(true) 
        await supertest
                .delete(`/event/${eventId}`)
                .set("Authorization",`Bearer ${admin.tokens[0]}`)
                .send()
                .expect(200)
    })

    test("Delete a specific event without permission", async() => {
        await supertest
                .delete(`/event/${eventId}`)
                .send()
                .expect(401)
    })

