const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;

// Serve the JSON API
app.get('/api/images', (req, res) => {
  res.sendFile(path.join(__dirname, 'images-api.json'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
