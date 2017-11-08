'use strict';

module.exports.hello = (event, context, callback) => {
  console.log('Running lambda function')
  const response = {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin" : "*",
      "Access-Control-Allow-Credentials" : true
    },
    body: JSON.stringify({
      message: 'Bruno Bonando says hello!'
    }),
  };
  callback(null, response);
};
