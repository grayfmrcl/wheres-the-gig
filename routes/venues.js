const venues = require('express').Router()

const controller = require('../controllers/venues')

venues.get('/', controller.all)

module.exports = venues