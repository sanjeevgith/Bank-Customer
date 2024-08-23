// config/jwt.js
module.exports = {
    secret: process.env.JWT_SECRET || 'bankapplication',
    expiresIn: '10h',
  };
  