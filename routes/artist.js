const artist = require('express').Router()

const controller = require('../controllers/artists')

artist.get('/', controller.all)
artist.get('/add', controller.create.get)
artist.post('/add', controller.create.post)
artist.get('/edit/:id', controller.update.get)
artist.post('/edit/:id', controller.update.post)
artist.get('/delete/:id', controller.remove.get)
artist.post('/delete/:id', controller.remove.post)

module.exports = artist