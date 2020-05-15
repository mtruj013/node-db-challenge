const express = require('express')
const helmet = require('helmet')

const projectsRouter = require('./projects/projects-router.js')
const resourcesRouter = require('./projects/resources-router.js')
const tasksRouter = require('./projects/tasks-router.js')

const server = express()

server.use(helmet())
server.use(express.json())

server.use('/api/projects', projectsRouter)
server.use('/api/projects/resources', resourcesRouter)
server.use('/api/projects/tasks', tasksRouter)

module.exports = server;