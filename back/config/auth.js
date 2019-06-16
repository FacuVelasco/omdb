const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const { User } = require("../models");

module.exports = {
  setLocalStrategy(field) {
    passport.use(
      new LocalStrategy(
        {
          usernameField: field
        },
        function(value, password, done) {
          User.findOne({ where: { [field]: value } })
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
      User.findByPk(id)
        .then(user => done(null, user))
        .catch(done);
    });
  }
};
