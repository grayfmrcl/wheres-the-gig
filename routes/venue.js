const venue = require('express').Router()

const controller = require('../controllers/venues')

venue.get('/', controller.all)

module.exports = venue