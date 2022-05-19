const express = require("express")
const Event = require("../models/Event")
const router = new express.Router()
const auth = require("../middlewares/auth")
const adminAuth = require("../middlewares/adminAuth")
const cloudinary = require("../utils/cloudinary")
const upload = require("../utils/multer")

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

router.post("/events", [auth, adminAuth], upload.single("image"), async(req, res) => {
    try{
         // Upload image to cloudinary
         const result = await cloudinary.uploader.upload(req.file.path)
         const event = new Event({
             ...req.body,
             image: result.secure_url,
             cloudinary_id: result.public_id,
         })
        await event.save()
        res.send(event)
    }catch(error) {
        res.status(400).send(error.message)
    }
})

router.put("/event/:id", [auth, adminAuth], upload.single("image"), async(req, res) => {
    const {id} = req.params
    const updateList = Object.keys(req.body)
    const allowUpdate = ["title", "firstWord","description"]

    const isValidOperation = updateList.every((update) => allowUpdate.includes(update))
    if(!isValidOperation) return res.status(400).send("Invalid updates!")
    try{
        let event = await Event.findById(id)
        // delete the previous image in cloudinary
        await cloudinary.uploader.destroy(event.cloudinary_id)

        let result;
        if (req.file) {
          result = await cloudinary.uploader.upload(req.file.path)
        }

        const changedEvent = {
            title: req.body.title || event.title,
            firstWord: req.body.firstWord || event.firstWord,
            description: req.body.description || event.description,
            image: result?.secure_url || event.image,
            cloudinary_id: result?.public_id || event.cloudinary_id,
        } 
        event = await Event.findByIdAndUpdate(req.params.id, changedEvent, { new: true })
        await event.save()
        res.send(event)
    }catch(error) {
        res.status(400).send(error.message)
    }
})

router.delete("/event/:id", [auth, adminAuth], async(req, res) => {
    const {id} = req.params
    try{ 
        const event = await Event.findById(id)
         // Delete image from cloudinary
        await cloudinary.uploader.destroy(event.cloudinary_id)
        // Delete user from db
        await event.remove()
        res.send("Delete an event")
    }catch(error) {
        res.status(400).send(error.message)
    }
})

module.exports = router