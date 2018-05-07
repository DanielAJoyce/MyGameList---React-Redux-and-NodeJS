var db = require("../models");
var tokenFunctions = require("./user");
var jwt = require("jsonwebtoken");
var mongoose = require("mongoose");
var decodeUser = require("./decodeUser");

exports.getAllGamesUserOwns = function(req,res){
  console.log("This is the route for all of the users games");
    if(req.headers.token || req.body.token){
      var token = req.headers.token || req.body.token;
      var userId = decodeUser(token);
      console.log("userid: " + userId);

      db.Game.find({ownerid:userId}, function(err,foundGames){
        if(err){
          throw err;
        }else{
          foundGames.forEach(function(game){
            console.log(game);
          })
          res.status(200).json({games:foundGames});
        }
      })
    }else{
      res.status(401).json({message:"Please provide token"})
    }
}
exports.deleteGameFromList = function(req,res){
  // console.log("Route for deleting a game from list");
  // console.log(req.params.gameid);
  // console.log(req.headers.token);
  if(req.params.gameid && (req.headers.token || req.body.token))
  {
    var gameId = req.params.gameid;
    var token = req.headers.token || req.body.token;
    var userId = decodeUser(token);

    db.Game.deleteOne({ownerid:userId, _id:gameId}, function(err){
      if(err){
        console.log(err);
        res.status(500).json({message:"error, could not delete game"});
        throw err;
      }else{
        console.log("game deleted");
        res.status(200).json({message:"Game deleted from list"});
      }
    })
  }
}

exports.addGameToList = function(req,res){
  console.log("Adds game to user's list");
  if(req.headers.token || req.body.token){

 
  var singularGameId = req.params.gameid;
  
  var token = req.headers.token || req.body.token;
  userId = decodeUser(token);

  console.log(userId);

  // I should really check that the gameID exists within the application
  // Will be a best endeavors.
  db.RealGame.findOne({realgameid:singularGameId}, function(err, realGame){
    if(err){
      throw err;
      console.log(err);
      res.status(500).json({message:"error"});
    }
    if(realGame){
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
    }else{
      res.status(404).json({message:"No game found"});
    }

  })
  }else{
    res.status(401).json({message:"User not authenticated. Please provide token"})
  } 
};


exports.getUserGameDetails = function(req,res){
  console.log("gets details about specific game user owns");
  if(req.body.token || req.headers.token){
    var gameid = req.params.gameid;
    var userid = decodeUser(token);

    findOne({_id:gameid, userid:userid}, function(err, foundGame){
      if(err){
        console.log(err);
        res.send(500).json({message:"error, could not find game"});
      }
      if(foundGame){
        res.status(200).json({foundGame});
      }else{
        res.status(500).json({message:"Game not found"});
      }
    })
  }else{
    res.status(500).json({message:"please provide valid token"});
  }
  
}
exports.editUserGame = function(req,res){
  console.log("This will edit the currently owned game for user");
  if(req.body.state && req.body.platformsOwned){
    
    db.Game.findByIdAndUpdate({_id:req.params.gameid}, ({state:req.body.state, platformsOwned:req.body.platformsOwned}), function(err,updatedGame){
      res.status(200).json({updatedGame})
    });

  }else{
    res.status(500).json({message:"please provide state and platforms owned"});
  }
}

module.exports = exports;