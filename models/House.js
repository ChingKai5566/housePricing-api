const mongoose = require('mongoose');

const houseSchema = {
    id: Number,
    user_id: Number,
    address: String,
    post_id: Number,
    regionid: Number,
    region_name: String,
    sectionid: Number,
    streetid: Number,
    type: Number,
    kind: Number,
    floor: Number,
    allfloor: Number,
    room: Number,
    detail_url: String,
    area: Number,
    price: Number,
    cover: String,
    address_img_title: String,
    updatetime: Number,
    refreshtime: Number,
    closed: Number,
    condition: String,
    corordinate_x: Number,
    corordinate_y: Number
};

module.exports = mongoose.model("House", houseSchema);