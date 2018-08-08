// require('dotenv').config();
const express = require('express');
const path = require('path');

const app = express();

const api = require('./routes/api');
const bodyParser = require('body-parser');

//configuring bodyparser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));
  
app.use('/api', api);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/public/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`Arjun Portfolio listening on ${port}`);
