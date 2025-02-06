const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  techStack: [{ type: String }],
  imageUrl: { type: String },
  githubUrl: { type: String },

},{
  timestamps: true,
  versionKey: false
});

module.exports = mongoose.model('Project', projectSchema);