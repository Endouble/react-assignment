const express = require('express');
const fs = require('fs');
const https = require('https');

const app = express();
const path = require('path');

const PORT = process.env.PORT || 5000;

app.use(express.static(path.resolve(__dirname, '../build')));

// views is directory for all template files

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../build', 'index.html'));
});

https.createServer({
    key: fs.readFileSync('./cert/server.key'),
    cert: fs.readFileSync('./cert/server.cert'),
}, app)
    .listen(PORT, () => {
        console.log('Node app is running on port', PORT);
    });
