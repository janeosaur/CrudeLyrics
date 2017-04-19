var db = require('../models');

// GET /api/lyrics
function index(req, res) {
  db.Lyric.find({}, function(err, allLyrics) {
    res.json(allLyrics);
  });
}

module.exports = {
  index: index,
  // show: show
}
