import mongoose from 'mongoose';
import { MONGODB_URI } from './config.js';

//top level await

export const connectDB = async () => {
  try {
    //strictQuery
    mongoose.set('strictQuery', false);
    const conn = await mongoose.connect(MONGODB_URI);

    console.log(`MongoDB Connected: ${conn.connection.name}`);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};
