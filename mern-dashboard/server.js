// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb://127.0.0.1:27017/mern_dashboard');


const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Data schema
const dataSchema = new mongoose.Schema({
  intensity: Number,
  likelihood: Number,
  relevance: Number,
  year: Number,
  country: String,
  topics: [String],
  region: String,
  city: String,
  sector: String,
  pest: String,
  source: String,
  swot: String,
});

const Data = mongoose.model('Data', dataSchema);

// API endpoint to fetch data
app.get('/api/data', async (req, res) => {
  try {
    const data = await Data.find({});
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
