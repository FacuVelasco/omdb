const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

require("dotenv").config();

const routes = require("./routes");

const app = express();

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "public")));

app.use("/api", routes);

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

const port = process.env.PORT;

app.listen(port, () => console.log(`server listening at port ${port}`));
