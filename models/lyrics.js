var mongoose = require('mongoose');
  Schema = mongoose.Schema;

// Create Schema
var LyricSchema = new Schema ({
  verse: String,
  language: String,
  writers: String,
});

// Create model
var Lyric = mongoose.model('Lyric', LyricSchema);

// Export
module.exports = Lyric;
