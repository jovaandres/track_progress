const mongoose = require('mongoose');

const progressSchema = new mongoose.Schema({
    name: {
        type: String, 
        trim: true,
        required: true
    },
    progress: {
        type: Number,
        required: true,
        default: 0
    }
});

module.exports = mongoose.model('Progress', progressSchema);