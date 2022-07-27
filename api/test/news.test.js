const request = require("supertest");
const app = require("../src/app");
const supertest = request(app);
const News = require("../src/models/News");
const User = require("../src/models/User");
const {
  newsId,
  news,
  setUpDBNews,
  admin,
  adminId,
  setUpAfterDbNews,
} = require("./fixtures/newsDb");

beforeEach(setUpDBNews);
afterEach(setUpAfterDbNews);

test(`should return status code 200 when read news`, async () => {
  await supertest.get("/news").send().expect(200);
});

test(`should return status code 200 when read the specific news`, async () => {
  await supertest.get(`/news/${newsId}`).send().expect(200);
});

test(`should return status code 200 when create a news with Admin permission`, async () => {
  const admin = await User.findById(adminId);
  expect(admin.isAdmin).toBe(true);
  // console.log("Admin", admin)
  await supertest
    .post(`/news`)
    .set("Authorization", `Bearer ${admin.tokens[0]}`)
    .set("Content-Type", "multipart/form-data")
    .field("title", "News test")
    .field("subtitle", "News sub")
    .attach("image", `${__dirname}/fixtures/upload.jpg`)
    .expect(200);
});

test(`should return status code 401 when create a news without permission`, async () => {
  await supertest
    .post(`/news`)
    .set("Content-Type", "multipart/form-data")
    .field("title", "News test")
    .field("subtitle", "News sub")
    .attach("image", `${__dirname}/fixtures/upload.jpg`)
    .expect(401);
});

test("should return status code 200 when update information of a specific news with permission", async () => {
  const admin = await User.findById(adminId);
  expect(admin.isAdmin).toBe(true);
  await supertest
    .put(`/news/${newsId}`)
    .set("Authorization", `Bearer ${admin.tokens[0]}`)
    .set("Content-Type", "multipart/form-data")
    .field("title", "updated news")
    .expect(200);
});

test("should return status code 401 when update information of a specific event without permission", async () => {
  await supertest
    .put(`/news/${newsId}`)
    .set("Content-Type", "multipart/form-data")
    .field("title", "updated news")
    .expect(401);
});

test("should return status code 400 when update information of a specific news invalidation", async () => {
  const admin = await User.findById(adminId);
  expect(admin.isAdmin).toBe(true);
  await supertest
    .put(`/news/${newsId}`)
    .set("Authorization", `Bearer ${admin.tokens[0]}`)
    .set("Content-Type", "multipart/form-data")
    .field("name", "updated news")
    .expect(400);
});

test("should return 200 when delete a specific news by Admin", async () => {
  const admin = await User.findById(adminId);
  expect(admin.isAdmin).toBe(true);
  await supertest
    .delete(`/news/${newsId}`)
    .set("Authorization", `Bearer ${admin.tokens[0]}`)
    .send()
    .expect(200);
});

test("should return 401 when delete a specific event without permission", async () => {
  await supertest.delete(`/news/${newsId}`).send().expect(401);
});
