const express = require('express');
const {
    getPrices,
    getPrice
} = require('../controllers/price');

const Price = require('../models/Price');

const router = express.Router();

router
    .route('/price')
    .get(getPrices);

router
    .route('/price/:houseId')
    .get(getPrice);

module.exports = router;