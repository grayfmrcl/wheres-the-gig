module.exports = (req, res, next) => {
    req.session.currentUser = null

    res.redirect('/')
}