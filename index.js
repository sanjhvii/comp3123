const express = require('express');
const app = express();
const port = 3000; 

app.get('/hello', (req, res) => {
  res.send('Hello Express JS');
});


app.get('/user', (req, res) => {
  const { firstname, lastname } = req.query;
  const userData = { firstname, lastname };
  res.json(userData);
});


app.post('/user/:firstname/:lastname', (req, res) => {
  const { firstname, lastname } = req.params;
  const userData = { firstname, lastname };
  res.json(userData);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
