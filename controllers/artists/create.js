const models = require('../../models')
const Artist = models.Artist

const get = (req, res) => {
    
    res.render('artists/create.ejs')
}

const post = (req, res) => {
    
    Artist.create({
        name : req.body.name,
        genre : req.body.genre
    })
    .then(() =>res.redirect('/artists'))  
    .catch(err => res.send(err))
}

module.exports = { get, post }
