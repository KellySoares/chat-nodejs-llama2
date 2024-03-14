const express = require('express');
const app = express();
const http = require('http').createServer(app);

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

const { msgSocket } = require('./service/messageSocket');
msgSocket(http)

const port = process.env.PORT || 5000;
http.listen(port, () => {
    console.log(`Listening on port ${port}`);
});