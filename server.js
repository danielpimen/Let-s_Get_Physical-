const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3001;
const app = express();

// Body parser middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const db = require('./config/keys').mongoURI;
//Connect to MongoDB
mongoose
  .connect(db)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

// Send every request to the React app
// Define any API routes before this runs
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, './client/build/index.html'));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
