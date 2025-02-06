const mongoose = require('mongoose');

const skillSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: {
    type: String,
    required: true,
    enum: ['Frontend Development', 'Backend Development', 'DevOps & Tools']
  },
  proficiency: { type: Number, required: true, min: 0, max: 100 },
  
},{
  timestamps: true,
  versionKey: false
}

);

module.exports = mongoose.model('Skill', skillSchema);