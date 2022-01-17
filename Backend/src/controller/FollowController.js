const FollowModel = require("../model/Follows/FollowModel");
const jwt = require("jsonwebtoken");

const FollowController = () => {};

FollowController.follow = (req, res) => {
  if (Object.keys(req.params).length == 1) {
    //verifico si el token existe
    jwt.verify(req.token, process.env.SECRET_KEY, (error, authData) => {
      if (error) {
        res.json({ message: "NO ESTAS REGISTRADO", error: true });
      } else {
        const data = {
          UserID: authData.user.ID,
          CharacterID: req.params.CharacterID,
        };

        FollowModel.FindFollows(data)
          .then((results) => {
            if (results.length >= 1) return FollowModel.removeFollow(data);
            else return FollowModel.saveFollow(data);
          })
          .then((message) =>
            res.json({
              message: message,
              error: false,
            })
          )
          .catch((err) =>
            res.json({
              message: "Ocurrio un error",
              error: true,
            })
          );
      }
    });
  } else res.json({ message: "Enviaste datos incompletos", error: true });
};

FollowController.VefifyFollowInCharacter = (req, res) => {
  jwt.verify(req.token, process.env.SECRET_KEY, (error, authData) => {
    if (error) {
      res.json({ message: "NO ESTAS REGISTRADO", error: true });
    } else {
      const data = {
        UserID: authData.user.ID,
        CharacterID: req.params.CharacterID,
      };

      FollowModel.FindFollows(data)
        .then((results) => {
          if (results.length === 0)
            res.json({
              message: "Este personaje no es el favorito de este usuario",
              error: false,
              fav: false,
            });
          else {
            res.json({
              message: "Este personaje es favorito de este usuario",
              error: false,
              fav: true,
            });
          }
        })
        .catch((err) =>
          res.json({
            message: "Ocurrio un error",
            error: true,
          })
        );
    }
  });
};

FollowController.getMyFollows = (req, res) => {
  jwt.verify(req.token, process.env.SECRET_KEY, (error, authData) => {
    if (error) {
      res.json({ message: "NO ESTAS REGISTRADO", error: true });
    } else {
      const data = {
        UserID: authData.user.ID,
      };

      FollowModel.FindFollows(data)
        .then((results) => {
          if (results.length === 0)
            res.json({
              message: "No tienes personajes favoritos",
              error: false,
              results: results,
            });
          else {
            res.json({
              message: "Se encontraron tus personajes favoritos ",
              error: false,
              results: results,
            });
          }
        })
        .catch((err) =>
          res.json({
            message: "Ocurrio un error",
            error: true,
          })
        );
    }
  });
};
module.exports = FollowController;
