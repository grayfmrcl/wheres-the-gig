const models = require('../.././models')
const Venue = models.Venue
const Gig = models.Gig

module.exports = (req, res) => {
    Venue.findAll({
        include: [{
            model: Gig
        }]
    })
    .then(Venues => {
        res.send(Venues)
    })
    .catch(err => {
        console.log(err)
    })
}

