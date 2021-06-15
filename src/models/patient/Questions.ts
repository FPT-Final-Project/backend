import mongoose from "mongoose"
import { Document,Schema } from "mongoose"
export interface IQuestion extends Document {
    _id: string;
    title: string;
    description: string;
    patientId: string;
    createdAt: number;
    updatedAt: number;
    isDeletedAt: boolean;
  }
  
  export const QuestionSchema: Schema = new Schema({
    _id: { type: String, require: true },
    title: { type: String, require: true },
    description: { type: String, require: true },
    patientId: { type: String, require: true, index: true },
    createdAt: { type: Number },
    updatedAt: { type: Number },
    isDeletedAt: { type: Boolean },
  });

  export default mongoose.model<IQuestion>("Question", QuestionSchema)