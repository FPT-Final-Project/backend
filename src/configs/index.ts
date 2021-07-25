import dotenv from 'dotenv';
import { genders } from './genders';

dotenv.config();

export const PORT = process.env.PORT || 5000;
export const { MONGO_DB_URL } = process.env;
export const GENDERS = genders;
export const { TOKEN_SECRET } = process.env;
export const { CLOUDINARY_NAME } = process.env;
export const { CLOUDINARY_API_SECRET } = process.env;
export const { CLOUDINARY_API_KEY } = process.env;
