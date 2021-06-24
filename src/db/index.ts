import * as mongoose from 'mongoose';
import { createCollections } from './collection';

const dbUrl = '';
const mongooseInstance = mongoose.createConnection(dbUrl, { useNewUrlParser: true });
const collections = createCollections(mongooseInstance);

export default {
  collections
};
