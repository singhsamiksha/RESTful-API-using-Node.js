import app from "../server.js";
import users from "../utils/data.js";
import express from 'express';
import '../Middlewares/validateMiddleware.js';
import '../Middlewares/logMiddleware.js';


app.use(express.json());

app.delete('/user/:id', (req, res) => {
    const userId = req.params.id;
    const userIndex = users.findIndex((user) => user.id === userId);
    if (userIndex === -1) {
        return res.status(404).json({ message: "User doesn't exist with this ID." });
    }
    users.splice(userIndex, 1);

    res.status(200).send(users); 
    console.log(`User having id : ${userId} is deleted`);

});
