import mongoose from "mongoose";
import configs from "./index";

const { MONGO_DB_URL } = configs;
export default {
  connect: () => {
    mongoose.set("useNewUrlParser", true);
    mongoose.set("useFindAndModify", false);
    mongoose.set("useCreateIndex", true);
    mongoose.set("useUnifiedTopology", true);
    mongoose.connect(MONGO_DB_URL!);
    mongoose.connection.on("error", (err) => {
      console.error(err);
      console.log("MongoDB connection failed: " + MONGO_DB_URL);
      process.exit();
    });
  },

  close: () => {
    mongoose.connection.close();
  },
};
