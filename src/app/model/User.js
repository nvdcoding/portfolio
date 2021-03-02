const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema({
  username: { type: String, require: true, unique: true, min: 4 },
  password: { type: String, require: true, min: 4 },
});

module.exports = mongoose.model('User', User);