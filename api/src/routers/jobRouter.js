const express = require("express")
const Job = require("../models/Job")
const router = new express.Router()

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

router.post("/jobs", async(req, res) => {
    const job = new Job(req.body)
    try{
        await job.save()
        res.send(job)
    }catch(error) {
        res.status(400).send(error.message)
    }
})

router.put("/job/:id", async(req, res) => {
    const {id} = req.params
    const updateList = Object.keys(req.body)
    const allowUpdate = ["title", "quantity","description"]

    const isValidOperation = updateList.every((update) => allowUpdate.includes(update))
    if(!isValidOperation) return res.status(400).send("Invalid updates!")
    try{
        const job = await Job.findById(id)
        updateList.forEach(update => job[update] = req.body[update])
        await job.save()
        res.send(job)
    }catch(error) {
        res.status(400).send(error.message)
    }
})

router.delete("/job/:id", async(req, res) => {
    const {id} = req.params
    try{ 
        const job = await Job.findByIdAndRemove(id)
        res.send("Delete a job ")
    }catch(error) {
        res.status(400).send(error.message)
    }
})

module.exports = router