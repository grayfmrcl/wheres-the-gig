const models = require('../../models')
const Artist = models.Artist

const get = (req, res) => {

    Artist.findById(req.params.id)
        .then(artist => {
            res.render('artists/remove', { artist })
        })
        .catch(err => res.send(err))
}

const post = (req, res) => {

    Artist.findById(req.params.id)
        .then(artist => {
            artist.destroy()
                .then(() => res.redirect('/artists'))
                .catch(err => res.send(err))
        })
        .catch(err => res.send(err))

}

module.exports = { get, post }
