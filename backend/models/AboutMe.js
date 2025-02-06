const mongoose = require('mongoose');

const aboutMeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  Biography: { type: String, required: true },
  introduction: { type: String, required: true },
  title: { type: String, required: true },
  imageUrl: { type: String },
  city: { type: String,   required: true },
  state: { type: String , required: true },
  email: { type: String },
  phone: { type: String },
  githubUrl: { type: String },
  linkedinUrl: { type: String },

},{
  timestamps: true,
  versionKey: false
});

module.exports = mongoose.model('AboutMe', aboutMeSchema);