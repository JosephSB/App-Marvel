const Schema = require("./UserSchema");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const UserModel = () => {};

UserModel.register = async (cb, data) => {
  const newUser = new Schema();
  newUser.ID = data.ID;
  newUser.Username = data.Username;
  newUser.Password = newUser.encryptPassword(data.Password);
  await Schema.create(newUser, (err) => {
    if (err) cb(err);
    else cb();
  });
};

UserModel.signin = async (cb, data) => {
  const searchUser = await Schema.findOne({ Username: data.Username });

  if (!searchUser) {
    cb(false, "EL USUARIO NO EXISTE");
  } else if (!searchUser.comparePassword(data.Password)) {
    cb(false, "DATOS INCORRECTOS");
  } else {
    //si el usuario existe
    const user = {
      ID: searchUser.ID,
      Username: searchUser.Username,
    };
    jwt.sign({ user }, process.env.SECRET_KEY, (err, token) => {
      if (err) cb(false, "Ocurrio un error");
      else cb(true, "LOGIN SUCCESSFUL", token);
    });
  }
};

module.exports = UserModel;
