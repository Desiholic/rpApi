require('dotenv').config();
const express = require('express');
const router = express.Router();
const path = require('path');

// Init express
const app = express();

app.use('/api/followers', require('./routes/Followers'));

const PORT = process.env.PORT || 7572;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
