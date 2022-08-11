const express = require('express')
const fs = require('fs');

let app = express()
let port = process.argv[2]

dateOfBirth = (agestr) =>{
    let age = parseInt(agestr);
    return 2022-age;

}

app.get('/home', function(req, res){
    res.send('Hello World!')
})

app.listen(port)
console.log('Now listening on port ' +port)