import express from "express";
import mongoose from "mongoose";
import { postRequest } from "./Requests/postRequest.js";

const app = new express(); 
const PORT = 8080;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017");

const db = mongoose.connection;

db.on("open", () => {
  console.log("Connection is successful!");
});

db.on("error", (error) => {
  console.error("Connection is not created!", error);
});

postRequest(app);

