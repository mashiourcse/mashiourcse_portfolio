const axios = require('axios');
const fs = require('fs');

const url = 'http://localhost:8888/api/projects';
const filePath = 'response_data.json';

axios.get(url)
  .then(response => {
    // Parse the response data as JSON
    const data = response.data;

    // Save the JSON data to a file
    fs.writeFile(filePath, JSON.stringify(data, null, 2), err => {
      if (err) {
        console.error('Error writing to file:', err);
      } else {
        console.log('Response data saved to:', filePath);
      }
    });
  })
  .catch(error => {
    console.error('Failed to retrieve data:', error.message);
  });
