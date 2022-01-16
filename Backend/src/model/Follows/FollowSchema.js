const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const FollowSchema = new Schema(
  {
    UserID: String,
    CharacterID: String,
  },
  { collection: "follows" }
);

require("../Connection");

const FollowModel = mongoose.model("follows", FollowSchema);

module.exports = FollowModel;
