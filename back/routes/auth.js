const router = require("express").Router();
const passport = require("passport");

const { User } = require("../models");

router.post("/register", (req, res) => {
  User.create(req.body)
    .then(user => {
      res.status(201).send(user);
    })
    .catch(err => {
      res.sendStatus(400);
    });
});

router.post("/login", passport.authenticate("local"), (req, res) => {
  res.send(req.user);
});

router.post("/logout", (req, res) => {
  if (req.isAuthenticated()) {
    req.logout();
    res.sendStatus(204); // No content
  } else {
    res.sendStatus(401); // Unauthorized
  }
});

module.exports = router;
