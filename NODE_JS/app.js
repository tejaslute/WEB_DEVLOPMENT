const app = require('express');
const app = express();
app.get('/', (req, res) => {
  res.send("Home Page ");
})
app.get('/about', (req, res) => {
  res.send("About Page");
})

app.listen(4500, () => {
  console.log(`Listerning on 5000 port `)
})