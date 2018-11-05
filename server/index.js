const express = require('express');
const fs = require('fs');
const https = require('https');

const app = express();
const path = require('path');

const PORT = process.env.PORT || 5000;
const { IS_SECURE } = process.env;

app.use(express.static(path.resolve(__dirname, '../build')));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../build', 'index.html'));
});

const runningApp = IS_SECURE ? https.createServer({
    key: fs.readFileSync('./cert/server.key'),
    cert: fs.readFileSync('./cert/server.cert'),
}, app) : app;

runningApp.listen(PORT, () => {
    console.log('Node app is running on port', PORT);
});
