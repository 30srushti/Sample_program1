const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

const milletRoutes = require('./routes/milletRoutes.js');  // Import millet routes

dotenv.config();
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Register API Routes
app.use('/api/millets', milletRoutes); // Ensure this matches the correct path

// Test Route
app.get('/', (req, res) => {
    res.send("Server is running...");
});

const PORT = process.env.PORT || 5000;

// Connect to MongoDB and Start Server
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log(`MongoDB Connected`);
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
})
.catch(err => console.error("MongoDB Connection Error:", err));
