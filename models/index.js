var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/book-app");

module.exports.Song = require("./songs.js");
module.exports.Lyric = require("./lyrics.js");
