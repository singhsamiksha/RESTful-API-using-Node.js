import express from "express";
import mongoose from "mongoose";
import { logMiddleware } from "./Middlewares/logMiddleware.js";
import { validateMiddleware } from "./Middlewares/validateMiddleware.js";
import { postRequest } from "./Requests/postRequest.js";
import { getIdRequest } from "./Requests/getByIdRequest.js";
import { deleteRequest } from "./Requests/deleteRequest.js";
import { putRequest } from "./Requests/putRequest.js";
import { getRequest } from "./Requests/getRequest.js";

// Initialize express app first
const app = express();
app.use(express.json()); 


logMiddleware(app);
validateMiddleware(app);

// MongoDB connection
mongoose.connect("mongodb://localhost:27017");

const db = mongoose.connection;
db.on("open", () => console.log("Connection is successful!"));
db.on("error", (error) => console.error("Connection error:", error));

// Attach routes after defining app
postRequest(app);
putRequest(app);
getIdRequest(app);
getRequest(app);
deleteRequest(app);

// Start the server
const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});

export default app;
