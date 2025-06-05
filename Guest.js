const mongoose = require('mongoose');

const guestSchema = new mongoose.Schema({
    guestName: String,
    guestMsg: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Guest', guestSchema); 