const Price = require('../models/Price');

// @desc      Get all houses' prices
// @route     GET /price
// @access    Public
exports.getPrices = function (req, res) {
    if (checkToken(req.headers.token)) {
        Price.find(function (err, foundPrice) {
            if (!err) {
                res.send(foundPrice);
            } else {
                res.send(err);
            }
        });
    } else {
        res.sendStatus(401);
    }
}

// @desc      Get single house's prices
// @route     GET /price/:houseId
// @access    Public
exports.getPrice = function (req, res) {
    if (checkToken(req.headers.token)) {
        Price.find({ houseId: req.params.houseId }, function (err, foundPrice) {
            if (!err) {
                res.send(foundPrice);
            } else {
                res.send(err);
            }
        });
    } else {
        res.sendStatus(401);
    }
}

function checkToken(token) {
    if (token === `${process.env.TOKEN}`) {
        return true;
    }

    return false;
}