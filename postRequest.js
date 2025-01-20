import app from "./server.js";
import users from "./data.js";
import express from 'express';

app.use(express.json());

app.post("/user", (req,res)=>{
    const newUser = {  
        id: users.length + 1,
        firstName: "Gourav", 
        lastName: "Verma", 
        hobby: "Developer", 
        age: 27, 
        city: "Jaipur" 
    }

    users.push(newUser);
    res.send(users);
})