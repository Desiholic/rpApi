require('dotenv').config();
const express = require('express');
const router = express.Router();
const bot = require('./api/bot')

// Gets all followers
router.get('/', (req, res) => {
    const response = {
        status: "200: Authorized",
        users: {
            [1]: {
                user_id: 1,
                name: "Jason"
            },
            [2]: {
                user_id: 2,
                name: "Junior"
            }
        }
    }
    res.status(200).send(res.json(response));
});

module.exports = router;