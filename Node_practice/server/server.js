const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Home");
  } else if (req.url === "/about") {
    res.write("About");
  }
  res.write("Server created"); //write a response to the client
  res.end(); //end the response
});

server.listen(3000, () => {
  //the server object listens on port 3000
  console.log("Listening on port 300");
});

const options = {
  host: "www.geeksforgeeks.org",
  path: "/courses",
  method: "GET",
};
// Make an http request
http
  .request(options, (response) => {
    console.log(`STATUS ${response.statusCode}`);
  })
  .end();
