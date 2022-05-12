const express = require("express")
const Order = require("../models/Order")
const router = new express.Router()

router.get("/orders", async(req, res) => {
    try{
        const orders = await Order.find()
        res.send(orders)
    }catch(error) {
        res.status(400).send(error.message)
    }
})

router.get("/order/:id", async(req, res) => {
    const {id} = req.params
    try{
        const order = await Order.findById(id)
        res.send(order)
    }catch(error) {
        res.status(400).send(error.message)
    }
})

router.post("/orders", async(req, res) => {
    const order = new Order(req.body)
    try{
        await order.save()
        res.send(order)
    }catch(error) {
        res.status(400).send(error.message)
    }
})

router.put("/order/:id", async(req, res) => {
    const {id} = req.params
    const updateList = Object.keys(req.body)
    const allowUpdate = ["orderId", "nameCustomer","addressPoint", "timeOrder", "timeTakeOrder", "status", "listProducts"]

    const isValidOperation = updateList.every((update) => allowUpdate.includes(update))
    if(!isValidOperation) return res.status(400).send("Invalid updates!")
    try{
        const order = await Order.findById(id)
        updateList.forEach(update => order[update] = req.body[update])
        await order.save()
        res.send(order)
    }catch(error) {
        res.status(400).send(error.message)
    }
})

router.delete("/order/:id", async(req, res) => {
    const {id} = req.params
    try{ 
        const order = await Order.findByIdAndRemove(id)
        res.send("Delete an order ")
    }catch(error) {
        res.status(400).send(error.message)
    }
})

module.exports = router