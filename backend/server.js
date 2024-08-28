const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');

const app = express();
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1/marrow', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Get the default connection
const db = mongoose.connection;

// Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Listen for the 'open' event, which indicates a successful connection
db.once('open', function() {
  console.log('Connected to MongoDB!');
});


app.use('/api', userRoutes);

app.listen(3000, () => {
  console.log('Server started on port 3000');
});