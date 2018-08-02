const tickets = require('express').Router()
const controller = require('../controllers/tickets')

tickets.get('/', controller.all)
tickets.post('/', controller.purchase)

module.exports = tickets

