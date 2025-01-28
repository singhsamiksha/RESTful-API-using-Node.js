import mongoose from "mongoose";

const memberSchema = new mongoose.Schema({
    Name: String,
    Age: Number,
    Gender: String,
    Address: String,
    Phone: Number,
});

const memberModel = mongoose.model("Members",memberSchema);

export default memberModel;