const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/webhook', (req, res) => {
  const payload = req.body;
  console.log('Received payload:', JSON.stringify(payload, null, 2));

  res.send('Payload received and logged');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});