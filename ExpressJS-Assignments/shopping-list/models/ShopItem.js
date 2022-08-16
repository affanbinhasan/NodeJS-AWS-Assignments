const mongoose = require('mongoose')

let ShopItem = mongoose.model('ShopItem', {
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    }
})

module.exports = ShopItem;