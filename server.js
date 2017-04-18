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

// // get all books - refactored after new author db
// app.get('/api/books', function (req, res) {
//   // send all books as JSON response
//   db.Book.find()
//     .populate('author')
//     .exec(function(err, books){
//       if (err) {
//         console.log("error: " + err.message);
//         res.status(500).send();
//       } else {
//         res.json(books);
//       }
//     });
//   });
//
// // get one book - refactored after new author db
// app.get('/api/books/:id', function (req, res) {
//   db.Book.findOne({_id: req.params.id })
//     .populate('author')
//     .exec (function(err, data) {
//       if (err) {
//         console.log("error: " + err.message);
//         res.status(500).send();
//       } else {
//         res.json(data);
//       }
//   });
// });
//
// // create new book - refactored after new author db
// app.post('/api/books', function (req, res) {
//   // create new book with form data (`req.body`)
//   var newBook = new db.Book({
//     title: req.body.title,
//     image: req.body.image,
//     releaseDate: req.body.releaseDate
//   });
//
//     // to add an author to a book if author already exists
//     db.Author.findOne({name: req.body.author}, function(err, author){
//       if (author === null) {
//         console.log(`book create error, author ${req.body.author} not found, create author first`)
//       } else {
//         newBook.author = author;
//         // add newBook to database
//         newBook.save(function(err, book){
//           if (err) {
//             return console.log("create error: " + err);
//           } else {
//           console.log("created ", book.title);
//           res.json(book);
//         }
//        });
//      }
//    });
// });
//
// // delete book -- no change after author db
// app.delete('/api/books/:id', function (req, res) {
//   // get book id from url params (`req.params`)
//   console.log('books delete', req.params);
//   var bookId = req.params.id;
//   // find the index of the book we want to remove
//   db.Book.findOneAndRemove({ _id: bookId }, function (err, deletedBook) {
//     res.json(deletedBook);
//   });
// });


////////////////////
//  LISTEN
///////////////////

app.listen(process.env.PORT || 3000, function () {
  console.log('Example app listening at http://localhost:3000/');
});
