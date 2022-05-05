const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    longTitle: {
        type: String,
        required: true,
    },
    quote: {
        type: String,
    },
    caption: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    path: {
        type: String,
        required: true,
    },
    isFeatured: {
        type: Boolean,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    
})
module.exports = mongoose.model('productModel', productSchema)