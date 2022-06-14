const request = require("supertest")
const app = require("../src/app")
const supertest = request(app)
const {admin, adminId, productId, product, setUpDBProduct, setUpAfterDbProduct} = require("./fixtures/productDb")
const User = require("../src/models/User")
const Product = require("../src/models/Product")

beforeEach(setUpDBProduct)
afterEach(setUpAfterDbProduct)

        test("Create a product by Admin account", async() => {
        const admin = await User.findById(adminId)
        expect(admin.isAdmin).toBe(true)

        await supertest
                .post("/products")
                .set("Authorization",`Bearer ${admin.tokens[0]}`)
                .set('Content-Type','multipart/form-data')
                .field("name", "Product test")
                .field("type", "Lunch and Dinner")
                .field("price", [12.09])
                .field("extra", "extra1")
                .field("description", "super spicy")
                .attach("image", `${__dirname}/fixtures/upload.jpg`)
                .expect(200)
        })

        test("Create a product without admin's right", async() => {
                await supertest
                .post("/products")
                .set('Content-Type','multipart/form-data')
                .field("name", "Product test")
                .field("type", "Lunch and Dinner")
                .field("price", [12.09])
                .field("extra", "extra1")
                .field("description", "super spicy")
                .attach("image", `${__dirname}/fixtures/upload.jpg`)
                .expect(401)
        })

        test("Read all and each product's information", async() => {
        await supertest
                .get(`/product/${productId}`)
                .send()
                .expect(200)

        await supertest
                .get("/products")
                .send()
                .expect(200)
        })

        test("should return status code 200 when update information of a specific product with permission", async() => {
        const admin = await User.findById(adminId)
        expect(admin.isAdmin).toBe(true) 
        await supertest
                .put(`/product/${productId}`)
                .set("Authorization",`Bearer ${admin.tokens[0]}`)
                .set('Content-Type','multipart/form-data')
                .field("name", "updated product")
                .expect(200)
        })

        test("should return status code 401 when update information of a specific product without permission", async() => {
                await supertest
                        .put(`/product/${productId}`)
                        .set('Content-Type','multipart/form-data')
                        .field("name", "updated product")
                        .expect(401)
        })

        test("should return status code 400 when update information of a specific product invalidation", async() => {
                const admin = await User.findById(adminId)
                expect(admin.isAdmin).toBe(true) 
                await supertest
                        .put(`/product/${productId}`)
                        .set("Authorization",`Bearer ${admin.tokens[0]}`)
                        .set('Content-Type','multipart/form-data')
                        .field("title", "updated product")
                        .expect(400)
        })
    
        test("Delete a specific product by Admin", async() => {
                const admin = await User.findById(adminId)
                expect(admin.isAdmin).toBe(true) 
                await supertest
                        .delete(`/product/${productId}`)
                        .set("Authorization",`Bearer ${admin.tokens[0]}`)
                        .send()
                        .expect(200)
        })

        test("Delete a specific product without permission", async() => {
                await supertest
                        .delete(`/product/${productId}`)
                        .send()
                        .expect(401)
        })

