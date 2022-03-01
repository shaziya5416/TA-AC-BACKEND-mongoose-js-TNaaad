var express = require("express");
var mongoose = require("mongoose");

//connect to database
mongoose.connect("mongodb://localhost/sample", (err) => {
  console.log(err ? err : "Connected to Database");
});

//instance the app
var app = express();

//router
app.get("/", (req, res) => {
  res.send("Welcome");
});

//listener
app.listen(3000, () => {
  console.log("Server listening to port 3k");
});