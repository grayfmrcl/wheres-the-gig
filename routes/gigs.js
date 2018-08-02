const gigs = require('express').Router()

const controller = require('../controllers/gigs')

gigs.get('/', controller.all)
gigs.get('/add', controller.create.get)
gigs.post('/add', controller.create.post)
gigs.get('/edit/:id', controller.update.get)
gigs.post('/edit/:id', controller.update.post)
gigs.get('/delete/:id', controller.remove.get)
gigs.post('/delete/:id', controller.remove.post)

module.exports = gigs