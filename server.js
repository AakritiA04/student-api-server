const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const studentRoutes = require('./routes/studentRoutes');

dotenv.config();
const app = express();

// Middleware to parse JSON
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ DB Error:", err));

// Use routes
app.use('/api/students', studentRoutes);

// ✅ Start server only if not testing
if (process.env.NODE_ENV !== 'test') {
  app.listen(process.env.PORT || 3000, () => {
    console.log(`🚀 Server running on http://localhost:${process.env.PORT || 3000}`);
  });
}

// ✅ Export app for testing
module.exports = app;
