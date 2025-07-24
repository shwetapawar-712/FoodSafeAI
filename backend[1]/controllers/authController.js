const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

// POST /signup
exports.signup = async (req, res) => {
  try {
    const { name, email, phone, age, password } = req.body;

    const existing = await User.findOne({ email });
    if (existing) return res.status(400).json({ message: 'User already exists' });

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ name, email, phone, age, password: hashedPassword });
    await user.save();

    res.status(201).json({ message: 'Signup successful' });
  } catch (err) {
    res.status(500).json({ message: 'Signup failed', error: err.message });
  }
};

// POST /login
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: 'User not found' });

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) return res.status(400).json({ message: 'Invalid credentials' });

    const token = jwt.sign({ id: user._id }, 'secretkey', { expiresIn: '1d' });

    res.json({ token });
  } catch (err) {
    res.status(500).json({ message: 'Login failed', error: err.message });
  }
};
