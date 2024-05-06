import express from 'express';
import request from 'request-promise';
// const request = require('request-promise');

import productRoutes from './routes/products.js';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use('/products', productRoutes);

app.get('/', (req, res) => {
  res.send("Welcome to Amazon Scraper API.")
});


app.listen(PORT, () => console.log(`Server listening on ${PORT}`));
