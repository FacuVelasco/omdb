const router = require("express").Router();

const moviesRoutes = require("./movies");

const { setApiURL } = require("../middlewares/movies");

router.use("/movies", setApiURL, moviesRoutes);
// router.use("/auth", authRoutes);
// router.use('/user', userRoutes)

module.exports = router;
