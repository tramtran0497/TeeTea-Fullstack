const express = require("express")
const Product = require("../models/Product")
const router = new express.Router()

router.get("/products", async(req, res) => {
    try{
        const products = await Product.find()
        res.send(products)
    }catch(error) {
        res.status(400).send(error.message)
    }
})

router.get("/product/:id", async(req, res) => {
    const {id} = req.params
    try{
        const product = await Product.findById(id)
        res.send(product)
    }catch(error) {
        res.status(400).send(error.message)
    }
})

router.post("/products", async(req, res) => {
    const product = new Product(req.body)
    try{
        await product.save()
        res.send(product)
    }catch(error) {
        res.status(400).send(error.message)
    }
})

router.put("/product/:id", async(req, res) => {
    const {id} = req.params
    const updateList = Object.keys(req.body)
    const allowUpdate = ["name", "type", "size", "price", "extra", "description", "ingredients"]

    const isValidOperation = updateList.every((update) => allowUpdate.includes(update))
    if(!isValidOperation) return res.status(400).send("Invalid updates!")
    try{
        const product = await Product.findById(id)
        updateList.forEach(update => product[update] = req.body[update])
        await product.save()
        res.send(product)
    }catch(error) {
        res.status(400).send(error.message)
    }
})

router.delete("/product/:id", async(req, res) => {
    const {id} = req.params
    try{ 
        const product = await Product.findByIdAndRemove(id)
        res.send("Delete a product")
    }catch(error) {
        res.status(400).send(error.message)
    }
})

module.exports = router