const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
  try {
    const token = req.header('Authorization');
    console.log("TOKEN RECEIVED:", token); // Debug

    if (!token) {
      return res.status(401).json({ message: 'Access denied. No token provided.' });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'secretkey');
    req.user = decoded;
    next();
  } catch (err) {
    console.error("Token verification failed:", err.message);
    return res.status(400).json({ message: 'Invalid token.' });
  }
};

module.exports = auth;
