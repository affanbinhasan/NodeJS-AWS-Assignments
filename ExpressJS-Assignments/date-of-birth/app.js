const express = require('express')
const fs = require('fs');

let app = express()

dateOfBirth = (agestr) =>{
    let age = parseInt(agestr);
    return 2022-age;

}

app.get('/:age', (req, res)=>{
    
    try {
        res.send('You were born in : ' + dateOfBirth(req.params.age))
    } catch (error) {
        console.log(error.message)
    }
})

app.listen(4000)
console.log('Now listening on port 4000')