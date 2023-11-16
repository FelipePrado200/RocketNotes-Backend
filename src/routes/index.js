const { Router } = require('express')

const usersRoutes = require('./users.routes')
const notesRoutes = require('./notes.routes')
const tagsRoutes = require('./tags.routes')
const sessionRouter = require('./sessions.routes')


const routes = Router()
routes.use('/users', usersRoutes)
routes.use('/notes', notesRoutes)
routes.use('/tags', tagsRoutes)

routes.use('/session', sessionRouter)



module.exports = routes
