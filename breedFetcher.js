const request = require('request');

const fetchBreedDescription = function(breedName, callback) {

  request("https://api.thecatapi.com/v1/breeds/search?q=" + breedName, (error, response, body) => {

    if (error !== null) {
      callback(error, null);
    } else {
  
      console.log('error:', error); // Print the error if one occurred
      console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    
      // console.log(typeof body);
      const data = JSON.parse(body);
      // console.log(typeof data);
  
      if (data[0] === undefined) {
        callback("Requested breed not found.", null);
      } else {
        callback(null, data[0].description);
      }
  
    }
  
  });

};

module.exports = { fetchBreedDescription };