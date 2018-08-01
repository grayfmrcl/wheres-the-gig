const express = require('express')
const app = express()
const model = require('./models')
const Gig = model.Gig
const Artist = model.Artist
const Venue = model.Venue
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.set('views', __dirname + '/views'); // general config
app.set('view engine', 'ejs');
app.get('/', (req, res) => {
    res.send('test')
})

//================================== SHOW VenueS,ARTISTS
app.get('/showAllVenues', (req, res) => {
    Venue.findAll({
            include: [{
                model: Gig
            }]
        })
        .then(Venues => {
            res.send(Venues)
        })
        .catch(err => {
            console.log(err)
        })
})
// ======================================  GIGS
// ======================================  
// ====================================== CREATE GIGS
app.get('/showAllGigs', (req, res) => {
    Gig.findAll({
            include: [{
                model: Artist
            }, {
                model: Venue
            }]
        })
        .then(gigs => res.render('showGigs.ejs',{gigs}))
        .catch(err => res.send(err))
})

app.get('/add/gig', (req, res) => {
    Artist.findAll()
    .then(artists => {
        Venue.findAll()
        .then(venues => res.render('createGig',{artists,venues}))
        .catch(err => res.send(err))
    })   
})
app.post('/add/gig', (req, res) => {
    Gig.create({
        name : req.body.name,
        schedule: req.body.schedule,
        price: req.body.price,
        artistId : req.body.artistId,
        venueId : req.body.venueId
    })
    .then(() =>res.redirect('/showAllGigs'))  
    .catch(err =>res.send(err))
})

app.get('/edit/gig/:id', (req, res) => {
    Gig.findById(req.params.id,{
        include : [{
            model : Artist
        },{
            model : Venue
        }]})
        .then((gig) => {
            Artist.findAll()
                .then(artists => {
                    Venue.findAll()
                    .then(venues => {
                        let id = req.params.id
                        res.render('editGig',{gig,id,artists,venues})
                    })
                    .catch(err => res.send(err))
                     })
                .catch(err => res.send(err))
                })
        .catch(err => res.send(err))
})
app.post('/edit/gig/:id', (req, res) => {
    
    Gig.update({
        name : req.body.name,
        schedule : req.body.schedule,
        price : req.body.price,
        venueId : req.body.venueId,
        artistId : req.body.artistId
    },{
        where :{ id : req.params.id}
    })
        .then(() => res.redirect('/showAllGigs'))
        .catch(err => res.send(err))
     
})
app.get('/delete/gig/:id', (req, res) => {
    Gig.findById(req.params.id)    
    .then(gig => {
        gig.destroy()
        .then( () => res.redirect('/showAllGigs'))
        .catch(err => res.send(err))        
    })
    .catch(err => res.send(err))        
})

// ======================================  ARTIST
// ====================================== 
// ====================================== ADD ARTIST

app.get('/add/artist', (req, res) => {
    res.render('createArtist')
})
app.post('/add/artist', (req, res) => {
    Artist.create({
        name : req.body.name,
        genre : req.body.genre
    })
    .then(() =>res.redirect('/showAllArtists'))  
    .catch(err => res.send(err))
})
// ====================================== UPDATE ARTIST

app.get('/edit/artist/:id', (req, res) => {
    Artist.findById(req.params.id)
    .then(artists => {
        let artistId = req.params.id
        res.render('editArtist',{artists,id:artistId})
    })
    .catch(err => res.send(err))        
})
app.post('/edit/artist/:id', (req, res) => {
    Artist.update({
        name : req.body.name,
        genre : req.body.genre
    }, {where : {
        id : req.params.id
    }})
    .then(() =>res.redirect('/showAllArtists'))  
    .catch(err => res.send(err))
})
// ====================================== SHOW ARTIST
app.get('/showAllArtists', (req, res) => {
    Artist.findAll({
            include: [{
                model: Gig
            }]
        })
        .then(artists => res.render('showArtist.ejs',{artists}))
        .catch(err => res.send(err))
})
// ====================================== DELETE ARTIST
app.get('/delete/artist/:id', (req, res) => {
    Artist.findById(req.params.id)    
    .then(artist => {
        artist.destroy()
        .then( () => res.redirect('/showAllArtists'))
        .catch(err => res.send(err))        
    })
    .catch(err => res.send(err))        
})

app.listen(3001, () => console.log('running on port 3000'))