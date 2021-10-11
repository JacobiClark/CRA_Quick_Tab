var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");
require("dotenv").config();
const mongoose = require("mongoose");
const User = require("./models/user");

var testAPIRouter = require("./routes/testAPI");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

var app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(cors());

const dbURI = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.uebxd.mongodb.net/QuickTab?retryWrites=true&w=majority`;
mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .catch((err) => console.log(err));
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.get("/add-user", (req, res) => {
  const user = new User({
    email: "foo@gmail.com",
    password: "foobea!2s",
    email_verified: false,
    saved_search_sites: ["google", "facebook"],
  });
  user
    .save()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.post("/updateSites", async (request, response) => {
  /*var username = req.body.username;*/
  User.updateOne(
    { email: "jacobcs@zoho.com" },
    { $set: { saved_search_sites: ["fo", "baz"] } },
    function (err) {
      console.log(err);
      if (!err) {
        return res.json({ status: "success", message: "username updated" });
      }
    }
  );
});

app.post("/update/:id", function (req, res) {
  /*var username = req.body.username;*/
  User.updateOne(
    { email: "jacobcs@zoho.com" },
    { $set: { saved_search_sites: ["fo", "baz"] } },
    function (err) {
      if (!err) {
        return res.json({ status: "success", message: "username updated" });
      }
    }
  );
});

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/testAPI", testAPIRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
