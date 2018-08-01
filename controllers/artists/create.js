
const get = (req, res) => {
    res.send('display create artist form')
}

const post = (req, res) => {
    res.send('artist added.')
}

module.exports = { get, post }