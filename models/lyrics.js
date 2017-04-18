var mongoose = require('mongoose');
  Schema = mongoose.Schema;

// Create Schema
var LyricSchema = new Schema ({
  language: String,
  writers: String,
  verse: String
});

// Create model
var Lyric = mongoose.model('Lyric', LyricSchema);

// Export
module.exports = Lyric;
