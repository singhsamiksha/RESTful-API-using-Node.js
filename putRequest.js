import app from "./server.js";
import users from "./data.js";
import express from 'express';


app.use(express.json());

app.put('/user/:id', (req, res) => {
    const userId = req.params.id;
    const user = users.find((user) => user.id === userId);

    if (!user) {
        return res.status(404).json({ message: "User doesn't exist with this ID." });
    }

    const keys = Object.keys(req.body);
    keys.forEach((key) => {
        user[key] = req.body[key];
    });

    res.send(users); 
});
