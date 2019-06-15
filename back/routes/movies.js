const router = require("express").Router();
const axios = require("axios");
const qs = require("qs");

router.get("/", (req, res) => {
  const { s, t, i } = req.query;
  if (!s && !t && !i) return res.sendStatus(400);
  axios
    .get(`${req.API_BASE_URL}&${qs.stringify(req.query)}`)
    .then(({ data }) => {
      if (data.Response === "False") {
        res.sendStatus(404);
      } else {
        res.send(data.Search);
      }
    })
    .catch(err => res.status(500).send(err));
});

module.exports = router;
