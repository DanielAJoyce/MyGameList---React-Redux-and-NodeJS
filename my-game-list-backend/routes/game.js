var express = require("express");
var router = express.Router();
var helpers = require("../helpers/game");

router.route("/:userid")
.get(helpers.getAllGamesUserOwns)

router.route("/:userid/:gameid")
.delete(helpers.deleteGameFromList)
.post(helpers.addGameToList)
.get(helpers.getUserGameDetails)
.put(helpers.editUserGame)

module.exports = router;
