var db = require("../models");


exports.getAllRealGames = function(req,res){
  console.log("This gets all real games");

  db.RealGame.find({}, function(err, foundGames){
    if(err){
      console.log(err);
    }else{
      console.log(foundGames[1]);

      var data =[];
      foundGames.forEach(function(game){
        data.push({
          name : game.name,
          yearofrelease : game.yearofrelease,
          image : game.image,
          genre : game.genre,
          developer : game.developer,
          publisher : game.publisher,
          platforms : game.platforms,
          realgameid: game.realgameid
        });
      });
      res.json(data);
      console.log(foundGames);
    }
  })
}

exports.getRealGame = function(req,res){
  console.log("This gets ONE real game's details");
  var gameid = req.query.token || req.params.realgameid
  console.log("game id: " + gameid);
  db.RealGame.find({realgameid}, function(err, foundGame){
    if(err){
      console.log(err);
    }else{
      res.status(200).json(foundGame);
    }
  })
}


module.exports = exports;