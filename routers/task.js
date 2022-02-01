const express = require('express')
const myCity = require('../models/task')
// const auth = require('../middleware/auth')
const router = new express.Router()


router.post('/tasks',  async (req, res) => {
    const state = new myCity({
        indianCitiesDatabase
    })

    try {
        await myCity.save()
        res.status(201).send(task)
    } catch (e) {
        res.status(400).send(e)
    }
})




router.get('/tasks', async (req, res) => {
   

    
    try {
        await req.user.populate({
            path: 'tasks',
           
        }).execPopulate()
        // res.send(req.user.tasks)
    } catch (e) {
        res.status(500).send()
    }
})




module.exports = router