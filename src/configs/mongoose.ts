import mongoose from 'mongoose';
import logger from '../utils/logger';
import { MONGO_DB_URL } from './index';

export default {
  connect: () => {
    mongoose.set('useNewUrlParser', true);
    mongoose.set('useFindAndModify', false);
    mongoose.set('useCreateIndex', true);
    mongoose.set('useUnifiedTopology', true);
    mongoose.connect(MONGO_DB_URL!);
    mongoose.connection.on('error', (err) => {
      logger.error(err);
      logger.error(`MongoDB connection failed: ${MONGO_DB_URL}`);
      process.exit();
    });
  },

  close: () => {
    mongoose.connection.close();
  },
};
