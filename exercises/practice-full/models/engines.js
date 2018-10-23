const mongoose = require('mongoose');
const {Schema} = mongoose;

const engineSchema = new Schema({
    carType: String,
    cylinder: Number,
    automatic: Boolean,
    fuelType: {
        type: String,
        enum: ["benzine", "diesel"],
        required: true
    }
});


module.exports = mongoose.model("Engine", engineSchema);