const models = require('../../models')
const Artist = models.Artist
const Venue = models.Venue
const Gig = models.Gig

const createPageHandler = (req, res, validationErrors) => {
    Promise.all([
        Artist.findAll(),
        Venue.findAll()
    ])
        .then(([artists, venues]) => {
            res.render('gigs/create.ejs', { artists, venues, validationErrors })
        })
}

const get = (req, res) =>  createPageHandler(req, res, [])

const post = (req, res) => {

    Gig.create({
        name: req.body.name,
        schedule: req.body.schedule || null,
        price: req.body.price || null,
        artistId: req.body.artistId || null,
        venueId: req.body.venueId || null
    })
        .then(() => res.redirect('/gigs/'))
        .catch(err => {
            if (err.name == 'SequelizeValidationError')
                createPageHandler(req, res, err.errors)
            else
                res.send(err)
        })
}

module.exports = { get, post }
