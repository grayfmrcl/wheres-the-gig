const routes = require('express').Router()
const artists = require('./artists')
const venues = require('./venues')
const auths = require('./auths')

routes.get('/', (req, res) => {
    res.render('index')
})

routes.use('/venues', venues)
routes.use('/artists', artists)
routes.use('/auth', auths)

module.exports = routes

