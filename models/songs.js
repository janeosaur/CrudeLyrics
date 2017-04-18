var mongoose = require('mongoose');
  Schema = mongoose.Schema;

var Lyric = require('./lyrics')

// Create Schema
var SongSchema = new Schema ({
  name: String,
  artistName: String,
  releaseDate: Number,
  genre: String,
  lyrics: Lyric.schema
});

// Create model
var Song = mongoose.model('Song', SongSchema);

// Export
module.exports = Song;
