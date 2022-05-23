const express = require("express")
const Product = require("../models/Product")
const router = new express.Router()
const auth = require("../middlewares/auth")
const adminAuth = require("../middlewares/adminAuth")
const multer = require('multer')
const sharp = require("sharp")
const cloudinary = require("../utils/cloudinary")
const upload = require("../utils/multer")

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
router.post("/products", [auth, adminAuth], upload.single("image"), async(req, res) => {
    try{
        // Upload image to cloudinary
        const result = await cloudinary.uploader.upload(req.file.path)
        const product = new Product({
            ...req.body,
            image: result.secure_url,
            cloudinary_id: result.public_id,
        })
        await product.save()
        res.send(product)
    }catch(error) {
        res.status(400).send(error.message)
    }
})

router.put("/product/:id", [auth, adminAuth], upload.single("image"), async(req, res) => {
    const {id} = req.params
    const updateList = Object.keys(req.body)
    const allowUpdate = ["name", "type", "size", "price", "extra", "description", "ingredients", "image"]

    const isValidOperation = updateList.every((update) => allowUpdate.includes(update))
    if(!isValidOperation) return res.status(400).send("Invalid updates!")
    try{
        let product = await Product.findById(id)
        // delete the previous image in cloudinary
        if(product.cloudinary_id){
            await cloudinary.uploader.destroy(product.cloudinary_id)
        }
        let result;
        if (req.file) {
          result = await cloudinary.uploader.upload(req.file.path)
        }

        const changedProduct = {
            name: req.body.name || product.name,
            type: req.body.type || product.type,
            size: req.body.size || product.size,
            price: req.body.price || product.price,
            extra: req.body.extra || product.extra,
            description: req.body.description || product.description,
            ingredients: req.body.ingredients || product.ingredients,
            image: result?.secure_url || product.image,
            cloudinary_id: result?.public_id || product.cloudinary_id,
        } 

        product = await Product.findByIdAndUpdate(req.params.id, changedProduct, { new: true })
        await product.save()
        res.send(product)
    }catch(error) {
        res.status(400).send(error.message)
    }
})

router.delete("/product/:id", [auth, adminAuth], async(req, res) => {
    const {id} = req.params
    try{ 
        const product = await Product.findById(id)
        // Delete image from cloudinary
        if(product.cloudinary_id){
            await cloudinary.uploader.destroy(product.cloudinary_id)
        }
        // Delete user from db
        await product.remove()
        res.send("Delete a product")
    }catch(error) {
        res.status(400).send(error.message)
    }
})

module.exports = router