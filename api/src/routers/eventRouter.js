const express = require("express")
const Event = require("../models/Event")
const router = new express.Router()


// TO-DO: create Admin auth to create, change and delete events 

router.get("/events", async(req, res) => {
    try{
        const events = await Event.find()
        res.send(events)
    }catch(error) {
        res.status(400).send(error.message)
    }
})

router.get("/event/:id", async(req, res) => {
    const {id} = req.params
    try{
        const event = await Event.findById(id)
        res.send(event)
    }catch(error) {
        res.status(400).send(error.message)
    }
})
// Admin
router.post("/events", async(req, res) => {
    const event = new Event(req.body)
    try{
        await event.save()
        res.send(event)
    }catch(error) {
        res.status(400).send(error.message)
    }
})
// Admin
router.put("/event/:id", async(req, res) => {
    const {id} = req.params
    const updateList = Object.keys(req.body)
    const allowUpdate = ["title", "firstWord","description"]

    const isValidOperation = updateList.every((update) => allowUpdate.includes(update))
    if(!isValidOperation) return res.status(400).send("Invalid updates!")
    try{
        const event = await Event.findById(id)
        updateList.forEach(update => event[update] = req.body[update])
        await event.save()
        res.send(event)
    }catch(error) {
        res.status(400).send(error.message)
    }
})
// Admin
router.delete("/event/:id", async(req, res) => {
    const {id} = req.params
    try{ 
        const event = await Event.findByIdAndRemove(id)
        res.send("Delete an event")
    }catch(error) {
        res.status(400).send(error.message)
    }
})

module.exports = router