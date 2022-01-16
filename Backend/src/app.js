const colors = require("colors");
const express = require("express");
const cors = require("cors");

const app = express();

app.set("port", process.env.PORT || 3000);
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("BACK APP_MARVEL");
});
app.use("/api/Users", require("./router/Users"));
app.use("/api/Favs", require("./router/Follows"));

module.exports = app;
