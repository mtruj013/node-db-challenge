const express = require('express')

const Projects = require('./projects-model.js')

const router = express.Router();

router.get('/:id', (req, res) => {
    const id = req.params.id

    Projects.getTasks(id)
        .then(tasks => {
            if (tasks.length) {
                res.json(tasks)
            } else {
                res.status(404)
                .json({message:"Unable to find tasks for this id"})
            }
        })
        .catch(err => {
            res.status(500)
                .json({ message: "Unable to get tasks" })
        })
})

router.post('/', (req,res) =>{
    

    const taskBody = req.body;
            Projects.addTask(taskBody)
            .then(task => {
                res.status(201)
                .json(task)
            })
            .catch(err => {
                console.log(err)
            })
       
})

module.exports = router;