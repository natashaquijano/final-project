const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const CommentSchema = require('./Comment').schema

// User Schema

const ProductSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    subtitle: {
        type: String,
    },
    description: {
        type: String,
    },
    genre: {
        type: String,
    },
    address: {
        type: String,
    },
    doors: {
        type: String,
    },
    show: {
        type: String,
    },
    image: {
        type: String,
        required: true,
    },
    likes: [{ type: String, ref: 'users' }],
    comments: [CommentSchema],
    productType: {
        type: String,
        required: true,
    }
});

module.exports = Product = mongoose.model('products', ProductSchema);