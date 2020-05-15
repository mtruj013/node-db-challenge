const express = require('express')

const Projects = require('./projects-model.js')

const router = express.Router();

router.get('/', (req, res) => {
    // const id = req.params.id

    // Projects.getTasks(id)
    //     .then(tasks => {
    //         if (tasks.length) {
    //             res.json(tasks)
    //         } else {
    //             res.status(404)
    //             .json({message:"Unable to find tasks for this id"})
    //         }
    //     })
    //     .catch(err => {
    //         res.status(500)
    //         console.log(err)
    //             .json({ message: "Unable to get tasks" })
    //     })

    Projects.getTasks()
    .then(tasks => {
        res.json(tasks)
    })
    .catch(err => {
        res.status(500)
        .json({ message: "Unable to get tasks" })
    })
})

module.exports = router;