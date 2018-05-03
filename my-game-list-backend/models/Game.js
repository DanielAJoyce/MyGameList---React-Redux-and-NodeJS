var mongoose = require("mongoose");

var Schema = mongoose.Schema;
var GameSchema = Schema({
    name:String,
    singulargameid:{
        type:Schema.Types.ObjectId,
        ref:"RealGame",
        unique:true
    },
    platformsOwned:[
        {
            type:String
        }
    ],
    state:{
        type:String
    },
    ownerid:{
            type:Schema.Types.ObjectId,
            ref:"User"
    }
});

var Game = mongoose.model("Game", GameSchema);
module.exports = Game;
