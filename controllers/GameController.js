const Game = require("../models/Game");

//List all available tasks from database....
exports.listAllGames = (req, res) => {
    Game.find({}, (err, game) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(200).json(game);
  });
};
// Creating a new game and save it to database....

exports.saveGame = async (req, res) => {
  const game = new Game(req.body);
  try {
      const insertedgame = await game.save();
      res.status(201).json(insertedgame);
  } catch (error) {
      res.status(400).json({message: error.message});
  }
}

// read a perticular task by _id......
exports.getGameById = async (req, res) => {
  try {
      const game = await Game.findById(req.params.id);
      res.json(game);
  } catch (error) {
      res.status(404).json({message: error.message});
  }
}
//Update a perticular task by _id ....

exports.updateGame = async (req, res) => {
  try {
      const updatedgame = await Game.updateOne({_id:req.params.id}, {$set: req.body});
      res.status(200).json(updatedgame);
  } catch (error) {
      res.status(400).json({message: error.message});
  }
}

exports.deleteGame = async (req, res) => {
  try {
      const deletedgame = await Game.deleteOne({_id:req.params.id});
      res.status(200).json(deletedgame);
  } catch (error) {
      res.status(400).json({message: error.message});
  }
}

// exports.createNewGame = (req, res) => {
//   let newGame = new Game(req.body);
//   newGame.save((err, game) => {
//     if (err) {
//       res.status(500).send(err);
//     }
//     res.status(201).json(game);
//   });
// };

// exports.updateGame = (req, res) => {
//   Game.findOneAndUpdate(
//     { _id: req.params.id },
//     req.body,
//     { new: true },
//     (err, game) => {
//       if (err) {
//         res.status(500).send(err);
//       }
//       res.status(200).json(game);
//     }
//   );
// };