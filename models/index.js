var mongoose = require("mongoose");
// mongoose.connect("mongodb://localhost/crudelyrics");
mongoose.connect( process.env.MONGODB_URI || "mongodb://localhost/crudelyrics" );

module.exports.Song = require("./songs.js");
module.exports.Lyric = require("./lyrics.js");
