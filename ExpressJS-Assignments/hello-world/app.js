const express = require('express')
const fs = require('fs');

let app = express()

app.get('/', (req, res) => {
    try {
        res.send('Hello World')
    } catch (error) {
        console.log(error.message)
    }
    
})

app.listen(4000)
console.log('Now listening on port 4000')