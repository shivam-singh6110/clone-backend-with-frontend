import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config();

connectDB()
    .then(() => {
        app.listen(process.env.PORT || 8000, () => {
            console.log(`Server isrunning at port: ${process.env.PORT}`);
        })
    })
    .catch((err) => {
        console.log("MONGO db connection failed !!!", err);
    })


app.get("/", (req, res) => {
    res.send("Hello, World!");
});













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