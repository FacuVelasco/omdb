const router = require("express").Router();

const moviesRoutes = require("./movies");
const authRoutes = require("./auth");
const usersRoutes = require("./users");
const { setApiURL } = require("../middlewares/movies");

router.use("/movies", setApiURL, moviesRoutes);
router.use("/auth", authRoutes);
router.use("/users", usersRoutes);

module.exports = router;
