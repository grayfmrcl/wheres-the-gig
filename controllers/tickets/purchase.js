const models = require('../../models')
const Ticket = models.Ticket

module.exports = (req, res, next) => {
    const customerId = req.session.currentUser.id
    const gigId = req.body.gigId

    Ticket
        .create({ customerId, gigId })
        .then(newTicket => {
            res.redirect('/tickets')
        })
}