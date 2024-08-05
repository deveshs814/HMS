import mongoose from "mongoose";
import { config } from "dotenv";


config({ path: "./config/.env" });


export const dbConnection = () => {
  mongoose 
    .connect(process.env.MONGO_URI , {
      dbName: "HMS",
    })
    .then(() => {
      console.log("Connected to the database!!");
    })
    .catch((err) => {
      console.log(
        `Some of the error occured while connecting to the database: ${err}`
      );
    });
};