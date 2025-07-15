const express = require('express');
const notesRoutes = require('./routes/notesRoutes');

const app = express();
const port = 3000; // You can hardcode the port or use process.env.PORT if using .env

app.use(express.json()); // Middleware to parse JSON request bodies

// Use the notes routes
app.use('/notes', notesRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});