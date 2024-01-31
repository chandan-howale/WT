const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Configure body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// static files
app.use(express.static(__dirname));

//GET requests to serve the HTML form
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/userForm.html');  // Corrected path
});

// POST requests to handle form data
app.post('/submit', (req, res) => {
  const data = req.body;
  res.send('Data Received: ' + JSON.stringify(data));
});

// Start the Express server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
