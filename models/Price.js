const mongoose = require('mongoose');

const priceSchema = new mongoose.Schema({
    houseId: Number,
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    },
    price: Number
});

// Sets the created_at parameter equal to the current time
priceSchema.pre('save', function (next) {
    now = new Date().toLocaleString("en-US", {timeZone: "Asia/Taipei"});;
    this.updatedAt = now;

    if (!this.createdAt) {
        this.createdAt = now
    }
    next();
});

module.exports = mongoose.model("Price", priceSchema);