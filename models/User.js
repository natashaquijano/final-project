const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// User Schema

const UserSchema = new Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    avatar: {
        type: String,
    },
    followers: [{ type: String, ref: 'users' }],
    following: [{ type: String, ref: 'users' }],
    wishlist: [{ type: String, ref: 'products' }],
    likes: [{ type: String, ref: 'products' }],
    Date: {
        type: Date,
        default: Date.now,
    },
});

module.exports = User = mongoose.model('users', UserSchema);