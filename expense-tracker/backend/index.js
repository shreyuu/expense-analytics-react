const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors'); // Import CORS middleware
const connectDB = require('./config/db');
const expenseRoutes = require('./routes/expenseRoutes');

dotenv.config();

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors()); // Enable CORS for all routes
app.use(express.json());

// Routes
app.use('/api/expenses', expenseRoutes);

const PORT = process.env.PORT || 5002;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});