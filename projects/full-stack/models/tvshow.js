const mongoose = require('mongoose');
const {Schema} = mongoose;

const tvshowSchema = new Schema({
    title: String,
    overview: String,
    release_date: String,
    next_air_date: String,
    genre: String,
    videoUrl: String,
    filename: String

});

module.exports = mongoose.model('TVShow', tvshowSchema);