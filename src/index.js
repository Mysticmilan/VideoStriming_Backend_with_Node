import mongoose from "mongoose";
import { DB_NAME  } from "./constants.js";
import express from "express";
// import dotenv from "dotenv";
// dotenv.config();


import connectDB from "./db/index.js";

connectDB();




/*
const app = express();
;(async () => {
    try
    {
        console.log(`\n Connecting to MongoDB: ${process.env.MONGODB_URI}/${DB_NAME}`) 
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", (error) => {
            console.error("Error: ", err);
            throw error;
        });
        console.log(`\n MongoDB connected: ${mongoose.connection.host}`);

        app.listen(process.env.PORT, () => {
            console.log(`Server is running on port ${process.env.PORT}`);
        });
    }
    catch (error)
    {
        console.error("Error: ", error);
        throw error;
    }
})()
*/
