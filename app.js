const express = require('express')
const bodyParser = require('body-parser')
const session = require('express-session')

const routes = require('./routes')

const app = express()
const port = 8080

global.__basedir = __dirname;

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

app.use((req, res, next) => {
    res.status(404).render('404');
});


app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})




