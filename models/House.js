const mongoose = require('mongoose');
const dateTimeFormat = require('../middleware/dateTimeFormat');

const houseSchema = new mongoose.Schema({
    houseId: Number,
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
    updateTime: String,
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
    coordinateX: Number,
    coordinateY: Number
}, {
    timestamps: {
        createdAt: 'created',
        updatedAt: 'updated'
    }
});

houseSchema.pre('save', async function (next) {
    const time = await dateTimeFormat(this.updateTime);
    this.updateTime = time;
    next();
})

module.exports = mongoose.model("House", houseSchema);