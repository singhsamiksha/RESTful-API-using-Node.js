import app from "./server.js";
import users from "./data.js";

app.get("/users/:id", (req,res)=>{
    const userId = req.params.id;
    const user = users.find((user)=> user.id==userId);

    if(!user){
        return res.status(404).json({message : "User with this id doesn't exist."});
    }
    else{
        res.send(user);
    }
})