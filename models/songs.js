var mongoose = require('mongoose');
  Schema = mongoose.Schema;

// Create Schema
var SongSchema = new Schema ({
  name: String,
  artistName: String,
  releaseDate: Number,
  genre: String
});

// Create model
var Song = mongoose.model('Song', SongSchema);

// Export
module.exports = Song;
