const mongoose = require("mongoose");

const dbURI = 'mongodb+srv://juiki:passer@cluster0.mlnln0q.mongodb.net/VideoGameBestSelling?retryWrites=true&w=majority';


mongoose.connect(dbURI);

var db = mongoose.connection;
 
//Bind connection to error event (to get notification of connection errors)
// eslint-disable-next-line no-console
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// require any models
require("../models/Game");