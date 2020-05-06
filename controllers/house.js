const House = require('../models/House');
const Price = require('../models/Price');

// @desc      Get all houses
// @route     GET /house
// @access    Public
exports.getHouses = function (req, res) {
    if (checkToken(req.headers.token)) {
        House.find(function (err, foundHouse) {
            if (!err) {
                res.send(foundHouse);
            } else {
                res.send(err);
            }
        });
    } else {
        res.sendStatus(401);
    }
}

// @desc      Create or update new House and create Price
// @route     POST /house
// @access    Public
exports.postHouse = function (req, res) {
    if (checkToken(req.headers.token)) {
        const newPrice = Price.create(req.body);

        House.exists({
                houseId: req.body.houseId
            })
            .then(exists => {
                if (exists) {
                    House.findOneAndUpdate({
                        houseId: req.body.houseId
                    }, req.body, {
                        upsert: true
                    }, function (err, doc) {
                        if (err) {
                            res.send(500, {
                                error: err
                            });
                        } else {
                            res.send('Successfully updated.');
                        }
                    });
                } else {
                    const newHouse = House.create(req.body);

                    res.send("Successfully added a new house.");
                }
            })
    } else {
        res.sendStatus(401);
    }
}

// @desc      Delete Houses
// @route     DELETE /house
// @access    Public
exports.deleteHouse = function (req, res) {
    if (checkToken(req.headers.token)) {
        House.deleteMany(function (err) {
            if (!err) {
                res.send("Successfully deleted all houses.");
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