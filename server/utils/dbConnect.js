import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

async function dbConnect() {
  try {
    let dbURL = process.env.MONGODB_URL;
    await mongoose.connect(dbURL);
    console.log("DB Connected Successfully")
  } catch (error) {
    console.log(error);
  }
}

dbConnect();
