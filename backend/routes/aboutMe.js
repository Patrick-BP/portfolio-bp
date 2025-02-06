const express = require('express');
const multer = require('multer');
const AboutMe = require('../models/AboutMe');
const verifyToken = require('../middleware/auth');

const router = express.Router();

// Get all aboutMe
router.get('/:id',verifyToken, async (req, res) => {
  try {
    const aboutMe = await AboutMe.findById(req.params.id);
    if (!aboutMe) {
      return res.status(404).json({ message: 'AboutMe not found' });
    }
    res.json(aboutMe);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create an aboutMe

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './public/images/aboutMe');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage: storage });

router.post('/',verifyToken, upload.single('image'), async (req, res) => {
  const aboutMe = new AboutMe({
    name: req.body.name,
    Biography: req.body.Biography,
    introduction: req.body.introduction,
    title: req.body.title,
    imageUrl: req.file ? req.file.filename : '',
    city: req.body.city,
    state: req.body.state,
    email: req.body.email,
    phone: req.body.phone,
    githubUrl: req.body.githubUrl,
    linkedinUrl: req.body.linkedinUrl,
  });

  try {
    const newAboutMe = await aboutMe.save();
    res.status(201).json(newAboutMe);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Edit an aboutMe
router.put('/:id',verifyToken, upload.single('image'), async (req, res) => {
  try {
    const aboutMe = await AboutMe.findById(req.params.id);
    if (!aboutMe) {
      return res.status(404).json({ message: 'AboutMe not found' });
    }
    if (req.file) {
      aboutMe.imageUrl = req.file.filename;
    }
    aboutMe.name = req.body.name;
    aboutMe.Biography = req.body.Biography;
    aboutMe.introduction = req.body.introduction;
    aboutMe.title = req.body.title;
    aboutMe.location = req.body.location;
    aboutMe.email = req.body.email;
    aboutMe.phone = req.body.phone;
    aboutMe.githubUrl = req.body.githubUrl;
    aboutMe.linkedinUrl = req.body.linkedinUrl;

    const savedAboutMe = await aboutMe.save();
    res.status(200).json(savedAboutMe);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


module.exports = router;