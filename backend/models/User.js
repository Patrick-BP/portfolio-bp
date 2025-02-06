const mongoose = require('mongoose');
const ROLES = ["admin", "user"];

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ROLES, default: "user" },
},{
  timestamps: true,
  versionKey: false
});

module.exports = mongoose.model('User', userSchema);
