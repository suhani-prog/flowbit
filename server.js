const meRoutes = require('./routes/me');

const authRoutes = require('./routes/auth');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);

app.use('/me', meRoutes);



const PORT = process.env.PORT || 5000;

mongoose.connect('mongodb://localhost:27017/flowbit', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Mongo Connected'))
  .catch(err => console.log(err));

// Add your routes here later

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
