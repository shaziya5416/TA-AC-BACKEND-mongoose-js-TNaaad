var express = require("express");
var mongoose = require("mongoose");
var User = require("./models/user");

//connect to database
mongoose.connect("mongodb://localhost/sample", (err) => {
  console.log(err ? err : "Connected to Database");
});

//instance the app
var app = express();

//middleware
app.use(express.json());

//router
app.get("/", (req, res) => {
  res.send("Welcome");
});

//CREATE
app.post("/users", (req, res, next) => {
  User.create(req.body, (err, user) => {
    next(err);
    res.json(user);
  });
});

//READ
app.get("/users/:id", (req, res, next) => {
  var id = req.params.id;
  User.find({ id: id }, (err, user) => {
    next(err);
    res.json(user);
  });
});

app.get("/users", (req, res, next) => {
  User.findOne({ id: "61fbb083ca8281d74a8efafd" }, (err, user) => {
    next(err);
    res.json(user);
  });
});

app.get("/users/:id", (req, res, next) => {
  var id = req.params.id;
  User.findById(id, (err, user) => {
    next(err);
    res.json(user);
  });
});

//UPDATE
app.put("/users", (req, res, next) => {
  User.updateOne(
    { name: "John" },
    req.body,
    { new: true },
    (err, updateduser) => {
      next(err);
      res.json(updateduser);
    }
  );
});

app.put("/users", (req, res, next) => {
  User.update(
    { sports: "Cricket" },
    req.body,
    { new: true },
    (err, updateduser) => {
      next(err);
      res.json(updateduser);
    }
  );
});

app.put("/users/:id", (req, res, next) => {
  var id = req.params.id;
  User.findByIdAndUpdate(id, req.body, { new: true }, (err, updateduser) => {
    next(err);
    res.json(updateduser);
  });
});

//DELETE
app.delete("/users/:id", (req, res, next) => {
  var id = req.params.id;
  User.findByIdAndDelete(id, (err, deleteduser) => {
    next(err);
    res.send(`${deleteduser.title} was deleted`);
  });
});

app.delete("/users", (req, res, next) => {
  var id = req.params.id;
  User.findOneAndDelete({ category: "phone" }, (err, deleteduser) => {
    next(err);
    res.send(`${deleteduser.title} was deleted`);
  });
});

//Error handle middleware
app.use((err, req, res, next) => {
  res.send(err);
});

//listener
app.listen(3000, () => {
  console.log("Server listening to port 3k");
});