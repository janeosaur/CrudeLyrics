var express = require('express');
  bodyParser = require('body-parser');

var db = require('./models');
var controllers = require('./controllers');

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
  res.sendFile('/views/index.html' , { root : __dirname});
});

// JSON API Endpoints
app.get('/api', controllers.api.index);
app.get('/api/songs', controllers.songs.index);
app.get('api/songs/:id', controllers.songs.show);


// GET api/song/:id
app.get('/api/songs/:id', function (req,res) {
  var songId = req.params.id;
  db.Song.findById(songId, function(err, foundSong) {
    if(err) {console.log('foundSong error', err)}
    res.json(foundSong);
  });
});


// i don't think this is the way to do it - jane
// GET genre.html based on :genre
app.get('/genre/:genre', function(req,res) {
  var genre = req.params.genre;
  if (genre === 'rnb') {
    res.sendFile('views/songs.html' , { root : __dirname});
    // manipulate html stuff?
  } else if (genre === 'kpop') {
    res.sendFile('views/songs.html' , { root : __dirname});
    // manipulate html stuff?
  } else if (genre === 'edm') {
    res.sendFile('views/songs.html' , { root : __dirname});
    // manipulate html stuff?
  } else {
    console.log('user has chosen invalid genre name')
    // some sort of client facing error?
  }
})


// GET lyrics landing page
app.get('/lyrics', function(req,res) {
  res.sendFile('views/lyrics.html' , { root : __dirname});
})

app.get('/api/lyrics/:id', function (req, res) {
  db.Lyric.find({_id: req.params.id})
    .exec (function (err, foundLyric) {
      console.log('found one lyric')
  })
})


////////////////////
//  LISTEN
///////////////////

app.listen(process.env.PORT || 3000, function () {
  console.log('Example app listening at http://localhost:3000/');
});
