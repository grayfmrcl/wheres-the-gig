
const get = (req, res) => {
    res.send('display update artist form')
}

const post = (req, res) => {
    res.send('artist deleted')
}

module.exports = { get, post }