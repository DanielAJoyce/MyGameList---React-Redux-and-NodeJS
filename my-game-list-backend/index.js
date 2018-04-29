var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var morgan = require("morgan");
var jwt = require("jsonwebtoken");
var gameRoutes = require("./routes/game");
var userRoutes = require("./routes/user");
var realGameRoutes = require("./routes/realGame");
var gameListRoutes = require("./routes/gameList");

var port = process.env.PORT || 8000;

var config = require("./config/config");
var dbSetupGames = require("./config/dbsetup");
var RealGame = require("./models/RealGame");
var app = express();

app.set("iamasecret007", config.secret);

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(morgan('dev'));

mongoose.connect(config.database, function(err){
  if(err){
    console.log(err);
  }else{
    console.log("successfully connected to database at: " + config.database);
  }
});

app.use("/api/Game", gameRoutes);
app.use("/api/GameList", gameListRoutes);
app.use("/api/User", userRoutes);
app.use("/api/RealGame", realGameRoutes);

app.get("/api/populateRealGames", function(req,res){
  console.log(dbSetupGames);

  RealGame.remove({}, function(err){
    if(err){
        console.log(err);
    }else{
        console.log("removed all real games");
    }
});

  dbSetupGames.forEach(function(element){



    RealGame.create(element, function(err, realGame){
      if(err){
        console.log(err);
      }else{
        console.log("added games");
      }
    })
  })
  res.json({success:true});
});


app.listen(port, function(){
  console.log("Server online at:" + port);
});

