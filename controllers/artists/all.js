const model = require('../../models')
const Artist = model.Artist
const Gig = model.Gig

module.exports = (req, res) => {
    
    Artist.findAll({
        include: [{
            model: Gig
        }]
    })
    .then(artists => res.render('artists/',{artists}))
    .catch(err => res.send(err))
}