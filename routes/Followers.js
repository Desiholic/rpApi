require('dotenv').config();
const express = require('express');
const circularJSON = require('circular-json')
const router = express.Router();
const bot = require('./api/bot')

// Gets all followers
router.get('/', (req, res) => {
    const followers = bot.getFollowers();
    const str = circularJSON.stringify(followers)

    //const parsed = circularJSON.parse(str)
    //console.log(parsed)

    /*const response = {
        status: "200: Authorized",
        users: followers
    }*/
    res.status(200).send(followers);
});

module.exports = router;