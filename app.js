//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');

const app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));

mongoose.connect("mongodb://localhost:27017/housedataDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});

// House Data Schema
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
  condition: String
};

const House = mongoose.model("House", houseSchema);

app.use(express.json());


app.route("/house")

  // request all houses
  .get(function(req, res) {
    if (checkToken(req.headers.token)) {
      House.find(function(err, foundHouse) {
        if (!err) {
          res.send(foundHouse);
        } else {
          res.send(err);
        }
      });
    } else {
      res.sendStatus(401);
    }
  })

  // save new house
  .post(function(req, res) {
    if (checkToken(req.headers.token)) {
      const newHouse = new House(req.body);
      newHouse.save(function(err) {
        if (!err) {
          res.send("Successfully added a new house.");
        } else {
          res.send(err);
        }
      });
    } else {
      res.sendStatus(401);
    }

  })

  // delete all houses
  .delete(function(req, res) {
    if (checkToken(req.headers.token)) {
      House.deleteMany(function(err) {
        if (!err) {
          res.send("Successfully deleted all houses.");
        } else {
          res.send(err);
        }
      });
    } else {
      res.sendStatus(401);
    }
  });

  let port = process.env.PORT;
  if (port == null || port == "") {
    port = 3000;
  }

  app.listen(port, function() {
    console.log("Server started Successfully!");
  });

function checkToken(token) {
  if (token === "crawl591coronavirusisfromwuhan") {
    return true;
  }

  return false;
}
