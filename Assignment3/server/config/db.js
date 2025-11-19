//Uses dotenv to grab the Mongodb URI from the hidden .env file for security purposes
require('dotenv').config();

module.exports = {
  URI: process.env.MONGODB_URI
};