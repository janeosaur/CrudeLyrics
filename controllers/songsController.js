var db = require('../models');

// GET /api/songs
function index(req, res) {
  db.Song.find({}, function(err, allSongs) {
    res.json(allSongs);
  });
}

// GET api/songs/:id
function show(req,res) {
  var songId = req.params.id;
  db.Song.findById(songId, function(err, foundSong) {
    res.json(foundSong);
  });
};

// GET api/genre/rnb/songs
function indexRnb(req,res) {
  db.Song.find({genre: 'rnb'}, function(err, allRnbSongs) {
    res.json(allRnbSongs);
  });
};

// GET api/genre/kpop/songs
function indexKpop(req,res) {
  db.Song.find({genre: 'kpop'}, function(err, allKpopSongs) {
    res.json(allKpopSongs);
  });
};

// GET api/genre/edm/songs
function indexEdm(req,res) {
  db.Song.find({genre: 'edm'}, function(err, allEdmSongs) {
    res.json(allEdmSongs);
  });
};

// POST api/songs
function create(req,res) {
  console.log('body', req.body);
  db.Song.create(req.body, function(err, newSong) {
    res.json(newSong);
  });
};

// GET api/genre/:genre/:song/lyrics
function showOne(req,res) {
  var genre=req.params.genre;
  var song=req.params.song;
  db.Song.findOne({genre:genre, name:song}, function(err, foundLyric) {
    res.json(foundLyric);
  });
};
//Delete the api/genre/:genre/:song/lyrics
function destroy(req, res) {
  var genre=req.params.genre;
  var song=req.params.song;
  db.Song.findOneAndRemove({genre:genre,name:song}, function(err, foundlyric){
    res.json(foundlyric);
  });
};

// Editig/updating the song details
function update(req, res) {
  console.log('updating with songlyric', req.body);
   var genre=req.params.genre;
  var song=req.params.song;
  db.Song.findById({genre:genre, name:song}, function(err, foundlyric) {
    if(err) { console.log('Songscontoller.update error', err); 
  }
   foundSong.name = genre.song.name;
   foundSong.artistName = genre.song.artistName;
   foundSong.releaseDate = genre.song.releaseDate;
   foundSong.save(function(err,savedlyric) {
     if (err) {
      console.log('editing songlyrics failed');
     } 
     res.json(savedlyric);
    })
  });
}

module.exports = {
  index: index,
  show: show,
  indexRnb: indexRnb,
  indexKpop: indexKpop,
  indexEdm: indexEdm,
  create: create,
  showOne: showOne,
  destroy: destroy,
  update: update
}
