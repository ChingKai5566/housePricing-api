const express = require('express');
const {
    getHouses,
    postHouse,
    deleteHouse
} = require('../controllers/house');

const House = require('../models/House');

const router = express.Router();

router
    .route('/house')
    .get(getHouses)
    .post(postHouse)
    .delete(deleteHouse);

module.exports = router;