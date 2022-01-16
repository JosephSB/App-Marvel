const mongoose = require("mongoose");
const bcrypt = require("bcrypt-nodejs");

const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    ID: String,
    Username: String,
    Password: String,
  },
  { collection: "users" }
);

UserSchema.methods.encryptPassword = (Password) => {
  return bcrypt.hashSync(Password, bcrypt.genSaltSync(10));
};
UserSchema.methods.comparePassword = function (Password) {
  return bcrypt.compareSync(Password, this.Password);
};

require("../Connection");
const UserModel = mongoose.model("users", UserSchema);

module.exports = UserModel;
