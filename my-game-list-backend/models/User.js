var mongoose = require("mongoose");
var Schema = mongoose.Schema;

//username, password, accountCreatedDate,
var UserSchema = new Schema({
    username:{
        type:String,
        unique:true
    },
    password:String,
    datecreated:{
        type:Date, default:Date.now
    },
});

var User = mongoose.model("User", UserSchema);
module.exports = User;