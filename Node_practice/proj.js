const fs = require("fs");
const http = require("http");

// Create folder and file
//fs.mkdirSync("new");

// create file

fs.writeFileSync("new/ok.txt", "Neew file named ok crated ");

http
  .createServer((req, res) => {
    const rs = fs.createReadStream("read.txt");
    rs.pipe(res);
  })
  .listen(4000);

// fs.mkdir("async", (err) => {
//   console.log("Folder create d");
// });
// fs.mkdir("server", (err) => {
//   console.log("Folder create d");
// });

// const x = fs.writeFile("async/okk.txt", "hello", (error) => {
//   console.log("sub file created ");
// });

// const y = fs.readFile("async/okk.txt", "UTF-8", (error, data) => {
//   console.log(data);
// });
// console.log(path.dirname("ok.txt"));
