import mongoose from 'mongoose';
import { app } from './app';
import dotenv from 'dotenv';
dotenv.config();

const start = async () => {
  console.log('Starting up ......');
  if (!process.env.PORT) {
    throw new Error('PORT must be defined.');
  }
  if (!process.env.MONGO_URI) {
    throw new Error('MONGO_URI must be defined.');
  }
  try {
    mongoose.set('strictQuery', false);
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected to MongoDB');
  } catch (err) {
    console.log(err);
  }
  app.listen(process.env.PORT, () => {
    console.log(`App is listening at port ${process.env.PORT}!!!!!!`);
  });
};

start();
