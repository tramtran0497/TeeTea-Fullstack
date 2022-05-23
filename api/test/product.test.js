const request = require("supertest")
const app = require("../src/app")
const supertest = request(app);
const Product = require("../src/models/Product")
const {admin, adminId, productId, product, setUpDBProduct, user, userId} = require("./fixtures/productDb")
const User = require("../src/models/User")

beforeEach(setUpDBProduct)

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
            .set("Authorization",`Bearer ${user.tokens[0]}`)
            .set('Content-Type','multipart/form-data')
            .field("name", "Product test")
            .field("type", "Lunch and Dinner")
            .field("price", [12.09])
            .field("extra", "extra1")
            .field("description", "super spicy")
            .attach("image", `${__dirname}/fixtures/upload.jpg`)
            .expect(403)
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

test("Update information of a specific product", async() => {
    const admin = await User.findById(adminId)
    expect(admin.isAdmin).toBe(true) 
    await supertest
            .put(`/product/${productId}`)
            .set("Authorization",`Bearer ${admin.tokens[0]}`)
            .set('Content-Type','multipart/form-data')
            .field("name", "updated product")
            .expect(200)
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