const { Router } = require('express')
const ensureAuthenticated = require("../middleware/ensureAuthenticadted")

const TagsController = require('../controllers/TagsController')

const tagsRoutes = Router()

const tagsController = new TagsController()

tagsRoutes.get('/', ensureAuthenticated, tagsController.index)

module.exports = tagsRoutes
