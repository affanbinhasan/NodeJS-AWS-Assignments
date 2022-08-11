const express = require('express');

var app = express();


app.use('/public' , express.static('public'))

app.listen(4000)
console.log('Now listening on port 4000')
