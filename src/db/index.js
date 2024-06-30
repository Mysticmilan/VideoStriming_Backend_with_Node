import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
import dotenv from "dotenv";
dotenv.config();

const connectDB = async () => {
    try
    {
        console.log(`\n Connecting to MongoDB: ${process.env.MONGODB_URI}/${DB_NAME}`)
       const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`\n MongoDB connected: ${connectionInstance.connection.host}`);
    }
    catch (error)
    {
        console.error("MongoDB connection faild: ", error);
        process.exit(1);
    }
}

export default connectDB;