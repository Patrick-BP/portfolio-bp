const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const projectRoutes = require('./routes/projects');
const skillRoutes = require('./routes/skills');
const aboutMeRoutes = require('./routes/aboutMe');
const loginRoutes = require('./routes/login');
const registerRoutes = require('./routes/register');

const app = express();

const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/login', loginRoutes);
app.use('/api/register', registerRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/skills', skillRoutes);
app.use('/api/aboutMe', aboutMeRoutes);

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/portfolio')
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('MongoDB connection error:', error));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});