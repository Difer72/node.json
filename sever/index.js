var express = require('express');
 var app = express();
 const PORT = 3000;

app.route('/book')
  .get(function(req, res) {
    res.send('Get a random book');
  })
  .post(function(req, res) {
    res.send('Add a book');
  })
  .put(function(req, res) {
    res.send('Update the book');
  });


app.listen(3000, function () {
 console.log(`Server running at port ${PORT}`);
 });