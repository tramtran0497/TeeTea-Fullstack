const express = require("express")
const Job = require("../models/Job")
const router = new express.Router()
const auth = require("../middlewares/auth")
const adminAuth = require("../middlewares/adminAuth")
const cloudinary = require("../utils/cloudinary")
const upload = require("../utils/multer")

router.get("/jobs", async(req, res) => {
    try{
        const jobs = await Job.find()
        res.send(jobs)
    }catch(error) {
        res.status(400).send(error.message)
    }
})

router.get("/job/:id", async(req, res) => {
    const {id} = req.params
    try{
        const jobs = await Job.findById(id)
        res.send(jobs)
    }catch(error) {
        res.status(400).send(error.message)
    }
})

router.post("/jobs", [auth, adminAuth], upload.single("image"), async(req, res) => {
    try{
        // Upload image to cloudinary
        const result = await cloudinary.uploader.upload(req.file.path)
        const job = new Job({
            ...req.body,
            image: result.secure_url,
            cloudinary_id: result.public_id,
        })
        await job.save()
        res.send(job)
    }catch(error) {
        res.status(400).send(error.message)
    }
})

router.put("/job/:id", [auth, adminAuth], upload.single("image"), async(req, res) => {
    const {id} = req.params
    const updateList = Object.keys(req.body)
    const allowUpdate = ["title", "quantity","description"]

    const isValidOperation = updateList.every((update) => allowUpdate.includes(update))
    if(!isValidOperation) return res.status(400).send("Invalid updates!")
    try{
        let job = await Job.findById(id)
        // delete the previous image in cloudinary
        await cloudinary.uploader.destroy(job.cloudinary_id)

        let result;
        if (req.file) {
        result = await cloudinary.uploader.upload(req.file.path)
        }

        const changedJob = {
            title: req.body.title || job.title,
            quantity: req.body.quantity || job.quantity,
            description: req.body.description || job.description,
            image: result?.secure_url || job.image,
            cloudinary_id: result?.public_id || job.cloudinary_id,
        } 
        job = await Job.findByIdAndUpdate(req.params.id, changedJob, { new: true })
        await job.save()
        res.send(job)
    }catch(error) {
        res.status(400).send(error.message)
    }
})

router.delete("/job/:id", [auth, adminAuth], async(req, res) => {
    const {id} = req.params
    try{ 
        const job = await Job.findById(id)
        await cloudinary.uploader.destroy(job.cloudinary_id)
        await job.remove()
        res.send("Delete a job ")
    }catch(error) {
        res.status(400).send(error.message)
    }
})

module.exports = router