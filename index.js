const express = require('express');
const path = require('path');

const app = express();
const mongoose = require('mongoose');

const Test = require('./mongoose/test');

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// Put all API endpoints under '/api'

// NOTE: example
// app.get('/api/passwords', (req, res) => {
//   const count = 5;
//
//   // Generate some passwords
//   const passwords = Array.from(Array(count).keys()).map(i =>
//     generatePassword(12, false)
//   )
//
//   // Return them as json
//   res.json(passwords);
//
//   console.log(`Sent ${count} passwords`);
// });

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

mongoose.connect('mongodb://localhost:27017/local');

var db = mongoose.connection;
db.on('error', ()=> {console.log( '---FAILED to connect to mongoose')})
db.once('open', () => {
 console.log( '+++Connected to mongoose')
});

app.post('/test', (req, res) => {
  console.log('req *****---->>>', req.query);
  var test = new Test({
    itemId: 1,
    item: req.query.item,
    completed: false
  })
  
  test.save((err, result) => {
    if (err) { console.log("---test save failed " + err) }
    console.log('test *****---->>>', test);
    res.redirect('/');
  });
});


const port = process.env.PORT || 5000;
app.listen(port);

console.log(`Arjun Portfolio listening on ${port}`);
