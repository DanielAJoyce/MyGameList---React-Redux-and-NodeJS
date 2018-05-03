var db = require("../models");
var config = require("../config/config")
var mongoose = require("mongoose");
var bcrypt = require("bcrypt");
var saltRounds = 10;
var jwt = require("jsonwebtoken");


exports.registerUser = function(req,res){
  if(req.body.username, req.body.password){
    db.User.find({username:req.body.username}, function(err, foundUser){
      if(foundUser[0]){
        console.log("found user");
        console.log(foundUser);
        res.status(500).json({error:"username already exists, please choose another username"});
      }else{

        console.log(req.body.password);

        bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
          // Store hash in your password DB.
          console.log("hash: " + hash);
          var user = new db.User({
            username:req.body.username,
            password:hash
          })
  
          user.save(function(err){
            if(err){
              console.log(err);
            }else{
              res.status(201).json({message:"User has been created. Please log in with the credentials you have provided!"});
            }
          });
        });
      }
    })
  }else{
    res.json({error:"Username and/or password have not been given"})
  }
}



exports.authenticateUser = function(req,res){
  console.log("This is for authenticating users");
  if(!req.body.password || !req.body.username){
    res.status(500).json({error:"Please provide username and password"})
    return console.log("error, user details not given");
  }
  var user = new db.User({
    username:req.body.username
  });

  db.User.findOne({username:user.username}, function(err, foundUser){
    if(err){
      console.log(err);
      return err;
    }
    console.log("Found user: " + foundUser);
    if(foundUser){

      bcrypt.compare(req.body.password, foundUser.password).then(function(response) {
        if(response){
          const payload={
            userid: foundUser._id
          }
          
          var token = jwt.sign(payload, config.secret,{
            expiresIn:86400
          });
      
          res.status(200).json({
            success:true,
            message:"Here is your token",
            token:token
          });  

          console.log("username");
        }else{
          console.log("passwords do not match");
          res.status(500).json({error:"Error - password is incorrect"})
        }       
    });
    }else{
      console.log("User not found");
      res.status(500).json({error:"No user found."});
    }    
  });

    
}

checkTokenIsValid = function(token){
  jwt.verify(token, config.secret, function(err){
    if(err){
      console.log("token is not valid");
      return false;
    }else{
      console.log("token is valid");
      return true;
    }
  })
}

exports.checkAuth = function(req,res,next){ 
  var token = req.body.token || req.query.token || req.header.token;
  if(token){
    console.log("token is present");
    
    if(!checkTokenIsValid(token)){
      res.status(500).json({error:"Token is not valid"});
    }

    var decoded = jwt.decode(token, {complete:true});

      var currentDateTime = new Date().getTime()/1000;

      if(decoded.payload.exp < currentDateTime){
        console.log("error: Token has expired");
        res.status(403).json({error:"Token has expired, please re-authenticate"});
      }
      
      console.log("current datetime: " + new Date().getTime() /1000);
      console.log(decoded.header);
      console.log(decoded.payload);
      console.log(decoded);
    } else{
      return res.status(403).send({
        success:false,
        message:"No Token provided"
      })
  }
}
  
    
 

 
 



  /*This will get the user's ID and password, encrypt it, 
  / take the encrypted password from the db and then compare them.
  // If successful it will then send the requester the userID and the tokens.
 */