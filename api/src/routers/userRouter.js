const express = require("express")
const User = require("../models/User")
const router = new express.Router()
const auth = require("../middlewares/auth")
const sendWelcomeNewbie = require("../email/welcomeNewbie")

// I did not place auth and adminAuth yet!! 
router.get("/users", async(req, res) => {
    try{
        const users = await User.find({})
        res.send(users)
    }catch(error) {
        res.status(400).send({error: error.message})
    }
})

router.get("/user/username", auth, async(req, res) => {
    try{
        const user = await User.findOne(req.user._id)
        res.send(user)
    }catch(error) {
        res.status(400).send({error: error.message})
    }
})

router.post("/users", async(req, res) => {
    const user = new User(req.body)
    try{
        await user.save()
        sendWelcomeNewbie(user.email, user.name)
       
        res.send(user)
    }catch(error) {
        res.status(400).send({error: error.message})
    }
})

router.post("/login", async(req,res) => {
    const {password, email} = req.body
    try{
        // from findByCredentials() return user 
        const user = await User.findByCredentials(email, password)
        // create token
        const token = await user.createAuthToken()
        res.send({user, token})
    } catch(error) {
        res.status(400).send({error: error.message})
    }
})

router.post("/logout", auth, async(req, res) => {
    try{
        req.user.tokens = []
        await req.user.save()
        res.send("Log out")
    } catch(error) {
        res.status(400).send({error: error.message})
    }
});

router.put("/user/username", auth, async(req, res) => {
    const updateList = Object.keys(req.body)
    const allowUpdate = ["name", "email", "password", "phoneNumber", "address", "DOB"]

    const isValidOperation = updateList.every((update) => allowUpdate.includes(update))
    if(!isValidOperation) return res.status(400).send("Invalid updates!")
    try{
        updateList.forEach(update => req.user[update] = req.body[update])
        await req.user.save()
        res.send(req.user)
    }catch(error) {
        res.status(400).send({error: error.message})
    }
})

router.delete("/user/username", auth, async(req, res) => {
    try{ 
        await User.findByIdAndDelete(req.user._id)
        res.send("Successful deleted!")
    }catch(error) {
        res.status(400).send({error: error.message})
    }
})


module.exports = router