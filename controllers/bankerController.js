// controllers/bankerController.js
const Account = require('../models/Account');

exports.getAllAccounts = async (req, res) => {
  try {
    const accounts = await Account.find();
    res.json(accounts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getAccountById = async (req, res) => {
  try {
    const accountId = req.params.id;
    console.log('Received accountId:', accountId);

    const account = await Account.findById(accountId);
    console.log('Found account:', account);

    if (!account) {
      return res.status(404).json({ message: 'Account not found' });
    }

    res.json(account);
  } catch (error) {
    console.error('Error fetching account:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
