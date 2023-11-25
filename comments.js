// Create web server 
// Run: node comments.js
// Test: curl -d "user=foo&comment=bar" http://localhost:3000/comments
// Test: curl http://localhost:3000/comments
// Test: curl -d "user=foo&comment=bar" -X PUT http://localhost:3000/comments/1
// Test: curl -X DELETE http://localhost:3000/comments/1
// Test: curl -d "user=foo&comment=bar" -X POST http://localhost:3000/comments/1
// Test: curl -d "user=foo&comment=bar" -X POST http://localhost:3000/comments
// Test: curl -X DELETE http://localhost:3000/comments

var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var comments = [];
var nextId = 0;

app.use(bodyParser.urlencoded({ extended: true }));

// Get all comments
app.get('/comments', function(req, res) {
  res.json(comments);
});

// Get a comment by id
app.get('/comments/:id', function(req, res) {
  res.json(comments[req.params.id]);
});

// Add a comment
app.post('/comments', function(req, res) {
  var comment = {
    user: req.body.user,
    comment: req.body.comment
  };
  comments[nextId++] = comment;
  res.json(comment);
});

// Update a comment by id
app.put('/comments/:id', function(req, res) {
  var comment = {
    user: req.body.user,
    comment: req.body.comment
  };
  comments[req.params.id] = comment;
  res.json(comment);
});

// Delete a comment by id
app.delete('/comments/:id', function(req, res) {
  delete comments[req.params.id];
  res.json(null);
});

// Delete all comments
app.delete('/comments', function(req, res) {
  comments = [];
  res.json(null);
});

// Start server
var server = app.listen(3000, function() {
  console.log('Listening on port %d', server.address().port);
});
