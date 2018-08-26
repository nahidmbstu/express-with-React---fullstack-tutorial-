var passport = require("passport");
var GoogleStrategy = require("passport-google-oauth20").Strategy;
var mongoose = require("mongoose");

var Keys = require("../config/keys");

var User = mongoose.model("users");

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => done(null, user));
});

passport.use(
  new GoogleStrategy(
    {
      clientID: Keys.clientID,
      clientSecret: Keys.clientSecret,
      callbackURL: "/auth/google/callback",
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
      let existingUser = await User.findOne({ googleId: profile.id });

      if (existingUser) {
        return done(null, existingUser);
      }

      let user = new User({ googleId: profile.id }).save();
      return done(null, user);
    }
  )
);
