const model = require('../../models')

const Artist = model.Artist

const findArtistPromise = (id) => {
    return new Promise((resolve, reject) => {
        Artist
            .findById(id)
            .then(artist => {
                if (artist)
                    resolve(artist)
                else
                    reject('Aritst not found')
            })
    })
}

const editPageHandler = (req, res, validationErrors) => {
    findArtistPromise(req.params.id)
        .then(artist => {
            res.render('artists/update', { artist, validationErrors })
        })
}

const get = (req, res) => editPageHandler(req, res, [])

const post = (req, res) => {
    findArtistPromise(req.params.id)
        .then(artist => {
            artist.name = req.body.name || ''
            artist.genre = req.body.genre || ''

            artist.save()
                .then(changes => res.redirect('/artists'))
                .catch(err => {
                    if(err.name == "SequelizeValidationError")
                        editPageHandler(req, res, err.errors)
                    else
                        res.send(err)
                })
        })
}

module.exports = { get, post }

