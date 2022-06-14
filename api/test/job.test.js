const request = require("supertest")
const app = require("../src/app")
const supertest = request(app)
const Job = require("../src/models/Job")
const User = require("../src/models/User")
const {jobId, job, setUpDBJob, admin, adminId, setUpAfterDbJob} = require("./fixtures/jobDb") 

beforeEach(setUpDBJob)
afterEach(setUpAfterDbJob)

    test(`should return status code 200 when read jobs`, async() => {
        await supertest
                .get("/jobs")
                .send()
                .expect(200)
    })

    test(`should return status code 200 when read the specific job`, async() => {
        await supertest
                .get(`/job/${jobId}`)
                .send()
                .expect(200)
    })

    test(`should return status code 200 when create a job with Admin permission`, async() => {
        const admin = await User.findById(adminId)
        expect(admin.isAdmin).toBe(true)
        console.log("Admin", admin)
        await supertest
                .post(`/jobs`)
                .set("Authorization",`Bearer ${admin.tokens[0]}`)
                .set('Content-Type','multipart/form-data')
                .field("title", "Job test")
                .field("quantity", 3)
                .field("description", "Job desc")
                .attach("image", `${__dirname}/fixtures/upload.jpg`)
                .expect(200)
    })

    test(`should return status code 401 when create a job without permission`, async() => {
        await supertest
                .post(`/jobs`)
                .set('Content-Type','multipart/form-data')
                .field("title", "Job test")
                .field("quantity", 3)
                .field("description", "Job desc")
                .attach("image", `${__dirname}/fixtures/upload.jpg`)
                .expect(401)
    })

    test("should return status code 200 when update information of a specific job with permission", async() => {
        const admin = await User.findById(adminId)
        expect(admin.isAdmin).toBe(true) 
        await supertest
                .put(`/job/${jobId}`)
                .set("Authorization",`Bearer ${admin.tokens[0]}`)
                .set('Content-Type','multipart/form-data')
                .field("title", "updated job")
                .expect(200)
    })

    test("should return status code 401 when update information of a specific job without permission", async() => {
        await supertest
                .put(`/job/${jobId}`)   
                .set('Content-Type','multipart/form-data')
                .field("title", "updated job")
                .expect(401)
    })

    test("should return status code 400 when update information of a specific job invalidation", async() => {
        const admin = await User.findById(adminId)
        expect(admin.isAdmin).toBe(true) 
        await supertest
                .put(`/job/${jobId}`)
                .set("Authorization",`Bearer ${admin.tokens[0]}`)
                .set('Content-Type','multipart/form-data')
                .field("name", "updated event")
                .expect(400)
    })
    
    test("should return 200 when delete a specific job by Admin", async() => {
        const admin = await User.findById(adminId)
        expect(admin.isAdmin).toBe(true) 
        await supertest
                .delete(`/job/${jobId}`)
                .set("Authorization",`Bearer ${admin.tokens[0]}`)
                .send()
                .expect(200)
    })

    test("should return 401 when delete a specific event without permission", async() => {
        await supertest
                .delete(`/job/${jobId}`)
                .send()
                .expect(401)
    })
