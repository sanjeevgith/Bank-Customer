// controllers/customerController.js
const Account = require('../models/Account');

exports.getTransactions = async (req, res) => {
  try {
    const userId = req.user.userId;
    const account = await Account.findOne({ userId });
    res.json(account);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deposit = async (req, res) => {
  try {
    const userId = req.user.userId;
    const { amount } = req.body;

    const account = await Account.findOne({ userId });
    console.log('account===>', account);

    if (!account) {
      return res.status(404).json({ message: 'Account not found' });
    }

    account.balance += amount;
    console.log('amount===>', amount);
    account.transactions.push({
      type: 'deposit', // Add other properties if needed
      amount: amount
    });
    console.log('account===>', account);
    await account.save();

    res.json(account);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.withdrawal = async (req, res) => {
  try {
    const userId = req.user.userId;
    const { amount } = req.body;

    const account = await Account.findOne({ userId });
    if (!account) {
      return res.status(404).json({ message: 'Account not found' });
    }

    if (amount > account.balance) {
      return res.status(400).json({ message: 'Insufficient funds' });
    }

    account.balance -= amount;
    account.transactions.push({ type: 'withdrawal', amount });
    await account.save();

    res.json(account);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
