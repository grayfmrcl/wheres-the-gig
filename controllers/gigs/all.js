const model = require('../../models')
const Artist = model.Artist
const Venue = model.Venue
const Gig = model.Gig

module.exports = (req, res) => {
    Gig.findAll({
        order : [['name','ASC']],
        include: [{
            model: Artist
        }, {
            model: Venue
        }]
    })
    .then(gigs => res.render('gigs/index.ejs',{gigs}))
    .catch(err => res.send(err))
}