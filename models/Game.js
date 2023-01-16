const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GameSchema = new Schema({
    Rank: String,
    Title: {
        type: String,
        required: true
    },
    Sales: String,
    Series: String,
    Platforms: String,
    InitialReleaseDate: String,
    Developers: String,
    Publishers : String,  
  
});

module.exports = mongoose.model("Games", GameSchema);