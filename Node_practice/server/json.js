const http = require("http");

const obj = {
  name: "tejas",
  age: 20,
  address: "Rahata",
};

const json_data = JSON.stringify(obj);

console.log(json_data);

const orignal = JSON.parse(json_data);

console.log(orignal);

const ok = (orignal) => {};
http
  .createServer((req, res) => {
    res.write(`JSON : ${json_data}`);
    res.write(`orignal : ${orignal}`);
    res.end();
  })
  .listen(3000);
