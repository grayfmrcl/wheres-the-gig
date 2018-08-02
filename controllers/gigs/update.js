const model = require('../../models')
const Artist = model.Artist
const Gig = model.Gig
const Venue = model.Venue

const get = (req, res) => {
    
Gig.findById(req.params.id,{
    include : [{
        model : Artist
    },{
        model : Venue
    }]
})
    .then((gig) => {
        Artist.findAll()
            .then(artists => {
                Venue.findAll()
                .then(venues => {
                    let id = req.params.id
                    res.render('gigs/update',{gig,id,artists,venues})
                })
                .catch(err => res.send(err))
                    })
            .catch(err => res.send(err))
            })
    .catch(err => res.send(err))
}

const post = (req, res) => {
    Gig.update({
        name : req.body.name,
        schedule : req.body.schedule,
        price : req.body.price,
        venueId : req.body.venueId,
        artistId : req.body.artistId
    },{
        where :{ id : req.params.id}
    })
        .then(() => res.redirect('/gigs'))
        .catch(err => res.send(err))
}

module.exports = { get, post }
