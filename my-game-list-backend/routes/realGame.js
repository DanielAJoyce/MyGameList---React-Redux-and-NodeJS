var express = require("express");
var router = express.Router();
var helpers = require("../helpers/realGame");

router.route("/")
.get(helpers.getAllRealGames)

router.route("/:realgameid")
.get(helpers.getRealGame)

module.exports = router;
