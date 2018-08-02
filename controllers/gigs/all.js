const model = require('../../models')
const Artist = model.Artist
const Venue = model.Venue
const Gig = model.Gig
var Sequelize = require('sequelize');
const Op = Sequelize.Op

const get = (req, res) => {
    let filterCategory = req.query.filterCategory || ''
  
    let sortBy = req.query.sortBy || 'schedule'
    //res.send(filterCategory)
    let from = req.query.from || 'ASC'
    Gig.findAll({
        order : [[sortBy,from]],
        include: [{
            model: Artist,
            where:   {[Op.or]: [{
                name:  {[Op.like]: `%${filterCategory}%`}
                },
                {
                genre:  {[Op.like]: `%${filterCategory}%`}
                }
              ] } 
        }, {
            model: Venue
        }]
    })
    .then(gigs => res.render('gigs/index.ejs',{gigs, sortBy, from,filterCategory}))
    
    .catch(err => res.send(err)) 
}

const post = (req, res) => {

}
module.exports = { get, post }