var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var GameListSchema = Schema({
    owner:{
        id:{
            type:Schema.Types.ObjectId,
            ref:"User"
        }
    },
    games:[
        {
            type:Schema.Types.ObjectId,
            ref:"Game"
        }
    ]
});

var GameList = mongoose.model("GameList", GameListSchema);
module.exports = GameList;