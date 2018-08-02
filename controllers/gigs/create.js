const models = require('../../models')
const Artist = models.Artist
const Venue = models.Venue
const Gig = models.Gig

const get = (req, res) => {
    
    Artist.findAll()
    .then(artists => {
        Venue.findAll()
        .then(venues => res.render('gigs/create.ejs',{artists,venues}))
        .catch(err => res.send(err))
    })   
}

const post = (req, res) => {
    
    Gig.create({
        name : req.body.name,
        schedule: req.body.schedule,
        price: req.body.price,
        artistId : req.body.artistId,
        venueId : req.body.venueId
    })
    .then(() =>res.redirect('/gigs/'))  
    .catch(err =>res.send(err))
}

module.exports = { get, post }