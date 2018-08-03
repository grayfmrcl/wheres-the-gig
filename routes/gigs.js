const gigs = require('express').Router()

const controller = require('../controllers/gigs')
const authorize = require('./authorize')

gigs.get('/', controller.all.get)
gigs.get('/add', authorize, controller.create.get)
gigs.post('/add', authorize, controller.create.post)
gigs.get('/:id/edit', authorize, controller.update.get)
gigs.post('/:id/edit', authorize, controller.update.post)
gigs.get('/:id/delete', authorize, controller.remove.get)
gigs.post('/:id/delete', authorize, controller.remove.post)

module.exports = gigs