const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Project = new Schema({
  title: { type: String, require: true, unique: true },
  description: { type: String, require: true },
  url: { type: String },
  repository: { type: String },
  create_at: { type: Date, default: Date.now() },
  update_at: {type: Date, default: Date.now()}
});

module.exports = mongoose.model('Project', Project);