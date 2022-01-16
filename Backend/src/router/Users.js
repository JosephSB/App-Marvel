const express = require("express");
const router = express.Router();
const UsersControllers = require("../controller/UsersController");

router.post("/register", UsersControllers.register);
router.post("/signin", UsersControllers.signin);

module.exports = router;
