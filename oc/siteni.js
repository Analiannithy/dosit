const axios = require('axios');

axios.get('https://www.example.com  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  });
