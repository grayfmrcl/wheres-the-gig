const models = require('../../models')
const Artist = models.Artist

const createPageHandler = (req, res, validationError) => {
    res.render('artists/create', { validationError })
}

const get = (req, res) => {
    createPageHandler(req, res, [])
}

const post = (req, res) => {

    Artist.create({
        name: req.body.name,
        genre: req.body.genre
    })
        .then(() => res.redirect('/artists'))
        .catch(err => {
            if (err.name == "SequelizeValidationError")
            createPageHandler(req, res, err.errors)
            res.send(err)
        })
}

module.exports = { get, post }
