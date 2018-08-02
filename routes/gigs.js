const gigs = require('express').Router()

const controller = require('../controllers/gigs')

gigs.get('/', controller.all.get)
gigs.post('/', controller.all.post)
gigs.get('/add', controller.create.get)
gigs.post('/add', controller.create.post)
gigs.get('/:id/edit', controller.update.get)
gigs.post('/:id/edit', controller.update.post)
gigs.get('/:id/delete', controller.remove.get)
gigs.post('/:id/delete', controller.remove.post)

module.exports = gigs