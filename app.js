const express = require('express');

const app = express();
const port = 3000;

app.use(express.json());

let bills = [];

app.get('/items', (req, res) => {
  res.send(bills);
});

app.post('/items', (req, res) => {
  const bill = req.body;
  bills.push(bill);
  res.send(bill);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
module.exports = app