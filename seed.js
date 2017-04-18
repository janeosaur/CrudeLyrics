var db = require('./models');

var songsList = [];
songsList.push({
        song: "I feel it coming",
        artistName: "The Weeknd",
        releaseDate: 2016,
        genre: "r&b",
        // lyrics: [Lyric.schema]
      });
songsList.push({
        song: "Company",
        artistName: "Tinashe",
        releaseDate: 2016,
        genre: "r&b",
        // lyrics: [Lyric.schema]
      });
songsList.push({
        song: "Gangsta",
        artistName: "Kehlani",
        releaseDate: 2016,
        genre: "r&b",
        // lyrics: [Lyric.schema]
      });
songsList.push({
        song: "With you",
        artistName: "Feel Kim",
        releaseDate: 2017,
        genre: "kpop",
        // lyrics: [Lyric.schema]
      });
songsList.push({
        song: "Someday",
        artistName: "BtoB",
        releaseDate: 2017,
        genre: "kpop",
        // lyrics: [Lyric.schema]
      });
songsList.push({
        song: "I'll Be Yours",
        artistName: "Girls Day",
        releaseDate: 2017,
        genre: "kpop"
        // lyrics: [Lyric.schema]
      });
songsList.push({
        song: "Falling",
        artistName: "Alesso",
        releaseDate: 2016,
        genre: "edm",
        // lyrics: [Lyric.schema]
      });
songsList.push({
        song: "Scared to be Lonely",
        artistName: "Dua Lipa",
        releaseDate: 2017,
        genre: "edm",
        // lyrics: [Lyric.schema]
      });
songsList.push({
        song: "Party til the Daylight",
        artistName: "Hardwell",
        releaseDate: 2017,
        genre: "edm",
        // lyrics: [Lyric.schema]
      });

db.Song.remove({}, function(err, songs) {
  db.Song.create(songsList, function(err, songs) {
    console.log('all songs', songs);
  })
})
