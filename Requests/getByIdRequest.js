import app from "../server.js";
import users from "../utils/data.js";
import '../Middlewares/validateMiddleware.js';
import '../Middlewares/logMiddleware.js'

app.get("/users/:id", (req,res)=>{
    const userId = req.params.id;
    const user = users.find((user)=> user.id==userId);

    if(!user){
        return res.status(404).json({message : "User with this id doesn't exist."});
    }
    else{
        res.status(200).send(user);
    }
})