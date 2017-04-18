var express = require('express'),
  bodyParser = require('body-parser');

var db = require('./models');

var app = express();

////////////////////
//  MIDDLEWARE
///////////////////

app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: true }));

function logRequestInfo(req, res, next){
  console.log(`\nRECEIVED REQUEST : ${req.method} ${req.url}`);
  console.log('query params:', req.query);
  console.log('body:', req.body);
  next();
}
app.use(logRequestInfo);


////////////////////
//  ROUTES
///////////////////

app.get('/', function (req, res) {
  res.sendFile('views/index.html' , { root : __dirname});
});


// testing
app.get('/api/songs', function (req, res) {
  // send all books as JSON response
  db.Song.find()
    // .populate('lyrics')
    .exec(function(err, songs){
      if (err) {
        console.log("error: " + err.message);
        res.status(500).send();
      } else {
        res.json(songs);
      }
    });
  });



////////////////////
//  LISTEN
///////////////////

app.listen(process.env.PORT || 3000, function () {
  console.log('Example app listening at http://localhost:3000/');
});
