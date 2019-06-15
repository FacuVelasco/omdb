const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

module.exports = {
  setLocalStrategy(field) {
    passport.use(
      new LocalStrategy(
        {
          usernameField: field
        },
        function(value, password, done) {
          User.findOne({ [field]: value })
            .then(user => {
              if (!user || !user.validPassword(password)) {
                return done(null, false, { message: "Incorrect credentials" });
              }
              done(null, user);
            })
            .catch(done);
        }
      )
    );

    passport.serializeUser((user, done) => {
      done(null, user.id);
    });

    passport.deserializeUser((id, done) => {
      User.findById(id)
        .then(user => done(null, user))
        .catch(done);
    });
  }
};
