const models = require('../../models')
const generatePassword = require('../../helpers/authentications/generatePassword')

const User = models.User

const get = (req, res) => {
    res.render('auth/register', { validationErrors: [] })
}

const post = (req, res, next) => {
    const name = req.body.name.trim() || null
    const email = req.body.email.trim() || null
    const passwordRaw = req.body.password.trim() || ""
    const password = generatePassword(passwordRaw, email)

    User
        .create({ name, email, passwordRaw, password })
        .then(user => {
            res.redirect('/auth/login')
        })
        .catch(err => {
            if(err.name == "SequelizeValidationError")
                res.render('auth/register', { validationErrors: err.errors })
            else
                res.send(err)
        })
}

module.exports = { get, post }