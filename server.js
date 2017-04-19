var express = require('express'),
  bodyParser = require('body-parser');

var db = require('./models')

var app = express();

////////////////////
//  MIDDLEWARE
///////////////////

app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: true }));

function logRequestInfo(req, res, next){
  console.log(`\nRECEIVED REQUEST : ${req.method} ${req.url}`);
  console.log('query params:', req.query);
  console.log('body:', req.body);
  next();
}
app.use(logRequestInfo);


////////////////////
//  ROUTES
///////////////////

app.get('/', function (req, res) {
  res.sendFile('views/index.html' , { root : __dirname});
});

//  GET api/songs index
app.get('/api/songs', function (req, res) {
  // send all books as JSON response
  db.Song.find()
    .populate('lyric')
    .exec(function(err, songs){
      if (err) {
        console.log("error: " + err.message);
        res.status(500).send();
      } else {
        res.json(songs);
      }
    });
  });

// GET api/song/:id
app.get('/api/songs/:id', function (req,res) {
  var songId = req.params.id;
  db.Song.findById(songId, function(err, foundSong) {
    if(err) {console.log('foundSong error', err)}
    res.json(foundSong);
  });
});

// GET api/song/:name
app.get('/api/songs/:name', function (req,res) {
  var songName = req.params.name;
  db.Song.find({name: songName}), function(err, foundSong) {
    if(err) {console.log('foundSong error', err)}
    res.json(foundSong);
  };
});

// GET genre.html based on :genre
app.get('/genre/:genre', function(req,res) {
  var genre = req.params.genre;
  if (genre === 'rnb') {
    res.sendFile('views/genre.html' , { root : __dirname});
    // manipulate html stuff?
  } else if (genre === 'kpop') {
    res.sendFile('views/genre.html' , { root : __dirname});
    // manipulate html stuff?
  } else if (genre === 'edm') {
    res.sendFile('views/genre.html' , { root : __dirname});
    // manipulate html stuff?
  } else {
    console.log('user has chosen invalid genre name')
    // some sort of client facing error?
  }
})

// GET lyrics.html
app.get('/lyrics', function(req,res) {
  res.sendFile('views/lyrics.html' , { root : __dirname});
})


////////////////////
//  LISTEN
///////////////////

app.listen(process.env.PORT || 3000, function () {
  console.log('Example app listening at http://localhost:3000/');
});
