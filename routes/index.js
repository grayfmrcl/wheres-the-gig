const routes = require('express').Router()
const artist = require('./artist')
const venue = require('./venue')

routes.get('/', (req, res) => {
    res.render('index')
})

routes.use('/venues', venue)
routes.use('/artists', artist)

module.exports = routes

