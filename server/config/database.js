const mongoose = require('mongoose');

// Connect to MongoDB using Mongoose

function connectMongoose() {
  mongoose.connect('mongodb://localhost:27017/Blogg').then(() => {
    console.log("Connected to the database");
  }).catch((err) => {
    console.log("Could not connect to database", err);
  });
}

module.exports = { connectMongoose };
