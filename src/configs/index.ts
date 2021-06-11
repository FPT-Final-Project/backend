import dotenv from "dotenv";
dotenv.config();

const configs =  {
    PORT: process.env.PORT || 5000,
    MONGO_DB_URL: process.env.MONGO_DB_URL,
}

export default configs