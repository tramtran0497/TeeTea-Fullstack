const express = require("express");
require("./db/mongoose");
const productRouter = require("./routers/productRouter");
const eventRouter = require("./routers/eventRouter");
const jobRouter = require("./routers/jobRouter");
const newsRouter = require("./routers/newsRouter");
const orderRouter = require("./routers/orderRouter");
const userRouter = require("./routers/userRouter");

const app = express();
// Middleware
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});
app.use(express.json());

app.use(productRouter);
app.use(eventRouter);
app.use(jobRouter);
app.use(newsRouter);
app.use(orderRouter);
app.use(userRouter);

module.exports = app;
