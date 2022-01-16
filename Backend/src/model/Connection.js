const mongoose = require("mongoose");
const configDB = require("./ConfigDB.json");

mongoose
  .connect(`mongodb://${configDB.mongo.host}/${configDB.mongo.database}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((db) =>
    console.log("Database connected successful in port:", db.connection.host)
  )
  .catch((err) => console.error("Database is not connected", err));
/*
mongoose
  .connect("mongodb://db/dbMarvel")
  .then((db) => console.log("Db is open on, ", db.connection.host))
  .catch((err) => console.error(err));
*/
