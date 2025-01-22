import app from "../server.js";
import users from "../utils/data.js";
import '../Middlewares/logMiddleware.js';

app.get("/users", (req,res)=>{
     res.status(200).send(users);
})