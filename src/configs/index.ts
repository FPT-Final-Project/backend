import dotenv from "dotenv";
import genders from "./genders"

dotenv.config();

const configs =  {
    PORT: process.env.PORT || 5000,
    MONGO_DB_URL: process.env.MONGO_DB_URL,
    GENDERS: genders
}

export default configs