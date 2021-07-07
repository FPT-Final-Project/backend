import dotenv from 'dotenv';
import { genders } from './genders';

dotenv.config();

export const PORT = process.env.PORT || 5000;
export const { MONGO_DB_URL } = process.env;
export const GENDERS = genders;
<<<<<<< HEAD
=======
export const TOKEN_SECRET = process.env.TOKEN_SECRET;
>>>>>>> 9fda1a9 ( fix yanr lint)
