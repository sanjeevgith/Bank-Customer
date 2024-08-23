// routes/bankerRoutes.js
const express = require('express');
const bankerController = require('../controllers/bankerController');
const authMiddleware = require('../middlewares/authMiddleware');
const roleMiddleware = require('../middlewares/roleMiddleware');

const router = express.Router();

router.use(authMiddleware.protect);
router.use(roleMiddleware.authorizeRole('banker'));

router.get('/accounts', bankerController.getAllAccounts);
router.get('/accounts/:id', bankerController.getAccountById);

module.exports = router;
