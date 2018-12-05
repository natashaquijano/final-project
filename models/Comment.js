const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
    comment: {
        type: String,
        requried: true,
    },
    user: {
        type: Schema.ObjectId,
        ref: "users",
        required: true
    }

})

module.exports = {
    model: mongoose.model('comments', CommentSchema),
    schema: CommentSchema
}