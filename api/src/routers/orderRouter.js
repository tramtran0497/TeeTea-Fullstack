const express = require("express")
const Order = require("../models/Order")
const router = new express.Router()
const auth = require("../middlewares/auth")
const adminAuth = require("../middlewares/adminAuth")
const confirmNewOrder = require("../email/confirmNewOrder")

router.get("/user/orders", auth, async(req, res) => {
    try{
        await req.user.populate("orders")
        res.send(req.user.orders)
    }catch(error) {
        res.status(400).send({error: error.message})
    }
})

router.get("/user/order/:id", auth, async(req, res) => {
    const {id} = req.params
    try{
        const order = await Order.findOne({id, owner: req.user._id})
        if(!order) return res.status(404).send()
        res.send(order)
    }catch(error) {
        res.status(400).send({error: error.message})
    }
})

router.post("/user/orders", auth, async(req, res) => {
    try{
        const order = await new Order({
            ...req.body,
            owner: req.user._id,
        })
        await order.save()
        confirmNewOrder(order.orderId, req.user.name)
        res.send(order)
    }catch(error) {
        res.status(400).send({error: error.message})
    }
})

router.put("/user/order/:id", [auth, adminAuth], async(req, res) => {
    const {id} = req.params

    const updateList = Object.keys(req.body)
    const allowUpdate = ["orderId", "owner","addressPoint", "timeOrder", "timeTakeOrder", "status", "listProducts"]

    const isValidOperation = updateList.every((update) => allowUpdate.includes(update))
    if(!isValidOperation) return res.status(400).send("Invalid updates!")
    try{
        const order = await Order.findOne({id, owner: req.user._id})
        if(!order) return res.status(404).send()

        updateList.forEach(update => order[update] = req.body[update])
        await order.save()
        res.send(order)
    }catch(error) {
        res.status(400).send({error: error.message})
    }
})

router.delete("/user/order/:id", [auth, adminAuth], async(req, res) => {
    const {id} = req.params
    try{ 
        await Order.findOneAndDelete({id, owner: req.user._id})
        res.send("Deleted an order ")
    }catch(error) {
        res.status(400).send({error: error.message})
    }
})

module.exports = router