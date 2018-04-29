var express = require("express");
var router = express.Router();
var helpers = require("../helpers/gameList");

router.route("/:userid")
.get(helpers.getUserGameList)

module.exports = router;
