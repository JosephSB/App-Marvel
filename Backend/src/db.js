const mongoose = require("mongoose");

mongoose
  .connect("mongodb://db/dbMarvel")
  .then((db) => console.log("Db is open on, ", db.connection.host))
  .catch((err) => console.error(err));
