// server.js
require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const customerRoutes = require('./routes/customerRoutes');
const bankerRoutes = require('./routes/bankerRoutes');
const logger = require('./utils/logger');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 4000;

// Connect to the database
connectDB();

// Middleware
app.use(express.json());
app.use(cors());
app.use(logger);

// Routes
app.use('/auth', authRoutes);
app.use('/customer', customerRoutes);
app.use('/banker', bankerRoutes);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
