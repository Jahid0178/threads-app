import mongoose from "mongoose";

let isConnected = false; // variable to check if mongoose is connected
// 0rcivlGOdWpRloFw threads
export const connectToDB = async () => {
  mongoose.set("strictQuery", true);
  if (!process.env.MONGODB_URL) return console.log("mongodb url not found");

  if (isConnected) return console.log("already connected to db");

  try {
    await mongoose.connect(process.env.MONGODB_URL);
    isConnected = true;

    console.log("Connected MongoDB");
  } catch (error) {
    console.log(error);
  }
};
