
const express = require('express');
const router = express.Router();
const fs = require('fs'); // ✅ Required if you're using fs
const multer = require('multer'); // ✅ Required if you're using multer
const auth = require('../middleware/auth');

// Multer config (if not using middleware/upload.js)
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const dir = 'uploads/';
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
    }
    cb(null, dir);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  }
});
const upload = multer({ storage });

const {
  getUserAllergies,
  updateUserAllergies,
  scanImage,
  addUserAllergies
} = require('../controllers/userController');

router.get('/allergies', auth, getUserAllergies);
router.put('/allergies', auth, updateUserAllergies);
router.post('/allergies', auth, addUserAllergies);
router.post('/scan-image', auth, upload.single('image'), scanImage);

module.exports = router;
