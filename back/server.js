const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const passport = require("passport");
const volleyball = require("volleyball");

require("dotenv").config();

const routes = require("./routes");
const auth = require("./config/auth");
const db = require("./config/db");

const app = express();

app.use(bodyParser.json());
app.use(cookieParser());

auth.setLocalStrategy("email");
app.use(session({ secret: "pochoclo" }));
app.use(passport.initialize());
app.use(passport.session());

app.use(volleyball);

app.use(express.static(path.join(__dirname, "public")));

app.use("/api", routes);

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

const port = process.env.PORT;

db.sync({ force: false })
  .then(connection => {
    const { database, username } = connection.config;
    console.log(
      `${username} connection was successfully established - ${database} DB`
    );
    app.listen(port, () => console.log(`server listening at port ${port}`));
  })
  .catch(err => {
    console.log("DB sync failed", err);
  });
