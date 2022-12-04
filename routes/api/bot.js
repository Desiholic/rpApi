require('dotenv').config();
const twit = require('./twit');
const fs = require('fs');
const path = require('path');
//const paramsPath = path.join(__dirname, 'params.json')

const bot = {};

//Parameter handling
/*function writeParams(data) {
    console.log('We are writing the params file ...", data');
    return fs.writeFileSync(paramsPath, JSON.stringify(data));
}

function readParams() {
    console.log('We are reading the params file ...');
    const data = fs.readFileSync(paramsPath);
    return JSON.parse(data.toString());
}*/

// Api references
function getFollowersList() {
    return new Promise((resolve, reject) => {
        let params = {
            user_id: 1581334114178842631,
            screen_name: "PlayYRFR",
        };
        twit.get('followers/list', params, (err, data) => {
            if (err) {
                return reject(err);
            }
            return resolve(data);
        });
    });
}

var savedFollowers = {};
async function loadFollowersList() {
    try {
        const Data = await getFollowersList();

        var Followers = Data.users;
        savedFollowers = {};

        for (let follower of Followers) {
            try {
                savedFollowers[follower.screen_name] = {
                    name: follower.name,
                    screen_name: follower.screen_name,
                    id: follower.id
                }
                console.log('Got a follower! Their username is ' + follower.screen_name + ", and their display name is " + follower.name);
            } catch(e) {
                console.log('Unsuccessful follower. The error is ' + e);
            }
        }

        console.log('We have followers: ' + savedFollowers.length);
    } catch(e) {
        console.log(e)
    }
}

bot.getFollowers = (() => {
    return savedFollowers
})

loadFollowersList();
setInterval(loadFollowersList, 60000);

module.exports = bot