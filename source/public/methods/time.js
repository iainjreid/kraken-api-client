// vim: set cc=120 ts=2 et:
'use strict';

// Dependencies
const request = require('request');

module.exports = () => {
  return new Promise((resolve, reject) => {
    request.get('https://api.kraken.com/0/public/Time', (error, response, body) => {
      if (error) {
        throw error;
      }

      if (response.statusCode !== 200) {
        reject(body);
      } else {
        resolve(body);
      }
    });
  });
};

