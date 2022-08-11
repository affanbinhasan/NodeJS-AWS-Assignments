const express = require('express')
const fs = require('fs');

let app = express()
let port = process.argv[2]

dateOfBirth = (agestr) =>{
    let age = parseInt(agestr);
    return 2022-age;

}

app.get('/', function(req, res){
    res.send('Hello World!')
})
app.get('/time',function(req, res){
    const date = new Date();
    let ISOdate = date.toISOString()
    res.send(ISOdate)
})

if(port){
    app.listen(port)
    console.log('Now listening on port ' +port)
}else{
    app.listen(8080)
    console.log('Now listening on port 8080')
}