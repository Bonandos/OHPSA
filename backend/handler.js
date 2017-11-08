'use strict';

module.exports.hello = (event, context, callback) => {
  console.log('Running lambda function')
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Bruno Bonando says hello!'
    }),
  };
  callback(null, response);
};
