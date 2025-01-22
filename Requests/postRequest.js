import app from "../server.js";
import users from "../utils/data.js";
import express from 'express';
import '../Middlewares/validateMiddleware.js';
import '../Middlewares/logMiddleware.js'

app.use(express.json());

app.post("/user", (req,res)=>{
    const newUser = {
        ...req.body,
        id : users.length+1
    }
    users.push(newUser);
    res.status(201).json(users);
    console.log("User is created successfully");
})