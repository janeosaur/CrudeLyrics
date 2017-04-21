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

function destroy(req,res) {
  var song = req.params.song;
  console.log(song);
  db.Lyric.findOneAndRemove({name: song}, function(err, deletedLyric) {
    res.json(deletedLyric);
  });
};

// app.put('/api/lyrics/:song, controllers.lyrics.update);
function update(req,res) {
  var newWriter = req.body.writers;
  console.log('server side', newWriter);
  // findbyIdandupdate
  db.Song.findOne({name:req.params.song}, function(err, updateSong) {
    console.log(updateSong); // null - not finding anything.
    updateSong.lyrics.writers = newWriter;
    updateSong.save(function(err, savedLyric) {
      res.json(savedLyric);
    });
  });
};

module.exports = {
  index: index,
  show: show,
  // create: create,
  destroy: destroy,
  update: update

}
