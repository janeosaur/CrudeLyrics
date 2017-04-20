var db = require('../models');

// GET /api/lyrics
function index(req, res) {
  db.Lyric.find({}, function(err, allLyrics) {
    res.json(allLyrics);
  });
}

// GET api/lyrics/:id
function show(req,res) {
  var lyricId = req.params.id;
  db.Lyric.findById(lyricId, function(err, foundLyric) {
    res.json(foundLyric);
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


module.exports = {
  index: index,
  show: show,
  showOne: showOne,
  // create: create,
  // destroy: destroy,
  // update: update

}
