const auths = require('express').Router()
const controller = require('../controllers/authentications')

auths.get('/register', controller.register.get)
auths.post('/register', controller.register.post)
auths.get('/login', controller.login.get)
auths.post('/login', controller.login.post)
auths.get('/logout', controller.logout)

module.exports = auths