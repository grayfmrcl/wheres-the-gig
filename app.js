const express = require('express')
const bodyParser = require('body-parser')

const routes = require('./routes')

const app = express()
const port = 8080

app.set('view engine', 'ejs')

app.use(express.static(__dirname + '/views'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/', routes)

app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})
