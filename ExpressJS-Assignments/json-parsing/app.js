const fs = require('fs')
const express = require('express')
const bodyParser = require('body-parser')
const app = express();

app.get('/', (req, res)=>{
    try {
        let content = fs.readFileSync('readme.txt','utf8')
        try {
            res.send(JSON.parse(content))
        } catch (error) {
            res.send('Json Parsing Error')
        }
    } catch (error) {
        res.send('Error while reading file')
    }

    
})




app.listen(4000,()=>{
    console.log('Successfully Running on port 4000')
})