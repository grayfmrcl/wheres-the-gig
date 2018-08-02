const model = require('../../models')
const Artist = model.Artist

const get = (req, res) => {

    Artist.findById(req.params.id)
        .then(artists => {
            let artistId = req.params.id
            res.render('artists/update', { artists, id: artistId })
        })
        .catch(err => res.send(err))
}

const post = (req, res) => {

    Artist.update({
        name: req.body.name,
        genre: req.body.genre
    }, {
        where: {
            id: req.params.id
        }
        })
        .then(() => res.redirect('/artists'))
        .catch(err => res.send(err))
}

module.exports = { get, post }

