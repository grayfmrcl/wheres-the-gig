const routes = require('express').Router()
const artists = require('./artists')
const venues = require('./venues')
const auths = require('./auths')
const gigs = require('./gigs')
const tickets = require('./tickets')

const dateHelper = require('../helpers/dateHelper')

const setLocals = (req, res, next) => {
    res.locals.currentUser = req.session.currentUser || null
    res.locals.dateHelper = dateHelper
    next()
}

routes.get('/', setLocals, (req, res) => {
    res.render('index')
})

routes.use('/auth', setLocals, auths)
routes.use('/gigs', setLocals, gigs)
routes.use('/venues', setLocals, venues)
routes.use('/artists', setLocals, artists)
routes.use('/tickets', setLocals, tickets)

module.exports = routes

