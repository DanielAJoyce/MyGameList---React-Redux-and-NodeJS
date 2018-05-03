var db = require("../models");
var tokenFunctions = require("./user");
var jwt = require("jsonwebtoken");
var mongoose = require("mongoose");

exports.getAllGamesUserOwns = function(req,res){
  console.log("This is the route for all of the users games");


}
exports.deleteGameFromList = function(req,res){
  console.log("Route for deleting a game from list");
}

function getUserIdFromToken(){

}

exports.addGameToList = function(req,res){
  console.log("Adds game to user's list");

  var singularGameId = req.params.gameid;
  
  var userToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOiI1YWU3MGZiYzY2YzU0YjA4MTRhYzVlZjgiLCJpYXQiOjE1MjUyNjM1NTcsImV4cCI6MTUyNTM0OTk1N30.rb_qEk7yMVaq35dlCVqvx-ktzr9iJXFfC8iMelNqBI4";
  userId = jwt.decode(userToken, {complete:true});
  userId = userId.payload.userid;

  console.log(userId);

  // I should really check that the gameID exists within the application
  // Will be a best endeavors.
  db.RealGame.findOne({realgameid:singularGameId}, function(err, realGame){
    if(err){
      console.log(err);
      res.status(500).json({message:"error"});
    }else{
      //console.log(realGame);
      var game = new db.Game({
        name:realGame.name,
        singulargameid:realGame.id,
        state: req.body.state,
        ownerid:userId,
        platformsOwned:req.body.platformsOwned
      });

      console.log(game);
    
      game.save(function(err){
        if(err){
          console.log(err);
          res.status(500).json({message:"Could not save to db"});
        }else{
          res.status(200).json({message:"game has been successfully saved to db"});
        }
      })
    }

  })
    
//     tokenFunctions.checkAuth
// db.Game.save(game, function(err){
//   if(err){
//     console.log(err);
//     res.status(500).json({message:"Could not add game to list"})
//   }else{
//     res.status(200).json({message:"Successfully added game to list!"})
//   }
  
};


exports.getUserGameDetails = function(req,res){
  console.log("gets details about specific game user owns");
}
exports.editUserGame = function(req,res){
  console.log("This will edit the currently owned game for user");
}

module.exports = exports;