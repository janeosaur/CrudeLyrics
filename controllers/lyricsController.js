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

// app.put('/api/lyrics/:song, controllers.lyrics.update);
function update(req,res) {
  var newWriter = req.body.writers;
  var newVerse = req.body.verse;
  console.log('server side', newWriter);
  db.Song.findOne({name:req.params.song}, function(err, updateSong) {
    console.log(updateSong);
    updateSong.lyrics.writers = newWriter;
    updateSong.lyrics.verse = newVerse;
    updateSong.save(function(err, savedLyric) {
      res.json(savedLyric);
    });
  });
};

module.exports = {
  index: index,
  show: show,
  update: update
  // create: create,
}
