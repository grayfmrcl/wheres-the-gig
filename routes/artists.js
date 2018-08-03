const artists = require('express').Router()

const controller = require('../controllers/artists')

artists.get('/', controller.all)
artists.get('/add', controller.create.get)
artists.post('/add', controller.create.post)
artists.get('/:id/edit', controller.update.get)
artists.post('/:id/edit', controller.update.post)
artists.get('/:id/delete', controller.remove.get)
artists.post('/:id/delete', controller.remove.post)

module.exports = artists