const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();

const got = require('got');
app.use(express.static(path.join(__dirname, 'build')));

app.get('/breweries', function (req, res) {
    const {query} = req;

    return got('https://api.openbrewerydb.org/breweries', {
        query,
        json: true
    }).then(data => {
        return res.json(data.body);
    });

});

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(process.env.PORT || 8080);
