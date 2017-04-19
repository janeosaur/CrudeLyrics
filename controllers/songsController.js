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

module.exports = {
  index: index,
  show: show
}
