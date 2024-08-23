// models/Account.js
const mongoose = require('mongoose');

const accountSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    balance: { type: Number, default: 0 },
    transactions: [{
      type: { type: String, required: true }, // Transaction type (e.g., "deposit", "withdrawal")
      amount: { type: Number, required: true },
      date: { type: Date, default: Date.now }, // Optional, default to current date
      description: { type: String } // Optional
    }]
});

module.exports = mongoose.model('Account', accountSchema);
