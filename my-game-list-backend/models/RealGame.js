var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var RealGameSchema = Schema({
    name:String,
    yearofrelease:Number,
    platforms:[
        {
            type:String
        }
    ],
    image:String,
    genre:String,
    developer:String,
    publisher:String
});

var RealGame = mongoose.model("RealGame", RealGameSchema);

module.exports = RealGame;

