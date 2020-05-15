const express = require('express')
const helmet = require('helmet')

const projectsRouter = require('./projects/projects-router.js')
const resourcesRouter = require('./projects/resources-router.js')
const server = express()

server.use(helmet())
server.use(express.json())

server.use('/api/projects', projectsRouter)
server.use('/api/projects/resources', resourcesRouter)

module.exports = server;