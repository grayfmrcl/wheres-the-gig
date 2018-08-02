const model = require('../../models')
const Artist = model.Artist
const Venue = model.Venue
const Gig = model.Gig
var Sequelize = require('sequelize');
const Op = Sequelize.Op

const get = (req, res) => {
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

const post = (req, res) => {
    let filterCategory = req.body.filterCategory.split(' ')
    let sortBy = req.body.sortBy
    //res.send(filterCategory)
    let from = req.body.from
    //res.send(filterCategory)
    Gig.findAll({
        order : [[sortBy,from]],
        include: [{
            model: Artist,
            where:   {[Op.or]: [{
                name:  {[Op.like]: `%${filterCategory[0]}%`}
                },
                {
                genre:  {[Op.like]: `%${filterCategory[1]}%`}
                }
              ] } 
        }, {
            model: Venue,
            where : {name  : {[Op.like]: `%${filterCategory[3]}%` }}
        }]
    })
    .then(gigs => res.render('gigs/index.ejs',{gigs}))
    .catch(err => res.send(err)) 
}
module.exports = { get, post }