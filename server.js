const express = require('express');
const bodyParser = require('body-parser');
var fs = require('fs');
var https = require('https');
const app = express();
const port = process.env.PORT || 5000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const rickAndMortyService = require('./services/rickAndMortyService');

app.get('/api/rickandmorty', (req, res,next) => {
  rickAndMortyService.characters()
    .then(data => res.status(200).json(data))
    .catch(error => next(error));
});

https.createServer({
  key: fs.readFileSync('server.key'),
  cert: fs.readFileSync('server.cert')
}, app)

app.listen(port, () => console.log(`Listening on port ${port}`));