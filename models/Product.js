const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// User Schema

const ProductSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    image: {
        type: String,
        required: true,
    },
    likes: [{ type: Number, ref: 'users' }],
    productType: {
        type: String,
        required: true,
    }
});

module.exports = Product = mongoose.model('products', ProductSchema);