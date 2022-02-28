var express = require("express");
var logger = require("morgan");
var mongoose = require("mongoose");

//connect to database
mongoose.connect("mongodb://127.0.0.1:27017/sample", (err) => {
  console.log(err ? err : "Connected to Database");
});

//instance the app
var app = express();

//middleware
app.use(logger("dev"));

//router
app.get("/", (req, res) => {
  res.send("Welcome");
});

//error handler
app.use((req, res, next) => {
  res.send("Page Not Found");
});

//listener
app.listen(3000, () => {
  console.log("Server listening to port 3k");
});