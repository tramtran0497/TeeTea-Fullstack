const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const News = require("../../src/models/News");
const User = require("../../src/models/User");

// create an admin for testing
const adminId = new mongoose.Types.ObjectId();
const admin = {
  _id: adminId,
  name: "Tram Admin News",
  email: "tram.adminnews@gmail.com",
  phoneNumber: "0413749679",
  address: "Mariankatu 6B",
  password: "tramadminnews",
  DOB: "12/12/1962",
  isAdmin: true,
  tokens: [
    jwt.sign({ id: adminId, isAdmin: this.isAdmin }, process.env.SECRET, {
      expiresIn: "3 days",
    }),
  ],
};

const newsId = new mongoose.Types.ObjectId();
const news = {
  _id: newsId,
  title: "News sample",
  subtitle: "subtitle sample",
};

const setUpDBNews = async () => {
  await new News(news).save();
  await new User(admin).save();
  jest.setTimeout(90 * 1000);
};

const setUpAfterDbNews = async () => {
  await News.deleteMany();
  await User.deleteMany();
};

module.exports = {
  news,
  newsId,
  admin,
  adminId,
  setUpDBNews,
  setUpAfterDbNews,
};
