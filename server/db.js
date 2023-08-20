import { connect } from 'mongoose';
import { MONGODB_URI } from './config.js';

export const connectDB = async () => {
  try {
    const conn = await connect(MONGODB_URI);
    console.log(`MongoDB Connected: ${conn.connection.name}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};
