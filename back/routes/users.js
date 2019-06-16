const router = require("express").Router();

const { User } = require("../models");

router.get("/me", (req, res) => {
  if (req.isAuthenticated()) {
    res.send(req.user);
  } else {
    res.sendStatus(401); // Unauthorized
  }
});

router.post("/logout", (req, res) => {});

module.exports = router;
