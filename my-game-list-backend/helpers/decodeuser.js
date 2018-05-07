var jwt = require("jsonwebtoken");


export default function getUserIdFromToken(token){

    var decoded = jwt.decode(token, {complete:true})
    userid = decoded.payload.userid;
    return userid;
}