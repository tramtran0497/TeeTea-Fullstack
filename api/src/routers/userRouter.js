const express = require("express")
const User = require("../models/User")
const router = new express.Router()

router.get("/users", async(req, res) => {
    try{
        const users = await User.find()
        res.send(users)
    }catch(error) {
        res.status(400).send(error.message)
    }
})

router.get("/user/:id", async(req, res) => {
    const {id} = req.params
    try{
        const user = await User.findById(id)
        res.send(user)
    }catch(error) {
        res.status(400).send(error.message)
    }
})

router.post("/users", async(req, res) => {
    const user = new User(req.body)
    try{
        await user.save()
        res.send(user)
    }catch(error) {
        res.status(400).send(error.message)
    }
})

router.put("/user/:id", async(req, res) => {
    const {id} = req.params
    const updateList = Object.keys(req.body)
    const allowUpdate = ["name", "email", "password", "phoneNumber", "address", "DOB"]

    const isValidOperation = updateList.every((update) => allowUpdate.includes(update))
    if(!isValidOperation) return res.status(400).send("Invalid updates!")
    try{
        const user = await User.findById(id)
        updateList.forEach(update => user[update] = req.body[update])
        await user.save()
        res.send(user)
    }catch(error) {
        res.status(400).send(error.message)
    }
})

router.delete("/user/:id", async(req, res) => {
    const {id} = req.params
    try{ 
        const user = await User.findByIdAndRemove(id)
        res.send("Delete an user")
    }catch(error) {
        res.status(400).send(error.message)
    }
})

module.exports = router