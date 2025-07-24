const User = require('../models/User');
const fs = require('fs');
const Tesseract = require('tesseract.js');

// ✅ Get user allergies
const getUserAllergies = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({ allergies: user.allergies || [] });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// ✅ Update allergies
const updateUserAllergies = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    user.allergies = req.body.allergies;
    await user.save();

    res.status(200).json({ message: 'Allergies updated', allergies: user.allergies });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// ✅ Add allergies
const addUserAllergies = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    if (user.allergies && user.allergies.length > 0) {
      return res.status(400).json({ message: 'Allergies already exist. Use update instead.' });
    }

    user.allergies = req.body.allergies;
    await user.save();

    res.status(200).json({ message: 'Allergies added successfully', allergies: user.allergies });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// ✅ Scan image for allergens
const scanImage = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'No image provided' });
    }

    const imagePath = req.file.path;

    const result = await Tesseract.recognize(imagePath, 'eng');
    const text = result.data.text;

    fs.unlinkSync(imagePath);

    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const userAllergies = user.allergies.map(a => a.toLowerCase());
    const cleanedText = text.toLowerCase().replace(/\n/g, " ").replace(/\s+/g, " ").trim();
    const matched = userAllergies.filter(allergy => cleanedText.includes(allergy));

    res.json({
      rawText: cleanedText,
      matchedAllergies: matched,
      isAllergic: matched.length > 0,
      message: matched.length > 0 ? "Allergen(s) found!" : "No allergens detected."
    });
  } catch (err) {
    console.error("OCR failed:", err.message);
    res.status(500).json({ message: 'OCR failed', error: err.message });
  }
};

// ✅ Export all
module.exports = {
  getUserAllergies,
  updateUserAllergies,
  addUserAllergies,
  scanImage
};
