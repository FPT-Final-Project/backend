import dotenv from 'dotenv';
import genders from './genders';

dotenv.config();

export const PORT = process.env.PORT || 5000;
export const MONGO_DB_URL = process.env.MONGO_DB_URL;
export const GENDERS = genders;
export const TOKEN_SECRET = process.env.TOKEN_SECRET;
