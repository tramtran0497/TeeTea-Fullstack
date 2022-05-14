const express = require("express")
const News = require("../models/News")
const router = new express.Router()
const auth = require("../middlewares/auth")
const adminAuth = require("../middlewares/adminAuth")

router.get("/news", async(req, res) => {
    try{
        const news = await News.find()
        res.send(news)
    }catch(error) {
        res.status(400).send(error.message)
    }
})

router.get("/news/:id", async(req, res) => {
    const {id} = req.params
    try{
        const news = await News.findById(id)
        res.send(news)
    }catch(error) {
        res.status(400).send(error.message)
    }
})

router.post("/news",[auth, adminAuth], async(req, res) => {
    const news = new News(req.body)
    try{
        await news.save()
        res.send(news)
    }catch(error) {
        res.status(400).send(error.message)
    }
})

router.put("/news/:id", [auth, adminAuth], async(req, res) => {
    const {id} = req.params
    const updateList = Object.keys(req.body)
    const allowUpdate = ["title", "subtitle"]

    const isValidOperation = updateList.every((update) => allowUpdate.includes(update))
    if(!isValidOperation) return res.status(400).send("Invalid updates!")
    try{
        const news = await News.findById(id)
        updateList.forEach(update => news[update] = req.body[update])
        await news.save()
        res.send(news)
    }catch(error) {
        res.status(400).send(error.message)
    }
})

router.delete("/news/:id", [auth, adminAuth], async(req, res) => {
    const {id} = req.params
    try{ 
        const news = await News.findByIdAndRemove(id)
        res.send("Delete news")
    }catch(error) {
        res.status(400).send(error.message)
    }
})

module.exports = router