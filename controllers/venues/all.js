const models = require('../.././models')
const Venue = models.Venue
const Gig = models.Gig

module.exports = (req, res) => {
    Venue.findAll({
        include: [{
            model: Gig
        }]
    })
    .then(venues => {
        res.render('venues/index',{venues})
    })
    .catch(err => {
        res.send(err)
    })
}

