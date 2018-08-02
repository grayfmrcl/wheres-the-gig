const model = require('../../models')

const Artist = model.Artist
const Gig = model.Gig
const Venue = model.Venue

const findGigPromise = (id) => {
    return new Promise((resolve, reject) => {
        Gig
            .findById(id, { include: [Artist, Venue] })
            .then(gig => {
                if (gig)
                    resolve(gig)
                else
                    reject('Gig not found')
            })
    })
}

const editPageHandler = (req, res, validationErrors) => {
    findGigPromise(req.params.id)
        .then(gig => {
            Promise.all([
                Artist.findAll(),
                Venue.findAll()
            ])
                .then(([artists, venues]) => {
                    res.render('gigs/update', { gig, artists, venues, validationErrors })
                })
        })
}

const get = (req, res) => {
    editPageHandler(req, res, [])
}

const post = (req, res) => {
    Gig.update({
        name: req.body.name,
        schedule: req.body.schedule || null,
        price: req.body.price || null,
        venueId: req.body.venueId || null,
        artistId: req.body.artistId || null
    }, {
            where: { id: req.params.id }
        })
        .then(() => { res.redirect('/gigs') })
        .catch(err => {
            if (err.name = 'SequelizeValidationError')
                editPageHandler(req, res, err.errors)
            else
                res.send(err)
        })
}

module.exports = { get, post }
