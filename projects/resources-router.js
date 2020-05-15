const express = require('express')

const Projects = require('./projects-model.js')

const router = express.Router();

router.get('/resources', (req,res) => {
    Projects.getResources()
    .then(resources => {
        res.json(resources)
    })
    .catch(err => {
        res.status(500)
        .json({ message: "Unable to get resource" })
    })
})

module.exports = router;