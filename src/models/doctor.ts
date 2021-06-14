import mongoose from "mongoose";
import configs from "../configs";
const { GENDERS } = configs;
const doctorSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
      minlength: 6,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    age: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
    },
    gender: {
      type: String,
      enum: GENDERS.genders,
      default: 0,
    },
    phone: {
      type: String,
      required: true,
      minlength: 10,
    },
    dateOfBirth: {
      type: Date,
    },
    address: {
      type: String,
    },
    major: {
      type: String,
    },
    isDeleted: {
      type: Boolean,
    },
  },
  { timestamps: true }
);
export default mongoose.model("Doctor", doctorSchema);
