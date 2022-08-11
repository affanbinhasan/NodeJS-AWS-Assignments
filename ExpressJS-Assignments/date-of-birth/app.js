const express = require('express')
const fs = require('fs');

let app = express()

dateOfBirth = (agestr) =>{
    let age = parseInt(agestr);
    return 2022-age;

}

app.get('/:age', function(req, res){
    res.send('You were born in : ' + dateOfBirth(req.params.age))
})

app.listen(4000)
console.log('Now listening on port 4000')