const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const Inventory = require('../models/Inventory')

const app = express();
const router = express.Router();
router.use(bodyParser.json())

router.get('/', (req,res)=>{
    Inventory.find({})
    .then((fruits)=>{
        res.send(fruits)
    }).catch((err)=>{
        console.log(err.message)
    })
})

router.get('/:item', (req,res)=>{
    Inventory.find({ name : req.params.item})
    .then((item)=>{
        if(item){
            res.status(200).send(item)
        }else{
            res.send(' no item found')
        }
    })
})

router.post('/', (req,res)=>{
    console.log(req.body)
    Inventory.create(req.body)
    .then((item)=>{
        res.status(201).send(item)
    })
    .catch((err)=>{
        console.log(err.message);
    })
})

router.put('/', (req,res)=>{
    req.body.forEach((item)=>{
        Inventory.findOneAndUpdate({name:item.name}, item)
    })
})

router.put('/:item', (req,res)=>{
    Inventory.findOneAndUpdate({name:req.params.item}, req.body)
    .then(function(){
        Inventory.findOne({name:req.params.item}).then(function(item){
            res.send(item)
        }) 
    })
    .catch((err)=>{
        console.log(err.message)
    })
})

router.delete('/', (req,res)=>{
    Inventory.deleteMany()
    .then((item)=>{
        res.send('All items deleted')
    })
    .catch((err)=>{
        console.log(err.message)
    })
})

router.delete('/:item', (req,res)=>{
    Inventory.deleteOne({ name: req.params.item})
    .then((item)=>{
        res.send('item deleted')
    })
    .catch((err)=>{
        console.log(err.message)
    })
})



module.exports = router;