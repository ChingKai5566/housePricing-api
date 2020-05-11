const mongoose = require('mongoose');

const priceSchema = new mongoose.Schema({
    houseId: Number,
    price: Number
}, {timestamps: {createdAt: 'created', updatedAt: false}});

module.exports = mongoose.model("Price", priceSchema);