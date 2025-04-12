const mongoose = require('mongoose');

const exerciseSchema = new mongoose.Schema({
  name: String,
  category: String,
  equipment: String,
});

module.exports = mongoose.model('Exercise', exerciseSchema);
