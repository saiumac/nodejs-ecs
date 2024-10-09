const express = require('express');
const app = express();
const port = 3000;

// Basic route for the root path
app.get('/', (req, res) => {
  res.send('Hello, ECS!');
});

// Start the server
app.listen(port, () => {
  console.log(`Node.js app is listening on port ${port}`);
});
