const UserModel = require("../model/Users/UserModel");
const UserValidate = require("../helpers/validateUser");
require("dotenv").config();

const UsersControllers = () => {};

UsersControllers.register = async (req, res) => {
  let validate = false;
  let errors = [];
  if (Object.keys(req.body).length == 3) {
    const result = await UserValidate.validateAll(req.body);
    validate = result.operation;
    errors = result.errors.slice();

    if (validate) {
      const newUser = {
        ID: Date.now(),
        Username: req.body.Username,
        Password: req.body.Password,
      };

      UserModel.register((err) => {
        if (err)
          res.json({
            message: "Algo salio mal en la base de datos",
            error: true,
          });
        else
          res.json({
            message: "Usted se resgistro Exitosamente",
            error: false,
          });
      }, newUser);
    } else {
      res.json({
        message: "Los Datos no son lo suficiente seguros",
        error: true,
        infoErrors: errors,
      });
    }
  } else {
    res.json({
      message: "Enviaste datos incompletos",
      error: true,
      infoErrors: errors,
    });
  }
};

UsersControllers.signin = (req, res) => {
  if (Object.keys(req.body).length == 2) {
    UserModel.signin((value, message, token) => {
      if (value) res.json({ message, error: false, token });
      else res.json({ message, error: true });
    }, req.body);
  } else res.json({ message: "Usted no envio datos suficientes", error: true });
};

module.exports = UsersControllers;
