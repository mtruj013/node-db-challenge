const express = require('express')

const Projects = require('./projects-model.js')

const router = express.Router();

router.get('/', (req,res) => {
    Projects.getResources()
    .then(resources => {
        res.json(resources)
    })
    .catch(err => {
        res.status(500)
        .json({ message: "Unable to get resource" })
    })
})

router.post('/', (req,res) => {
    Projects.addResource(req.body)
    .then(resource => {
        res.status(201)
        .json(resource)
    })
    .catch(err => {
        res.status(500)
        .json({ message: "unable to add resource"})
    })
})

module.exports = router;