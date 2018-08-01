'use strict'

const crypto = require('crypto')

module.exports = (password, str) => {
    let hash = crypto.createHash('md5').update(str).digest('hex')
    let encrypted = crypto.createHash('md5').update(password + hash).digest('hex')
    return encrypted
}