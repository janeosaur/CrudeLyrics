var db = require('../models');

// GET /api/songs
function index(req, res) {
  // send back all songs as JSON
  db.Song.find({}, function(err, allSongs) {
    res.json(allSongs);
  });
}


// function index(req, res) {
//   res.json({
//     db.Song.find()
//       .populate('lyric')
//       .exec(function(err, songs){
//         if (err) {
//           console.log("error: " + err.message);
//           res.status(500).send();
//         } else {
//           res.json(songs);
//         }
//       });
//     });
//   }

module.exports = {
  index: index
}
