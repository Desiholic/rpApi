require('dotenv').config();
const twit = require('twit')

/*const T = new twit({
  consumer_key: process.env.TWITTER_API_KEY,
  consumer_secret: process.env.TWITTER_API_SECRET,
  access_token: process.env.TWITTER_ACCESS_TOKEN,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
});*/

const T = new twit({
  consumer_key: VX9nVUYuyx4zbwuFrXA3D7xOZ,
  consumer_secret: I1mFBdBqhrXuVPNH821qnw2HU8cBuTZr4nsbDgVZDpdDCjnWSy,
  access_token: 1017110154490368003-yIeVyfTltdkkgGDNIXMG0Mtkvu0RAP,
  access_token_secret: ID5rHrJIQgWaqk9dPHTmOprmfOhbsMzLkKOczalutdWNU,
});

module.exports = T;