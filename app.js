var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const bodyParser = require("body-parser");

var newUser = require("./routes/addUser");
var usersRouter = require("./routes/userPage");
var home = require("./routes/home");
var app = express();
var login = require("./routes/login");
app.use(express.json());

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/newUser", newUser);
app.use("/", home);

app.use("/userPage", usersRouter);
app.use("/login", login);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});
let userModel = require("./mongo");

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
