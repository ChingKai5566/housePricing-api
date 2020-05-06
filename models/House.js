const mongoose = require('mongoose');

const houseSchema = new mongoose.Schema({
    houseId: Number,
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    },
    userId: Number,
    postId: Number,
    regionId: Number,
    regionName: String,
    sectionId: Number,
    streetId: Number,
    type: Number,
    kind: Number,
    floor: Number,
    allFloor: Number,
    room: Number,
    area: Number,
    price: Number,
    cover: String,
    updateTime: Number,
    closed: Number,
    condition: String,
    sectionName: String,
    fullAddress: String,
    streetName: String,
    alleyName: String,
    caseName: String,
    layout: String,
    caseId: Number,
    iconClass: String,
    kindName: String,
    corordinateX: Number,
    corordinateY: Number
});

// Sets the created_at parameter equal to the current time
houseSchema.pre('save', function (next) {
    now = new Date().toLocaleString("en-US", {timeZone: "Asia/Taipei"});;
    this.updatedAt = now;
    
    if (!this.createdAt) {
        this.createdAt = now;
    }
    next();
});

module.exports = mongoose.model("House", houseSchema);