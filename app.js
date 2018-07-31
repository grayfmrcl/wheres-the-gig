const express = require('express')
const app = express()
const model = require('./models') 
const gig = model.Gig
const Artist = model.Artist
const venue = model.Venue
app.get('/',(req,res) =>{
    res.send('test')
})

app.get('/showAllGigs',(req,res)=>{
    gig.findAll({
        include : [{
            model : Artist
        },{
            model : venue
        }]
    })
    .then(gigs =>{
        res.send(gigs)
    })
})

app.get('/showAllArtists',(req,res)=>{
    Artist.findAll({
        include : [{
            model : gig
        }]
    })
    .then(Artists =>{
        res.send(Artists)
    })
})

app.get('/showAllVenues',(req,res)=>{
    venue.findAll({
        include : [{
            model : gig
        }]
    })
    .then(venues =>{
        res.send(venues)
    })
    .catch(err =>{
        console.log(err)
    })
})

app.listen(3000, ()=> console.log('running on port 3000'))