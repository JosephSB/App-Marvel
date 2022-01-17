const express = require("express");
const router = express.Router();
const FollowController = require("../controller/FollowController");

router.get("/changefollow/:CharacterID", verifyToken, FollowController.follow);
router.get(
  "/VefifyFollowInCharacter/:CharacterID",
  verifyToken,
  FollowController.VefifyFollowInCharacter
);
router.get("/getMyFollows", verifyToken, FollowController.getMyFollows);

//funcion que verifica si mando un token y lo guarda en el req
function verifyToken(req, res, next) {
  const bearerHeader = req.headers["authorization"];

  if (typeof bearerHeader !== "undefined") {
    const bearerToken = bearerHeader.split(" ")[1];
    req.token = bearerToken;
    next();
  } else {
    res.sendStatus(403);
  }
}

module.exports = router;
