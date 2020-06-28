const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require('body-parser');

const app = express();

//Database connection
mongoose.connect(
  "mongodb://localhost:27017/coffe_shop",
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Connected to the database");
    }
  }
);
// Middleware
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


//Routes
const productRoute = require("./api/routes/products");
const orderRoute = require("./api/routes/orders");

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Hello from the express app!",
  });
});

app.use("/products", productRoute);
app.use("/orders", orderRoute);

module.exports = app;
