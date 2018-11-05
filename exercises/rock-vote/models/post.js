const mongoose = require('mongoose');
const {Schema} = mongoose;

const postSchema = new Schema({
        title: String,
        body: String,
        upVote: Number,
        downVote: Number,
        comment: String,


});

module.exports = mongoose.model('Post', postSchema);