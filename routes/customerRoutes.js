// routes/customerRoutes.js
const express = require('express');
const customerController = require('../controllers/customerController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.use(authMiddleware.protect);

router.get('/transactions', customerController.getTransactions);
router.post('/deposit', customerController.deposit);
router.post('/withdrawal', customerController.withdrawal);

module.exports = router;
