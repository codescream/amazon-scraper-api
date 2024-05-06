import express from 'express';
// const request = require('request-promise');
import { configDotenv } from 'dotenv';

import productRoutes from './routes/products.js';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use('/products', productRoutes);

app.get('/', (req, res) => {
  res.send("<h1>Welcome to Amazon Scraper API.</h1><h2>Endpoints:</h2><h3>/products/search/:searchTerm - search for any product and retrieve info such as productId.</h3><p style='line-height: 0.5px'>e.g: /products/search/mackbook air.</p><h3 style='margin-top: 50px'>/products/:productId - get the details of any product.</h3><p style='line-height: 0.5px'>e.g: /products/B0CX22TZBC.</p><h3 style='margin-top: 50px'>/products/:productId/reviews - get reviews for a product.</h3><p style='line-height: 0.5px'>e.g: /products/B0CX22TZBC/reviews.</p><h3 style='margin-top: 50px'>/products/:productId/offers - get offers for a product.</h3><p style='line-height: 0.5px'>e.g: /products/B0CX22TZBC/offers.</p>");
});


app.listen(PORT, () => console.log(`Server listening on ${PORT}`));
