module.exports = (req, res, next) => {
    if(!req.session.currentUser.isAdmin) {
        req.session.currentUser = null
        res.status(401).render('401')
    }
    else
        next()        
}