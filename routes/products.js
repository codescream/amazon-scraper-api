import express from 'express';

import { getProductDetails, getProductOffers, getProductReviews } from '../controllers/products.js';

const router = express.Router();

router.get('/:productId', getProductDetails);
router.get('/:productId/reviews', getProductReviews);
router.get('/:productId/offers', getProductOffers);

export default router;