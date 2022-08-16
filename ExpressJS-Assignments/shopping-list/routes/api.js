const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const ShopItem = require('../models/ShopItem');

const app = express();
const router = express.Router();
router.use(bodyParser.json())

app.get('/', (req, res)=>{

    ShopItem.find({}).then((items)=>{
        if(items){
            res.send(items);
        }else{
            res.send('No items Avalaible currently. Sorry for Inconvenience');
        }
    }).catch((err)=>{
        res.send(err.message)
    })
})

app.get('/:id', (req, res)=>{
    ShopItem.findOne({_id:req.params.id})
    .then((item)=>{
        if(item){
            res.send(item);
        }else{
            res.send('No item Avalaible for this id');
        }
    })
    .catch((err)=>{
        res.send(err.message)    
    })
})

app.post('/', (req, res)=>{
    ShopItem.create(req.body)
    .then((item)=>{
        ShopItem.findOne({name:req.body.name})
        .then((item)=>{
            res.send(item)
        })
        .catch((err)=>{
            res.send('Couldnt Post your request' )
        })
    })
    .catch((err)=>{
        res.send(err.message)
    })
})

app.put('/:id', (req, res)=>{
    ShopItem.findByIdAndUpdate({_id:req.params.id},req.body)
    .then(()=>{
        ShopItem.findOne({name:req.params.item}).then(function(item){
            res.send(item)
        }) 
    })
    .catch((err)=>{
        res.send(err.message)    })
})

app.delete('/:id', (req, res)=>{
    ShopItem.deleteOne({_id:req.params.id})
    .then(()=>{
        res.send("Item sucessfully removed")
    })
    .catch((err)=>{
        res.send(err.message)
    })
})