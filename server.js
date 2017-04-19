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
app.get('/api/songs/:id', controllers.songs.show);
app.get('/api/lyrics', controllers.lyrics.index);
app.get('/api/lyrics/:id', controllers.lyrics.show);
app.get('/api/genre/rnb/songs', controllers.songs.indexRnb);
app.get('/api/genre/kpop/songs', controllers.songs.indexKpop);
app.get('/api/genre/edm/songs', controllers.songs.indexEdm);


// GET and send genre.html based on :genre
app.get('/genre/:genre', function(req,res) {
  var genre = req.params.genre;
  if (genre === 'rnb') {
    res.sendFile('views/songs.html' , { root : __dirname});
  } else if (genre === 'kpop') {
    res.sendFile('views/songs.html' , { root : __dirname});
  } else if (genre === 'edm') {
    res.sendFile('views/songs.html' , { root : __dirname});
  } else {
    console.log('user has chosen invalid genre')
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
