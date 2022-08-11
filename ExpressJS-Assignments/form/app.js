const express = require('express');
const bodyParser = require('body-parser');
var app = express();

let urlencodedParser = bodyParser.urlencoded({ extended: false});
let port = process.argv[2]

app.set('view engine', 'ejs')
app.use('/assets' , express.static('assets'))


app.get('/form', function(req, res){
    res.render('form',{ query:req.query })
})

app.post('/form', urlencodedParser, function(req, res){
    console.log(req.body)
    res.render('form-success',{ obj :req.body })
})

if(port){
    app.listen(port)
    console.log('Now listening on port ' +port)
}else{
    app.listen(8080)
    console.log('Now listening on port 8080')
}