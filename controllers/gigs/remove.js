const models = require('../../models')
const Gig = models.Gig

const get = (req, res) => {
    
    Gig.findById(req.params.id)    
    .then(gig => {
        gig.destroy()
        .then( () => res.redirect('/gigs'))
        .catch(err => res.send(err))        
    })
    .catch(err => res.send(err))             
}

const post = (req, res) => {
    
    
    
}

module.exports = { get, post }