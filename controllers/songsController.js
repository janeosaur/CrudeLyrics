var db = require('../models');

// GET /api/songs
function index(req, res) {
  // send back all songs as JSON
  db.Song.find({}, function(err, allSongs) {
    res.json(allSongs);
  });
}

// GET api/songs/:id
function show(req,res) {
  var songId = req.params.id;
  db.Song.findById(songId, function(err, foundSong) {
    if(err) {console.log('foundSong error', err)}
    res.json(foundSong);
  });
};

module.exports = {
  index: index,
  show: show
}
