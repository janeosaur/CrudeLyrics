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
  db.Song.find({genre: 'r&b'}, function(err, allRnbSongs) {
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


module.exports = {
  index: index,
  show: show,
  indexRnb: indexRnb,
  indexKpop: indexKpop,
  indexEdm: indexEdm
}
