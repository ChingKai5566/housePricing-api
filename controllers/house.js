const House = require('../models/House');

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

// @desc      Create or update new House
// @route     POST /house
// @access    Public
exports.postHouse = function (req, res) {
    console.log(req.body);
    if (checkToken(req.headers.token)) {
        House.exists({
            id: req.body.id
        }).then(exists => {
            if (exists) {
                House.findOneAndUpdate({
                    id: req.body.id
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
                const newHouse = new House(req.body);
                newHouse.save(function (err) {
                    if (!err) {
                        res.send("Successfully added a new house.");
                    } else {
                        res.send(err);
                    }
                });
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