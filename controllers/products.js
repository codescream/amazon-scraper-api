import request from "request-promise";
import axios from "axios";

import { baseUrl } from "../utils/index.js";

const scrapeUrl = "https:amazon.com";

export const getProductDetails = async (req, res) => {
  const { productId } = req.params;

  try {
    const { data } = await axios.get(`${baseUrl}&url=${scrapeUrl}/dp/${productId}`);

    res.json(data);    
  } catch (error) {
    res.json(error);
  }
}

export const getProductReviews = async (req, res) => {
  const { productId } = req.params;

  try {
    const { data } = await axios.get(`${baseUrl}&url=${scrapeUrl}/product-reviews/${productId}`);

    res.json(data);
  } catch (error) {
    res.json(error);
  }
}

export const getProductOffers = async (req, res) => {
  const { productId } = req.params;

  try {
    const { data } = await axios.get(`${baseUrl}&url=${scrapeUrl}/gp/offer-listing/${productId}`);

    res.json(data);
  } catch (error) {
    res.json(error);
  }
}