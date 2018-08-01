const models = require('../../models')
const generatePassword = require('../../helpers/authentications/generatePassword')

const User = models.User

const get = (req, res) => {
    res.render('auth/login', { validationErrors: [] })
}

const post = (req, res) => {
    const email = req.body.email
    const password = generatePassword(req.body.password, req.body.email)

    User.findOne({ where: { email, password } })
        .then(user => {
            if (user) {
                req.session.currentUser = user.get({ plain: true })
                res.redirect('/gigs')
            } else {
                res.render('auth/login', { validationErrors: [new Error(`Invalid email or password`)] })
            }

        })
}

module.exports = { get, post }