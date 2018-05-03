## Routes:

<!-- app.use("/api/Game", gameRoutes);
app.use("/api/GameList", gameListRoutes);
app.use("/api/User", userRoutes);
app.use("/api/RealGame", realGameRoutes); -->


User routes:
localhost:8000/api/user/auth
localhost:8000/api/user/auth/checkUser
localhost:8000/api/user/registerUser

Realgame routes:
localhost:8000/api/realgame
localhost:8000/api/realgame/:realgameid

Game Routes:
localhost:8000/api/game
localhost:8000/api/game/:gameid
<!-- .delete(helpers.deleteGameFromList)
.post(helpers.addGameToList)
.get(helpers.getUserGameDetails)
.put(helpers.editUserGame) -->