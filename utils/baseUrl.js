import { configDotenv } from "dotenv";

configDotenv();

const apiKey = process.env.SCRAPER_API_KEY;

export const baseUrl = `http://api.scraperapi.com?api_key=${apiKey}&autoparse=true`;