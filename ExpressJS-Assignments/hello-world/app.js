const express = require('express')
const fs = require('fs');

let app = express()

app.get('/', function(req, res){
    res.send('Hello World')
})

app.listen(4000)
console.log('Now listening on port 4000')