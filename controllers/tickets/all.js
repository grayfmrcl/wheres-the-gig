const models = require('../../models')
const User = models.User
const Ticket = models.Ticket
const Gig = models.Gig
const Artist = models.Artist
const Venue = models.Venue

module.exports = (req, res, next) => {
    const id = req.session.currentUser.id

    User.findById(id, {
        include: [{
            model: Ticket,
            include: [{
                model: Gig,
                include: [Artist, Venue]
            }]
        }]
    })
        .then(user => {
            res.render('tickets/', { tickets: user.Tickets })
        })
}