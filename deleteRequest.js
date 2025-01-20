import app from "./server.js";
import users from "./data.js";
import express from 'express';


app.use(express.json());

app.delete('/user/:id', (req, res) => {
    const userId = req.params.id;

    // Check if user exists
    const userIndex = users.findIndex((user) => user.id === userId);
    if (userIndex === -1) {
        return res.status(404).json({ message: "User doesn't exist with this ID." });
    }

    // Remove the user from the array
    users.splice(userIndex, 1);

    res.send(users); // Return the updated users array
});
