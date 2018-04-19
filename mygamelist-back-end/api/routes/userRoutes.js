
module.exports = (app) => {
    let myGameList = require("../controllers/mygamelistController");



    app.route('/user')
    .get(mygamelist.getUser)
    .post(mygamelist.addGame)

    app.route("/user/:userId")
    .get(mygamelist.getUserDetails)

    app.route("/gamelist/:username")
    .get(mygamelist.getUserGameList)
    
    app.route("user")
    app.route("/games")
    .get(games.getGames)

    app.route("/games/:gameId")
    .get(games.getGameDetails)
    


    .put(mygamelist.editGame)


}