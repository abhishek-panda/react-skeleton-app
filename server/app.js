const path = require('path');
const express = require('express');
const app = express();

app.use('/',express.static(path.join(__dirname, '..','dist')));

app.listen(7777, function() {
  console.log("Listening on port 7777")
});