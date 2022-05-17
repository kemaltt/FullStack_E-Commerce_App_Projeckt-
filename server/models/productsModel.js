const mongoose = require('mongoose')

const productsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true,
        min: 0
    },
    num_favorers: {
        type: Number,
        min: 0,
        default: 0
    },
    tags: {
        type: [String],
        default: []
    },
    processing_min: {
        type: Number,
        min: 0,
    },
    processing_max: {
        type: Number,
        min: 0,
    },
    price: {
        type: Number,
        min: 0,
        required: true
    },
    img: {
        type: String,
        default: 'https://mcnairshirts.com/wp-content/uploads/2019/03/mcnair-mens-plasmadry-olive-force-shirt-1500sq.jpg'
    },
    taxonomy_id: {
        type: Number,
        required: true,
        enum: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
    },
    onSale: {
        type: Boolean,
        default: true,
        required: true
    },
    inCard: {
        type: Number,
        min: 0,
        default: 0
    }
})

const Products = mongoose.model('Product', productsSchema)
module.exports = Products;