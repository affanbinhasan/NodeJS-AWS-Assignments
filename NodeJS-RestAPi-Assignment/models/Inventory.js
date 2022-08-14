const mongoose = require('mongoose')

let Inventory = mongoose.model('Inventory', {
    name: {
        type: String,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    }
})

module.exports = Inventory;