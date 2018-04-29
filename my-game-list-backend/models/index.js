var mongoose = require("mongoose");

mongoose.set("debug", true);

mongoose.Promise = Promise;

module.exports.User = require("./User");
module.exports.Game = require("./Game");
module.exports.RealGame = require("./RealGame");
module.exports.GameList = require("./GameList");