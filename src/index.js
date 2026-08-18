import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config();

connectDB();













/*
import express from "express";

const app = express()

    (async () => {
        try {
            await mongoose.connect(`${Process.env.MONGODB_URI}/${DB_NAME}`)
            app.on("error", (error) => {
                console.log("Error:", error);
                throw error
            });
            app.listen(process.env.PORT, () => {
                console.log(`App is listing on port ${process.env.PORT}`);
            })
        } catch (error) {
            console.log("ERROR: ", error);
            throw err
        }
    })()

*/ 