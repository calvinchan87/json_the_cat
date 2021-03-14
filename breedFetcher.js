const request = require('request');
request("https://api.thecatapi.com/v1/breeds/search?q=" + process.argv[2].toString(), (error, response, body) => {

  if (error !== null) {
    console.log(error);
  } else {

    console.log('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  
    // console.log(typeof body);
    const data = JSON.parse(body);
    // console.log(typeof data);

    if (data[0] === undefined) {
      console.log("Requested breed not found.");
    } else {
      console.log(data[0].description);
    }

  }

});