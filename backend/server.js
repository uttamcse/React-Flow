const express = require('express');
const cors = require('cors');
const config = require('./config/config');
const cardRoutes = require('./routes/cardRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // For parsing application/json

// Routes
app.use('/api/cards', cardRoutes);

// Start the server
app.listen(config.port, () => {
    console.log(`Server is running on http://localhost:${config.port}`);
});
