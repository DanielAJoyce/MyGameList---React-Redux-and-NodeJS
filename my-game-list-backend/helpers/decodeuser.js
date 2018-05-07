var jwt = require("jsonwebtoken");

function getUserIdFromToken(token){
    var decoded = jwt.decode(token, {complete:true})
    userid = decoded.payload.userid;
    return userid;
};

module.exports = getUserIdFromToken;


