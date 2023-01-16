const express = require("express"); 
const bodyParser = require("body-parser");
const gameController = require("../controllers/GameController");

require('dotenv').config();

// db instance connection
require("../config/db");

const app = express();

const port = process.env.PORT || 3001; 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const cors = require('cors');
const corsOptions ={
    origin:'https://aesthetic-panda-a4f7a3.netlify.app', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));

// API ENDPOINTS

app
  .route("/games")
  .get(gameController.listAllGames)
  .post(gameController.saveGame);

app
  .route("/games/:id")
  .get(gameController.getGameById)
  .put(gameController.updateGame)
  .delete(gameController.deleteGame)


app.listen(port, () => {  
console.log(`Server running at http://localhost:${port}`);
});