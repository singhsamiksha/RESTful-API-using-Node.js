import app from "./server.js";
import users from "./data.js";
import './logMiddleware.js';

app.get("/users", (req,res)=>{
     res.send(users);
})