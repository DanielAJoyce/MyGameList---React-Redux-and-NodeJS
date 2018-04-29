var db = require("../models");

exports.getAllGamesUserOwns = function(req,res){
  console.log("This is the route for all of the users games");
}
exports.deleteGameFromList = function(req,res){
  console.log("Route for deleting a game from list");
}
exports.addGameToList = function(req,res){
  console.log("Adds game to user's list");
}
exports.getUserGameDetails = function(req,res){
  console.log("gets details about specific game user owns");
}
exports.editUserGame = function(req,res){
  console.log("This will edit the currently owned game for user");
}

module.exports = exports;