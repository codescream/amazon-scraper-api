import express from 'express';

import { getProductDetails, getProductReviews } from '../controllers/products.js';

const router = express.Router();

router.get('/:productId', getProductDetails);
router.get('/:productId/reviews', getProductReviews);

export default router;