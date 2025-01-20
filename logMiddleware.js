import app from "./server.js";
import express from 'express';

app.use(express.json());

app.use((req,res,next)=>{
    console.log(
        "Method: " + req.method +
        " | URL: " + req.url +
        " | Status Code: " + res.statusCode
    );
    next();
})