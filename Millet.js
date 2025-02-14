const mongoose = require('mongoose');

const milletSchema = new mongoose.Schema({
    name: String,
    type: String,
    price: Number,
    description: String
});

const Millet = mongoose.model('Millet', milletSchema);

module.exports = Millet;
