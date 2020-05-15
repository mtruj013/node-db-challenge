const express = require('express')

const Projects = require('./projects-model.js')

const router = express.Router();

router.get('/', (req,res) => {
    Projects.getProjects()
    .then(projects => {
        res.json(projects)
    })
    .catch(err => {
        res.status(500)
        .json({ message: "Unable to get projects"})
    })
})

router.post('/', (req,res) => {

    Projects.addProject(req.body)
    .then(project => {
        res.status(201)
        .json(project)
    })
    .catch(err => {
        res.status(500)
        .json({message: "Unable to add project"})
    })
})

module.exports = router;