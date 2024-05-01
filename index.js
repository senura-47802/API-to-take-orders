const express = require('express');
const mongoose = require('mongoose');
const mongodb = require('mongodb');
const cron = require('./cron'); 
const Order = require('./models/Order'); 
const html = require('html');
const path = require('path');
const bodyParser = require('body-parser')
const app = express();
const PORT = process.env.PORT || 3000;
mongoose.connect('mongodb+srv://senura2008:47802@cluster0.5u4anza.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
});
app.use(express.json());

app.post('/order', async (req, res) => {
  try {
    const { name, details, phoneNo, price } = req.body;
    const expiration = new Date();
    expiration.setDate(expiration.getDate() + 2);
    const order = new Order({
      name,
      details,
      phoneNo,
      price,
      expiration,
    });

    await order.save();
    res.status(201).json({ message: 'Order created successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});