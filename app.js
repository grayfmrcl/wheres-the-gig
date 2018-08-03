const express = require('express')
const bodyParser = require('body-parser')
const session = require('express-session')

const routes = require('./routes')

const app = express()
const port = 8080

app.set('view engine', 'ejs')

app.use(express.static(__dirname))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(session({
    secret: 'z0X9c1V8a2S7d3F6q4W5eR',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}))
app.use('/', routes)

app.use(function (req, res, next) {
    res.status(404).send('404 not found');
});


app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})




