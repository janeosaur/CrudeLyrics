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

// GET /api/genre/:genre/songs (to remove indexrnb, indexedm, indexkpop)
function indexG(req,res) {
  var genre = req.params.genre;
  db.Song.find({genre:genre}, function(err, allGenreSongs) {
    res.json(allGenreSongs);
  })
}

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
  db.Song.findOne({genre:genre, name:song})
    .exec(function(err, foundLyric) {
      res.json(foundLyric);
    });
};

// DELETE api/genre/:genre/:song/lyrics
function destroy(req,res) {
  var song = req.params.song;
  console.log(song);
  db.Song.findOneAndRemove({name: song}, function(err, deletedSong) {
    res.json(deletedSong);
  });
};



// EDIT api/genre/:genre/:song
function update (req, res) {
  db.Song.findOne({name:req.params.song, genre: req.params.genre}, function(err, updateSong) {
    updateSong.name = req.body.name;
    updateSong.releaseDate = req.body.releaseDate;
    updateSong.artistName = req.body.artistName;
    updateSong.save(function(err, savedSong) {
      res.json(savedSong);
    });
  });
};

module.exports = {
  index: index,
  show: show,
  indexG: indexG,
  create: create,
  showOne: showOne,
  destroy: destroy,
  update: update
}
