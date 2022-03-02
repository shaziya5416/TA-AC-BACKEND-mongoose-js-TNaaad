var express = require("express");
var mongoose = require("mongoose");
var User = require("./models/user");
var Article = require("./models/article");
var Comment = require("./models/comment");

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

app.post("/articles", (req, res, next) => {
  Article.create(req.body, (err, article) => {
    next(err);
    res.json(article);
  });
});

app.post("/comments", (req, res, next) => {
  Comment.create(req.body, (err, comment) => {
    next(err);
    res.json(comment);
  });
});

//READ
app.get("/users", (req, res, next) => {
  User.find({}, (err, user) => {
    next(err);
    res.json({ user: user });
  });
});

app.get("/comments", (req, res, next) => {
  Comment.find({}, (err, comment) => {
    next(err);
    res.json({ comment: comment });
  });
});

app.get("/articles", (req, res, next) => {
  Article.find({}, (err, article) => {
    next(err);
    res.json({ article: article });
  });
});

//UPDATE
app.put("/users/:id", (req, res, next) => {
  var id = req.params.id;
  User.findByIdAndUpdate(id, req.body, { new: true }, (err, updateduser) => {
    next(err);
    res.json(updateduser);
  });
});

app.put("/articles/:id", (req, res, next) => {
  var id = req.params.id;
  Article.findByIdAndUpdate(
    id,
    req.body,
    { new: true },
    (err, updatedarticle) => {
      next(err);
      res.json(updatedarticle);
    }
  );
});

app.put("/comments/:id", (req, res, next) => {
  var id = req.params.id;
  Comment.findByIdAndUpdate(
    id,
    req.body,
    { new: true },
    (err, updatedcomment) => {
      next(err);
      res.json(updatedcomment);
    }
  );
});

//DELETE
app.delete("/users/:id", (req, res, next) => {
  var id = req.params.id;
  User.findByIdAndDelete(id, (err, deleteduser) => {
    next(err);
    res.send(`${deleteduser.title} was deleted`);
  });
});

app.delete("/articles/:id", (req, res, next) => {
  var id = req.params.id;
  Article.findByIdAndDelete(id, (err, deletedarticle) => {
    next(err);
    res.send(`${deletedarticle.title} was deleted`);
  });
});

app.delete("/comments/:id", (req, res, next) => {
  var id = req.params.id;
  Comment.findByIdAndDelete(id, (err, deletedcomment) => {
    next(err);
    res.send(`${deletedcomment.title} was deleted`);
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