const routes = require('express').Router()
const artists = require('./artists')
const venues = require('./venues')
const auths = require('./auths')
const gigs = require('./gigs')
const tickets = require('./tickets')

const authorize = require('./authorize')
const dateHelper = require('../helpers/dateHelper')
const optionHelper = require('../helpers/optionHelper')

const setLocals = (req, res, next) => {
    res.locals.currentUser = req.session.currentUser || null
    res.locals.dateHelper = dateHelper
    res.locals.optionHelper = optionHelper
    next()
}

const authenticate = (req, res, next) => {
    if(!req.session.currentUser)
        res.redirect('/')
    else
        next()
}

routes.get('/', setLocals, (req, res) => {
    res.render('index')
})

routes.use('/auth', setLocals, auths)
routes.use('/gigs', authenticate, setLocals, gigs)
routes.use('/venues', authenticate, authorize, setLocals, venues)
routes.use('/artists', authenticate, authorize, setLocals, artists)
routes.use('/tickets', authenticate, setLocals, tickets)

module.exports = routes

