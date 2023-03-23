const fs = require("fs"); // Importing an file module in node
const path = require("path");

fs.writeFileSync("read.txt", "My first File "); // used to create file if file is alredy is present then it only performs write iperation .
fs.writeFileSync("read.txt", "Overridong happens "); // Data overriding happens ....

fs.appendFileSync(
  "read.txt",
  " \n if we want to add some data ..no overidinghappens here "
);

const ok = fs.readFileSync("read.text"); // Able to read file ... We will get buffer data ( Data structure used to store binary)...
const orignal_data = ok.toString(); // We will get data in string instead of buffer data .
// Or used utf-8 encoding

console.log(path.dirname("ok.txt"));
