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
app.get('/api/genre/:genre/:song/lyrics', controllers.songs.showOne);
app.get('/api/genre/:genre/songs', controllers.songs.indexG);

app.post('/api/songs', controllers.songs.create);

app.delete('/api/genre/:genre/:song', controllers.songs.destroy);

app.put('/api/lyrics/:song', controllers.lyrics.update);
app.put('/api/genre/:genre/:song', controllers.songs.update);


// GET and send genre.html based on :genre
app.get('/genre/:genre', function(req,res) {
  var genre = req.params.genre;
  if (genre === 'rnb') {
    res.sendFile('views/songs.html' , { root : __dirname});
  } else if (genre === 'kpop') {
    res.sendFile('views/songs.html' , { root : __dirname});
  } else if (genre === 'edm') {
    res.sendFile('views/songs.html' , { root : __dirname});
  } else if (genre === 'hiphop') {
    res.sendFile('views/songs.html' , { root : __dirname});
  } else {
    console.log('user has chosen invalid genre')
  };
});

// GET and send lyrics.html based on :genre and :song
app.get('/genre/:genre/:song/lyrics', function(req,res) {
  res.sendFile('views/lyrics.html' , { root : __dirname});
})


////////////////////
//  LISTEN
///////////////////

app.listen(process.env.PORT || 3000, function () {
  console.log('Example app listening at http://localhost:3000/');
});
