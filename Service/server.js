const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Define a route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Define another route
app.get('/about', (req, res) => {
  res.send('About Page');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
