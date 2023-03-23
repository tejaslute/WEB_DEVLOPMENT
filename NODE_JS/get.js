var http = require('http');
  
var options = {
    host: 'www.geeksforgeeks.org',
    path: '/courses',
    method: 'GET'
};
  
// Making a get request to 
// 'www.geeksforgeeks.org'
http.request(options, (response) => {
  
    // Printing the statusCode
    console.log(`STATUS: ${response.statusCode}`);
}).end();
