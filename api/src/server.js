const express = require("express")
require("./db/mongoose")
const port = process.env.PORT || 5001
const productRouter = require("./routers/productRouter")
const eventRouter = require("./routers/eventRouter")
const jobRouter = require("./routers/jobRouter")
const newsRouter = require("./routers/newsRouter")
const orderRouter = require("./routers/orderRouter")
const userRouter = require("./routers/userRouter")
const app = express()
app.use(express.json())

app.use(productRouter)
app.use(eventRouter)
app.use(jobRouter)
app.use(newsRouter)
app.use(orderRouter)
app.use(userRouter)

app.listen(port, () => {
    console.log("Server is up on " + port)
})