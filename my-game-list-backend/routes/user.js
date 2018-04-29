
var express = require("express");
var router = express.Router();
var helpers = require("../helpers/user");


router.route("/auth").post(helpers.authenticateUser);
router.route("/auth/checkUser").post(helpers.checkAuth);
router.route("/registerUser").post(helpers.registerUser);

module.exports = router;