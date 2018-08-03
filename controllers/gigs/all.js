const model = require('../../models')
const Sequelize = require('sequelize');
const helper = require('../../helpers/dateHelper')

const Artist = model.Artist
const Venue = model.Venue
const Gig = model.Gig

const Op = Sequelize.Op

const get = (req, res) => {
    let search = req.query.search || ''

    let sortBy = req.query.sortBy || 'schedule'
    let sortDir = req.query.sortDir || 'asc'

    Gig.findAll({
        order: [[sortBy, sortDir]],
        include: [{
            model: Artist,
            where: {
                [Op.or]: [{
                    name: { [Op.iLike]: `%${search}%` }
                },
                {
                    genre: { [Op.iLike]: `%${search}%` }
                }
                ]
            }
        }, {
            model: Venue
        }]
    })
        .then(gigs => res.render('gigs/index.ejs', { gigs, sortBy, sortDir, search }))

        .catch(err => res.send(err))
}

const post = (req, res) => {

}
module.exports = { get, post }