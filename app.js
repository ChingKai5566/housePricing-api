const express = require("express");

const dotenv = require('dotenv');
const connectDB = require('./config/db');

// Load env vars
dotenv.config({
  path: './config/config.env'
});

// Connect to database
connectDB();

const app = express();

// Route files
const houses = require('./routes/house');
const prices = require('./routes/price');

// Body parser
app.use(express.json());

// Mount routers
app.use('/', houses);
app.use('/', prices);

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}

app.listen(port, function () {
  console.log("Server started Successfully!");
});