//import controller to use the model

const JokeController = require("../controllers/joke.controller");


module.exports = (app)=>{
    app.get("/api/jokes", JokeController.findAllJokes)
    app.post("/api/jokes", JokeController.createJoke)
    app.get("/api/jokes/:id", JokeController.findAllJokes)
    app.put("/api/jokes/:id",JokeController.updateExistingJoke)
    app.delete("/api/jokes/:id",JokeController.deleteJokeById)
}