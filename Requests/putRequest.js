import app from "../server.js";
import users from "../utils/data.js";
import express from 'express';
import '../Middlewares/validateMiddleware.js';
import '../Middlewares/logMiddleware.js';


app.use(express.json());

//Edit user details by id
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

    res.status(200).send(users); 
    console.log("User is updated successfully.");
});
