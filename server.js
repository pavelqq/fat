const path = require('path');
const express = require('express');

const app = express();
const port = process.env.PORT || 5000;

app.use(express.static('build'));
app.get('*', function (req, res) {
    res.sendFile('index.html');
});

app.listen(port, () => {
    console.log('Сервер запущен!');
});