const artists = require('express').Router()

const controller = require('../controllers/artists')

artists.get('/', controller.all)
artists.get('/add', controller.create.get)
artists.post('/add', controller.create.post)
artists.get('/edit/:id', controller.update.get)
artists.post('/edit/:id', controller.update.post)
artists.get('/delete/:id', controller.remove.get)
artists.post('/delete/:id', controller.remove.post)

module.exports = artists