var express = require("express");
var mongoose = require("mongoose");
var Keys = require("./config/keys");
var cookieSession = require("cookie-session");
var passport = require("passport");
const authRoute = require("./routes/authRoutes");

require("./models/User");
require("./services/passport");

mongoose.Promise = global.Promise;
mongoose.connect(Keys.mongoURI);

var app = express();

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [Keys.cookieKey]
  })
);

app.use(passport.initialize());
app.use(passport.session());

// app.get("/", (req, res, next) => {
//   res.send({ Name: "Nahid" });
// });

require("./routes/authRoutes")(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
