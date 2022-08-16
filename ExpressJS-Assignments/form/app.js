const express = require('express');
const bodyParser = require('body-parser');
var app = express();

let urlencodedParser = bodyParser.urlencoded({ extended: false});
let port = process.argv[2]

app.set('view engine', 'ejs')
app.use('/assets' , express.static('assets'))


app.get('/form', (req, res) => {
    try {
        res.render('form',{ query:req.query })
    } catch (error) {
        console.log(error.message)
    }
})

app.post('/form', urlencodedParser, (req, res) => {
    console.log(req.body)
    try {
        res.render('form-success',{ obj :req.body })
    } catch (error) {
        console.log(error.message)
    }
    
})

if(port){
    app.listen(port)
    console.log('Now listening on port ' +port)
}else{
    app.listen(8080)
    console.log('Now listening on port 8080')
}