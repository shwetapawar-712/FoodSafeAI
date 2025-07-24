// models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  phone: String,
  age: Number,
  password: String,
  allergies: [String]
});

module.exports = mongoose.model('User', userSchema);
