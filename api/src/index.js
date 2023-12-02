// index.js
const express = require('express');
const app = express();
const cors = require('cors');
const helmet = require('helmet');
require('dotenv').config();

// Apply middleware
app.use(cors()); // Enable CORS for all routes
app.use(helmet()); // Set various HTTP headers for security

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
